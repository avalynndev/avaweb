import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <div className="flex flex-col justify-end h-64 relative">
      <div className="absolute bottom-0 -right-6 w-80 h-0.5 bg-linear-to-tr from-background via-neutral-300/60 to-neutral-400/60 dark:via-neutral-800/50 dark:to-neutral-800/50" />
      <div className="absolute bottom-0 -left-6 w-80 h-0.5 bg-linear-to-tl from-background via-neutral-300/60 to-neutral-400/60 dark:via-neutral-800/50 dark:to-neutral-800/50" />

      <div className="absolute -bottom-4 -left-2 w-0.5 h-48 bg-linear-to-t from-neutral-300/60 via-neutral-400/60 to-background dark:from-neutral-800/50 dark:via-neutral-800/50" />
      <div className="absolute -bottom-4 -right-2 w-0.5 h-48 bg-linear-to-t from-neutral-300/60 via-neutral-400/60 to-background dark:from-neutral-800/50 dark:via-neutral-800/50" />

      <div className="relative flex justify-between flex-col px-1 py-2.5 items-end h-28">
        <Link
          href="https://github.com/avalynndev"
          className="flex flex-col text-end relative group cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute -inset-2 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-muted-foreground/10 transition-all pointer-events-none z-2" />
          <span className="flex justify-end items-center text-xs font-semibold text-neutral-600 dark:text-neutral-500 font-geistMono relative z-3">
            <span>GitHub</span>
            <ExternalLink
              className="stroke-neutral-600 dark:stroke-neutral-500 inline-block ml-1 mb-0.5"
              size={14}
            />
          </span>
          <p className="text-sm text-neutral-700 dark:text-zinc-300 font-geistSans relative z-3">
            github.com/avalynndev
          </p>
          <div className="absolute -bottom-3 -right-6 w-72 h-0.5 bg-linear-to-tl from-neutral-300/60 via-neutral-400/60 to-background dark:from-neutral-800/50 dark:via-neutral-800/50" />
        </Link>
      </div>

      <div className="relative flex justify-end flex-col px-1 py-2.5 w-full">
        <div className="absolute top-0 -left-6 w-52 h-0.5 bg-linear-to-tr from-neutral-300/60 via-neutral-400/60 to-background dark:from-neutral-800/50 dark:via-neutral-800/50" />

        <div className="flex flex-col">
          <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-500 font-geistMono">
            Contact
          </p>
          <span className="text-sm text-neutral-700 dark:text-zinc-300 font-geistSans">
            Reach me at{" "}
            <span className="relative group">
              <a
                className="relative z-3 cursor-pointer text-neutral-900 dark:text-white"
                href="mailto:avalynndev@gmail.com"
              >
                avalynndev@gmail.com
              </a>
              <div className="absolute -inset-0.5 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-muted-foreground/10 transition-all pointer-events-none z-2" />
            </span>{" "}
            or @avalynndev.
          </span>
        </div>
      </div>

      <p className="text-xs text-neutral-500 dark:text-neutral-800 absolute -bottom-5 right-0">
        © 2025 avalynndev. All rights reserved.
      </p>
    </div>
  );
}
