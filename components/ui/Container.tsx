import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** `wide` for editorial image layouts, `narrow` for reading columns. */
  size?: "default" | "wide" | "narrow";
  className?: string;
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[110rem]",
} as const;

/** Horizontal gutters live here and nowhere else, so nothing can overflow. */
export function Container({ children, size = "default", className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
