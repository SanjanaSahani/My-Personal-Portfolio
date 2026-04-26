"use client";

import { cn } from "@/components/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icon: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;

    // ✅ Prevent duplicate cloning
    if (scroller.childElementCount > items.length) return;

    const scrollerContent = Array.from(scroller.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [items, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-10",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="
              w-44 h-44 flex flex-col items-center justify-center rounded-2xl
              backdrop-blur-xl
              bg-linear-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10
              border border-white/20
              shadow-lg shadow-purple-500/10
              hover:scale-105 hover:shadow-purple-500/30
              transition-all duration-300
            "
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-12 h-12 mb-4"
              onError={(e) => {
                e.currentTarget.src =
                  "https://cdn-icons-png.flaticon.com/512/565/565547.png";
              }}
            />
            <span className="text-sm font-medium text-white tracking-wide">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};