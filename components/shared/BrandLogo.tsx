import Image from "next/image";
import Link from "next/link";

import { BRAND_LOGOS, BRAND_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  logoClassName?: string;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  onClick?: () => void;
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-8 w-8 sm:h-9 sm:w-9",
  md: "h-10 w-10 sm:h-11 sm:w-11",
  lg: "h-14 w-14 sm:h-16 sm:w-16",
};

export function BrandLogo({
  className,
  logoClassName,
  size = "sm",
  asLink = false,
  onClick,
  priority = false,
}: BrandLogoProps) {
  const content = (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={BRAND_LOGOS.logo}
        alt={BRAND_NAME}
        width={64}
        height={64}
        priority={priority}
        className={cn("shrink-0 object-contain", sizeClasses[size], logoClassName)}
      />
    </span>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        onClick={onClick}
        className="inline-flex shrink-0 items-center"
        aria-label={`${BRAND_NAME} home`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
