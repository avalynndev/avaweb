"use client";
import { useState, useEffect } from "react";

export function Clock() {
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
      <div
        onClick={() => setShowAnalog(true)}
        className="flex items-center relative group cursor-pointer text-nowrap px-1.5 py-0.5"
      >
        <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
          <div className="flex items-center relative group cursor-pointer px-1.5 py-0.5 rounded text-nowrap text-xs">
            <p className="z-10">{formatTime}</p>
            <div className="absolute -inset-1 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-muted transition-all" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center relative group cursor-pointer px-1.5 py-0.5 rounded text-nowrap text-xs"
      onClick={() => setShowAnalog(false)}
    >
      <p className="mr-2 z-10">{formatTime}</p>
      <div
        className="relative rounded-full bg-transparent border border-muted-foreground shadow-lg z-10"
        style={{ width: 18, height: 18 }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[2px] rounded-full bg-muted-foreground origin-bottom transform -translate-x-1/2"
          style={{
            height: "5.4px",
            transform: `translateY(-100%) rotate(${hourAngle}deg)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-0.5 rounded-full bg-muted-foreground origin-bottom transform -translate-x-1/2"
          style={{
            height: "7.2px",
            transform: `translateY(-100%) rotate(${minuteAngle}deg)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-px rounded-full bg-neutral-500 origin-bottom transform -translate-x-1/2"
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
      <div className="absolute -inset-1 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 min-w-full min-h-full rounded-md bg-muted transition-all" />
    </div>
  );
}
