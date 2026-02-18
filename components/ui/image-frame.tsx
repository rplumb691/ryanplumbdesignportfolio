import Image from "next/image";

interface ImageFrameProps {
  src: string;
  alt: string;
  caption: string;
}

export function ImageFrame({ src, alt, caption }: ImageFrameProps) {
  const isPlaceholder = src.includes("/placeholders/");

  return (
    <figure className="space-y-3">
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-surface/80 p-4">
        <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-accent/15 via-surface to-accent2/15">
          <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.4) 0%, transparent 60%)" }} />
          {isPlaceholder && (
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <span className="text-4xl font-semibold uppercase tracking-[0.35em] text-ink">
                COMING SOON
              </span>
            </div>
          )}
        </div>
      </div>
      <figcaption className="text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
