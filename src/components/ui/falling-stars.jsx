"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const FallingStars = ({ number = 20 }) => {
  const [starStyles, setStarStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setStarStyles(styles);
  }, [number]);

  return (
    <>
      {starStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 size-0.5 animate-falling-star rounded-full bg-yellow-300 shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        />
      ))}
    </>
  );
};

export default FallingStars;
