import { AnimatedListDemo } from "./grid";
import { TimelineDemo } from "./memory";
import { TextRevealCardPreview } from "./reveal";

export default function Home() {
  return (
    <div className="p-10 space-y-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <AnimatedListDemo />
        </div>
        <div className="w-full lg:w-1/2">
          <TextRevealCardPreview />
        </div>
      </div>
      <TimelineDemo />
    </div>
  );
}
