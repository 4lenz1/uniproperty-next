'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
  label: string;
}

export const SocialIcon = ({ href, src, alt, label }: SocialIconProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
      />
    </Link>
  );
};
