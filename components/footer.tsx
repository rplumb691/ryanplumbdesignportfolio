import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base text-ink">Ryan</p>
          <p>Product designer crafting trust, clarity, and systems.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socials.map((social) => (
            <Link key={social.label} href={social.href} className="transition hover:text-ink">
              {social.label}
            </Link>
          ))}
          <Link href="mailto:hello@ryan.design" className="font-medium text-ink">
            hello@ryan.design
          </Link>
        </div>
      </div>
    </footer>
  );
}
