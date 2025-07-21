// components/MusicControllerBar.tsx
"use client";

import { useMusicPlayer } from "./MusicPlayerProvider";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function MusicControllerBar() {
  const { isPlaying, toggle } = useMusicPlayer();

  return (
    <div
      className={clsx(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
        "bg-white dark:bg-zinc-900 shadow-lg rounded-full px-4 py-2 flex items-center gap-3 transition-all"
      )}
    >
      <span className="text-sm font-medium">{isPlaying ? "Lagu sedang diputar" : "Lagu dijeda"}</span>
      <Button onClick={toggle} size="icon" variant="outline">
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>
    </div>
  );
}
