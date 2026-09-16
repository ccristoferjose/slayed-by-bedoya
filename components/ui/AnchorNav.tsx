import Link from "next/link";

type AnchorNavProps = {
  items: { href: string; label: string }[];
  ariaLabel: string;
};

/** A quiet in-page index. Wraps on mobile, never scrolls the page sideways. */
export function AnchorNav({ items, ariaLabel }: AnchorNavProps) {
  return (
    <nav aria-label={ariaLabel} className="border-y border-ink/10">
      <ul className="mx-auto flex max-w-[110rem] flex-wrap gap-x-7 gap-y-2 px-6 py-4 sm:px-8 lg:px-12">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="label transition-colors hover:text-burgundy">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
