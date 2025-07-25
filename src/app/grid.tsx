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
    name: "Late night feels",
    description: "U were on loop in my head like my fav sad jam. Still hits.",
    time: "2:34 AM",
    icon: "🌙",
    color: "#8E7AB5",
  },
  {
    name: "Nostalgia hit diff",
    description: "Ur scent still chillin after that hug",
    time: "Last night",
    icon: "🧥",
    color: "#C499F3",
  },
  {
    name: "That look tho",
    description: "One look. Whole movie played in my head. Still can't forget.",
    time: "3 weeks ago",
    icon: "👁️",
    color: "#A267AC",
  },
  {
    name: "Voicemail vibes",
    description: "“Yo… u up? I miss u fr.”",
    time: "Yesterday",
    icon: "📼",
    color: "#D988B9",
  },
  {
    name: "Typed, cried, unsent",
    description: "Wrote a whole essay. Backspaced it all. Love still loud.",
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
