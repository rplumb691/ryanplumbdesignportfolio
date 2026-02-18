"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, open, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const lastTouchDist = useRef<number | null>(null);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    if (open) {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  }, [open, index]);

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const prev = useCallback(() => {
    resetView();
    setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length, resetView]);

  const next = useCallback(() => {
    resetView();
    setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length, resetView]);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => {
      const next = z - e.deltaY * 0.002;
      return Math.min(Math.max(next, 1), 5);
    });
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (zoom <= 1) return;
      setDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      panStart.current = { ...pan };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [zoom, pan]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      setPan({
        x: panStart.current.x + (e.clientX - dragStart.current.x),
        y: panStart.current.y + (e.clientY - dragStart.current.y),
      });
    },
    [dragging]
  );

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        if (lastTouchDist.current !== null) {
          const delta = dist - lastTouchDist.current;
          setZoom((z) => Math.min(Math.max(z + delta * 0.008, 1), 5));
        }
        lastTouchDist.current = dist;
      }
    },
    []
  );

  const handleTouchEnd = useCallback(() => {
    lastTouchDist.current = null;
  }, []);

  const handleDoubleClick = useCallback(() => {
    if (zoom > 1) {
      resetView();
    } else {
      setZoom(2.5);
    }
  }, [zoom, resetView]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === imageAreaRef.current) {
        if (zoom > 1) {
          resetView();
        } else {
          onClose();
        }
      }
    },
    [onClose, zoom, resetView]
  );

  if (!open || images.length === 0) return null;

  const current = images[index];

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black">
      {/* Top bar — highest layer */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-5 py-4">
        <span className="text-sm text-white/60">
          {index + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Prev / Next — above image area */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white max-sm:left-1 max-sm:h-10 max-sm:w-10"
            aria-label="Previous image"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white max-sm:right-1 max-sm:h-10 max-sm:w-10"
            aria-label="Next image"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Image area — below controls */}
      <div
        ref={imageAreaRef}
        className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
        style={{
          cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in",
          touchAction: "none",
        }}
        onClick={handleBackdropClick}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className="relative max-h-[85vh] max-w-[90vw] transition-transform duration-150 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transitionProperty: dragging ? "none" : "transform",
          }}
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={2400}
            height={1600}
            className="pointer-events-none h-auto max-h-[85vh] w-auto max-w-[90vw] select-none object-contain"
            sizes="90vw"
            draggable={false}
            priority
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
