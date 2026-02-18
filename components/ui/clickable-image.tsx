"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { Lightbox, type LightboxImage } from "./lightbox";

interface GalleryContextValue {
  open: (index: number) => void;
}

const GalleryContext = createContext<GalleryContextValue>({ open: () => {} });

export function GalleryProvider({
  images,
  children,
}: {
  images: LightboxImage[];
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <GalleryContext.Provider value={{ open }}>
      {children}
      <Lightbox
        images={images}
        initialIndex={activeIndex}
        open={isOpen}
        onClose={close}
      />
    </GalleryContext.Provider>
  );
}

export function ClickableImage({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const { open } = useContext(GalleryContext);

  return (
    <button
      type="button"
      onClick={() => open(index)}
      className="block w-full cursor-zoom-in text-left"
      aria-label="View full screen"
    >
      {children}
    </button>
  );
}
