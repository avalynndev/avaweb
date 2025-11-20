import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <div className="flex flex-col justify-end h-48 relative">
      <div className="absolute bottom-0 -right-6 w-80 h-0.5 bg-linear-to-tr from-background via-neutral-300/60 to-neutral-400/60 dark:via-neutral-800/50 dark:to-neutral-800/50" />
      <div className="absolute bottom-0 -left-6 w-80 h-0.5 bg-linear-to-tl from-background via-neutral-300/60 to-neutral-400/60 dark:via-neutral-800/50 dark:to-neutral-800/50" />

      <div className="absolute -bottom-4 -left-2 w-0.5 h-24 bg-linear-to-t from-neutral-300/60 via-neutral-400/60 to-background dark:from-neutral-800/50 dark:via-neutral-800/50" />
      <div className="absolute -bottom-4 -right-2 w-0.5 h-24 bg-linear-to-t from-neutral-300/60 via-neutral-400/60 to-background dark:from-neutral-800/50 dark:via-neutral-800/50" />

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
          </span>
        </div>
      </div>

      <p className="text-xs text-neutral-500 dark:text-neutral-800 absolute -bottom-5 right-0">
        © 2025 avalynndev. All rights reserved.
      </p>
    </div>
  );
}
