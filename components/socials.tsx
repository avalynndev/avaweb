"use client";
import { XLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";

const social_links = [
  {
    href: "https://x.com/avalynndev",
    label: "twitter",
    icon: <XLogoIcon />,
  },
];

export function Socials() {
  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6">
      {social_links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className="flex items-center gap-2 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </div>
  );
}
