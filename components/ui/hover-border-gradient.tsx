"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/components/utils/cn"

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  // Directional gradient map
  const gradientMap: Record<Direction, string> = {
    TOP: "bg-gradient-to-t from-blue-500 to-transparent",
    LEFT: "bg-gradient-to-l from-blue-500 to-transparent",
    BOTTOM: "bg-gradient-to-b from-blue-500 to-transparent",
    RIGHT: "bg-gradient-to-r from-blue-500 to-transparent",
  };

  // Rotate directions in sequence
  const rotateDirection = (current: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const nextIndex = (directions.indexOf(current) + 1) % directions.length;
    return directions[nextIndex];
  };

  // Change direction every second when not hovered
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={cn(
        "relative px-6 py-3 text-white font-semibold rounded-full border-2 border-transparent transition-all duration-500 overflow-hidden bg-black hover:bg-black/80",
        className
      )}
    >
      {/* Gradient Effect */}
      <span
        className={cn(
          "absolute inset-0 w-full h-full transition-all duration-500 rounded-full",
          hovered ? "bg-blue-500/30" : gradientMap[direction]
        )}
      ></span>

      {/* Button Text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
