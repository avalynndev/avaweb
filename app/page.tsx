"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { StarFourIcon, XLogoIcon } from "@phosphor-icons/react";
import Projects from "@/components/projects";

function Clock() {
  const [time, setTime] = useState(new Date());
  const [showAnalog, setShowAnalog] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = hours * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  const formatTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  if (!showAnalog) {
    return (
      <div onClick={() => setShowAnalog(true)}>
        <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
          <div className="flex items-center relative group cursor-pointer border border-neutral-700 px-1.5 py-0.5 rounded font-geistMono text-nowrap text-xs">
            <p className="z-10">{formatTime}</p>
            <div className="absolute -inset-1 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-neutral-700/20 transition-all" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center relative group cursor-pointer text-nowrap"
      onClick={() => setShowAnalog(false)}
    >
      <p className="mr-2 z-10">{formatTime}</p>
      <div
        className="relative rounded-full bg-transparent border border-neutral-700 shadow-lg z-10"
        style={{ width: 18, height: 18 }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[2px] rounded-full bg-neutral-700 origin-bottom transform -translate-x-1/2"
          style={{
            height: "5.4px",
            transform: `translateY(-100%) rotate(${hourAngle}deg)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-0.5 rounded-full bg-neutral-700 origin-bottom transform -translate-x-1/2"
          style={{
            height: "7.2px",
            transform: `translateY(-100%) rotate(${minuteAngle}deg)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[1px] rounded-full bg-neutral-500 origin-bottom transform -translate-x-1/2"
          style={{
            height: "6.66px",
            transform: `translateY(-100%) rotate(${secondAngle}deg)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 rounded-full bg-black"
          style={{
            width: "0.72px",
            height: "0.63px",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div className="absolute -inset-1 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-xl bg-neutral-700/20 transition-all" />
    </div>
  );
}

function WorkItem({
  title,
  date,
  description,
  href,
}: {
  title: string;
  date: string;
  description: string;
  href?: string;
}) {
  const content = (
    <div className="flex flex-col relative max-h-96 h-full group cursor-pointer">
      <div className="absolute -inset-2 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-lg bg-neutral-700/20 transition-all pointer-events-none" />
      <div className="flex items-center w-full space-x-4 z-10 relative">
        <p className="text-sm font-semibold text-zinc-200 font-geistSans text-nowrap underline decoration-wavy decoration-neutral-800 underline-offset-4 group-hover:decoration-neutral-700 transition-colors">
          {title}
        </p>
        <div className="w-full h-0.5 bg-neutral-700 rounded-full" />
        <p className="text-xs font-semibold text-neutral-500 font-geistMono text-nowrap">
          {date}
        </p>
      </div>
      <p className="text-xs font-semibold text-neutral-500 font-geistMono mt-2">
        {description}
      </p>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

export default function Home() {
  return (
    <main className="mx-auto py-32 relative max-w-2xl min-h-screen overflow-hidden sm:overflow-visible px-6 sm:px-0">
      <div className="fixed z-[1005] inset-x-0 top-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-neutral-900/5 pointer-events-none"
            style={{
              backdropFilter: `blur(${10 - i}px)`,
              height: "12px",
              top: `${i * 12}px`,
            }}
          />
        ))}
      </div>

      <div className="flex justify-between items-center py-10 w-full text-sm font-mono text-neutral-600">
        <p>I</p>
        <Clock />
      </div>

      <div className="flex flex-col w-full h-full">
        <p className="text-lg font-semibold text-zinc-300 font-geistSans">
         c
        </p>
        <p className="text-xs font-semibold text-neutral-500 font-geistMono">
          Frontend Developer
        </p>

        <div className="w-auto text-zinc-200 text-base font-geistSans py-6">
          <span>
            Just your friendly neighborhood fullstack developer{" "}
            <span className="italic font-serif">
sd            </span>
sd            <span className="font-serif italic underline">sd</span>
            <span className="italic font-serif underline">sd</span>sd
xc            <span>c</span> sd
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-12 py-4">
        <div className="flex flex-col py-6">
          <p className="text-xs font-semibold text-neutral-500 font-geistMono pb-2">
            My Work
          </p>
          <div className="grid grid-cols-1 mt-2 h-auto gap-12">
            <WorkItem
              title="asd"
              date="2024 - 11"
              description="asd"
            />
          </div>
          <Link href="/work" className="w-full mt-4">
            <p className="text-xs font-semibold text-neutral-500 font-geistMono w-fit">
              View all
            </p>
          </Link>
        </div>

        <div className="flex flex-col py-6">
          <p className="text-xs font-semibold text-neutral-500 font-geistMono ml-auto w-fit pb-3">
            My Projects
          </p>
          <div className="grid grid-cols-1 mt-2 h-auto gap-12">
            <WorkItem
              title="Threads Remake"
              date="2024 - 09"
              description="asd"
            />
            <WorkItem
              title="Livestreaming platform"
              date="2024 - 06"
              description="ads"
            />
          </div>
          <Link href="/projects" className="w-full mt-4">
            <p className="text-xs font-semibold text-neutral-500 font-geistMono ml-auto w-fit">
              View all
            </p>
          </Link>
        </div>
      </div>
      <Projects />
      <div className="mb-8 flex flex-wrap items-center gap-4 md:mb-12 md:gap-6">
        {[{}].map((link) => (
          <Link
            href="/"
            key="key"
            className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
          >
            <XLogoIcon/>
            twitter
          </Link>
        ))}
      </div>

      <div className="mt-5 flex w-full flex-col items-start justify-start gap-3">
        <div className="flex items-center justify-start gap-1 rounded-full bg-gray-100 px-4 py-2 font-serif text-sm leading-tight text-black">
          <StarFourIcon size={12} />
          tools
        </div>
        <div className="flex flex-wrap items-center justify-start gap-1">
          {[
            {
              name: "Figma",
              icon: (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_203)">
                    <path
                      d="M16.0001 48C20.4162 48 24.0002 44.4159 24.0002 39.9999V31.9999H16.0001C11.5841 31.9999 8 35.5839 8 39.9999C8 44.4159 11.5841 48 16.0001 48Z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M8 24C8 19.584 11.5841 15.9999 16.0001 15.9999H24.0002V31.9998H16.0001C11.5841 32 8 28.416 8 24Z"
                      fill="#A259FF"
                    />
                    <path
                      d="M8 8.00006C8 3.58406 11.5841 0 16.0001 0H24.0002V15.9999H16.0001C11.5841 15.9999 8 12.4161 8 8.00006Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M23.9998 0H31.9999C36.4159 0 40 3.58406 40 8.00006C40 12.4161 36.4159 15.9999 31.9999 15.9999H23.9998V0Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M40 24C40 28.416 36.4159 32 31.9999 32C27.5838 32 23.9998 28.416 23.9998 24C23.9998 19.584 27.5838 15.9999 31.9999 15.9999C36.4159 15.9999 40 19.584 40 24Z"
                      fill="#1ABCFE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_203">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
          ].map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-start gap-1 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-black"
            >
              {tool.icon}
              {tool.name}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col py-4">
        <p className="text-xs font-semibold text-neutral-500 font-geistMono mb-3">
         aasd
        </p>
        <div className="w-auto text-zinc-200 text-base font-geistSans">
          <span>
            blah blah
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-end h-64 relative">
        <div className="absolute bottom-0 -right-6 w-80 h-0.5 bg-gradient-to-tr from-background via-neutral-800/50 to-neutral-800/50" />
        <div className="absolute bottom-0 -left-6 w-80 h-0.5 bg-gradient-to-tl from-background via-neutral-800/50 to-neutral-800/50" />

        <div className="absolute -bottom-4 -left-2 w-0.5 h-48 bg-gradient-to-t from-neutral-800/50 via-neutral-800/50 to-background" />
        <div className="absolute -bottom-4 -right-2 w-0.5 h-48 bg-gradient-to-t from-neutral-800/50 via-neutral-800/50 to-background" />

        <div className="relative flex justify-between flex-col px-1 py-2.5 items-end h-28">
          <Link
            href="/link"
            className="flex flex-col text-end relative group cursor-pointer"
          >
            <div className="absolute -inset-2 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-neutral-700/20 transition-all pointer-events-none z-[2]" />
            <span className="flex justify-end items-center text-xs font-semibold text-neutral-500 font-geistMono relative z-[3]">
              <span>Link</span>
              <ExternalLink
                className="stroke-neutral-500 inline-block ml-1 mb-0.5"
                size={14}
              />
            </span>
            <p className="text-sm text-zinc-300 font-geistSans relative z-[3]">
             idk
            </p>
            <div className="absolute -bottom-3 -right-6 w-72 h-0.5 bg-gradient-to-tl from-neutral-800/50 via-neutral-800/50 to-background" />
          </Link>
        </div>

        <div className="relative flex justify-end flex-col px-1 py-2.5 w-full">
          <div className="absolute top-0 -left-6 w-52 h-0.5 bg-gradient-to-tr from-neutral-800/50 via-neutral-800/50 to-background" />

          <div className="absolute -top-7 flex left-1 space-x-2">
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
              Contact me
            </p>
            <span className="text-sm text-zinc-300 font-geistSans">
              Reach me at{" "}
              <span className="relative group">
                <a
                  className="relative z-[3] cursor-pointer"
                  href="mailto:avalynndev@gmail.com"
                >
                  avalynndev@gmail.com
                </a>
                <div className="absolute -inset-0.5 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-neutral-700/20 transition-all pointer-events-none z-[2]" />
              </span>{" "}
              or @avalynndev.
            </span>
          </div>
        </div>
        <p className="text-xs text-neutral-800 absolute -bottom-5 right-0">
          © 2025 avalynndev. All rights reserved.
        </p>
      </div>
    </main>
  );
}
