import Link from "next/link";

type SiteHeaderProps = {
  variant?: "dark" | "light";
};

/**
 * Shared top navigation used on landing and browse pages.
 */
export function SiteHeader({ variant = "dark" }: SiteHeaderProps) {
  const isDark = variant === "dark";

  return (
    <header
      className={`flex items-center justify-between px-6 py-5 md:px-10 ${
        isDark ? "text-white" : "text-brand-dark"
      }`}
    >
      <Link href="/" className="text-lg font-bold tracking-tight">
        CampusCompass
      </Link>
      <nav className="flex gap-6 text-sm font-medium">
        <Link
          href="/browse"
          className={isDark ? "hover:text-brand-accent" : "hover:opacity-70"}
        >
          Benefits
        </Link>
        <Link
          href="/browse?category=resource"
          className={isDark ? "hover:text-brand-accent" : "hover:opacity-70"}
        >
          Guides
        </Link>
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
          target="_blank"
          rel="noopener noreferrer"
          className={isDark ? "hover:text-brand-accent" : "hover:opacity-70"}
        >
          Support
        </a>
      </nav>
    </header>
  );
}
