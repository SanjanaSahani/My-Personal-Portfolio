"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "../utils/cn";

type ImageItem = {
  name: string;
  icon: string;
};

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: ImageItem[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const first = images.slice(0, third);
  const second = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const Card = ({ item }: { item: ImageItem }) => (
    <div className="flex flex-col items-center gap-3">
      <img
        src={item.icon}
        alt={item.name}
        className="h-24 w-24 object-contain"
      />
      <p className="text-sm text-neutral-200">{item.name}</p>
    </div>
  );

  return (
    <div
      ref={gridRef}
      className={cn(
        "h-screen overflow-y-auto w-full bg-black",
        className
      )}
    >
         
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto pt-20 pb-40 px-6">
        
        <div className="grid gap-10">
          {first.map((item, i) => (
            <motion.div key={i} style={{ y: y1 }}>
              <Card item={item} />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10">
          {second.map((item, i) => (
            <motion.div key={i} style={{ y: y2 }}>
              <Card item={item} />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10">
          {thirdPart.map((item, i) => (
            <motion.div key={i} style={{ y: y3 }}>
              <Card item={item} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};