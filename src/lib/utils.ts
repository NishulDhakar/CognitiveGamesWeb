// General-purpose utilities (not game-specific)

export function noop() {}

// Class name concatenation utility
export function cn(...args: (string | undefined | null | false)[]): string {
  return args.filter(Boolean).join(" ");
}
