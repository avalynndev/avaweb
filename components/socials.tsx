"use client";
import { GithubLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const social_links = [
  {
    href: "https://github.com/avalynndev",
    label: "github",
    icon: <GithubLogoIcon />,
  },
  {
    href: "https://x.com/avalynndev",
    label: "twitter",
    icon: <XLogoIcon />,
  },
  {
    href: "https://youtube.com/@avalynndev",
    label: "youtube",
    icon: <YoutubeLogoIcon />,
  },
  {
    href: "https://discord.com/users/735059235141845003",
    label: "discord",
    icon: <DiscordLogoIcon />,
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
