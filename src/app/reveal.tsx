"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center mt-5">
      <TextRevealCard
        text="We&#39;re not in the different path"
        revealText="You&#39;re my path."
      >
        <TextRevealCardTitle>
          I&#39;m sorry, but you are wrong
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Slide to reveal
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
