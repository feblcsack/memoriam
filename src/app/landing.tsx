import { Reenie_Beanie } from "next/font/google";

const reenie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
});

export default function Landing() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-8">
      <h1 className={`${reenie.className} text-8xl text-pink-200`}>
        Avril,
      </h1>

      <div className="w-16 h-1 mb-7 bg-pink-400 rounded-full" />

      <h2  className="text-2xl md:text-4xl max-w-xl leading-relaxed">
        And suddenly, every love song is about you.
      </h2>
    </div>
  );
}
