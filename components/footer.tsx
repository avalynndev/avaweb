import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <div className="flex flex-col justify-end h-64 relative">
      <div className="absolute bottom-0 -right-6 w-80 h-0.5 bg-linear-to-tr from-background via-neutral-800/50 to-neutral-800/50" />
      <div className="absolute bottom-0 -left-6 w-80 h-0.5 bg-linear-to-tl from-background via-neutral-800/50 to-neutral-800/50" />

      <div className="absolute -bottom-4 -left-2 w-0.5 h-48 bg-linear-to-t from-neutral-800/50 via-neutral-800/50 to-background" />
      <div className="absolute -bottom-4 -right-2 w-0.5 h-48 bg-linear-to-t from-neutral-800/50 via-neutral-800/50 to-background" />

      <div className="relative flex justify-between flex-col px-1 py-2.5 items-end h-28">
        <Link
          href="https://github.com/avalynndev"
          className="flex flex-col text-end relative group cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute -inset-2 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-muted-foreground/20 transition-all pointer-events-none z-2" />
          <span className="flex justify-end items-center text-xs font-semibold text-neutral-500 font-geistMono relative z-3">
            <span>GitHub</span>
            <ExternalLink
              className="stroke-neutral-500 inline-block ml-1 mb-0.5"
              size={14}
            />
          </span>
          <p className="text-sm text-zinc-300 font-geistSans relative z-3">
            github.com/avalynndev
          </p>
          <div className="absolute -bottom-3 -right-6 w-72 h-0.5 bg-linear-to-tl from-neutral-800/50 via-neutral-800/50 to-background" />
        </Link>
      </div>

      <div className="relative flex justify-end flex-col px-1 py-2.5 w-full">
        <div className="absolute top-0 -left-6 w-52 h-0.5 bg-linear-to-tr from-neutral-800/50 via-neutral-800/50 to-background" />

        <div className="absolute -top-7 left-1 space-x-2 hidden">
          {
            //flex
          }
          <a
            className="text-white grayscale-1"
            target="_blank"
            href="https://github.com/avalynndev"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 98 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-semibold text-neutral-500 font-geistMono">
            Contact
          </p>
          <span className="text-sm text-zinc-300 font-geistSans">
            Reach me at{" "}
            <span className="relative group">
              <a
                className="relative z-3 cursor-pointer"
                href="mailto:avalynndev@gmail.com"
              >
                avalynndev@gmail.com
              </a>
              <div className="absolute -inset-0.5 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-muted-foreground/20 transition-all pointer-events-none z-2" />
            </span>{" "}
            or @avalynndev.
          </span>
        </div>
      </div>
      <p className="text-xs text-neutral-800 absolute -bottom-5 right-0">
        © 2025 avalynndev. All rights reserved.
      </p>
    </div>
  );
}
