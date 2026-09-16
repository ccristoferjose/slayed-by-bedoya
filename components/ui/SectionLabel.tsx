import type { ElementType, ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

/** The small letter-spaced eyebrow above a section heading. */
export function SectionLabel({ children, as: Tag = "p", className = "" }: SectionLabelProps) {
  return <Tag className={`label ${className}`}>{children}</Tag>;
}
