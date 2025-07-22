import { AnimatedListDemo } from "./grid";
import Landing from "./landing";
import { TimelineDemo } from "./memory";
import Need from "./need";
import { TextRevealCardPreview } from "./reveal";
import { MusicAlert } from "@/components/MusicAlert";
import { MusicControllerBar } from "@/components/MusicControllerBar";
import { MusicPlayerProvider } from "@/components/MusicPlayerProvider";
import { AnimatedTestimonialsDemo } from "./testi";

export default function Home() {
  return (
    <MusicPlayerProvider>
      <MusicAlert />
      <MusicControllerBar />
      <div className="p-10 space-y-10">
        <Landing/>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <AnimatedListDemo />
          </div>
          <div className="w-full lg:w-1/2">
            <TextRevealCardPreview />
            
          </div>
        </div>
        <TimelineDemo />
        <AnimatedTestimonialsDemo />
        <Need/>
      </div>
    </MusicPlayerProvider>
  );
}
