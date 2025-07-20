"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../components/ui/list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "Late night thoughts",
      description: "You were a song I played on repeat, even when it hurt.",
      time: "2:34 AM",
      icon: "🌙",
      color: "#8E7AB5",
    },
    {
      name: "New memory unlocked",
      description: "Your perfume still lingers in the hoodie I never returned.",
      time: "Last night",
      icon: "🧥",
      color: "#C499F3",
    },
    {
      name: "Eyes met",
      description: "It wasn’t just a glance — it was a moment I still replay.",
      time: "3 weeks ago",
      icon: "👁️",
      color: "#A267AC",
    },
    {
      name: "Midnight voicemail",
      description: "“If you're not asleep yet... I miss you.”",
      time: "Yesterday",
      icon: "📼",
      color: "#D988B9",
    },
    {
      name: "Heart typed but unsent",
      description: "Typed 3 paragraphs. Deleted all. Still love you.",
      time: "Just now",
      icon: "📱",
      color: "#9B5DE5",
    },
  ];
  
notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
