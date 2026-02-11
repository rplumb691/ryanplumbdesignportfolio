import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.03em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2";

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-signal text-white shadow-[0_18px_45px_-24px_rgba(19,18,0,0.65)] hover:-translate-y-0.5 hover:bg-signal/90",
  secondary:
    "bg-surface text-ink border border-border hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card",
  ghost: "bg-transparent text-ink hover:text-accent",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variantMap[variant], className)} {...props} />
  );
}

interface ButtonLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: ButtonVariant;
}

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(baseStyles, variantMap[variant], className)} {...props} />
  );
}
