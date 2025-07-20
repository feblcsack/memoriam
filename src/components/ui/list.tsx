"use client";

import { cn } from "@/lib/utils"; // pastikan ada fungsi cn ini (untuk gabung className)
import { AnimatePresence, motion } from "framer-motion"; // ✅ ini yang benar
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";

// Komponen item individual dengan animasi
export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        originY: 0,
        transition: { type: "spring", stiffness: 350, damping: 40 },
      }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: { type: "spring", stiffness: 350, damping: 40 },
      }}
      layout
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  );
}

// Props untuk AnimatedList
export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

// Komponen utama AnimatedList
export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);

    // Ubah children ke dalam array agar bisa dimanipulasi
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    // Logic animasi delay bertahap
    useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [index, delay, childrenArray.length]);

    // Ambil item yang ditampilkan
    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);

    return (
      <div
        className={cn("flex flex-col items-center gap-4", className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";
