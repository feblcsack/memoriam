"use client"

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Need() {
  const whatsappNumber = "6283894280835";
  const whatsappMessage = "do you know how much a polar bear weighs?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const [showJitsi, setShowJitsi] = useState(false);
  const roomName = "not just a room"; // bebas ganti, yang penting unik

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
          Do You Need Me?
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
          {"I'm here for you, always."}
        </p>

        {/* Spotify Playlist */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-12">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/3SqfuyXqh0Sz5KZJHfRa3B?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
    <Button
      variant="default"
      className="backdrop-blur-md bg-gray-800/60 border border-white/10 text-white font-light text-lg px-8 py-6 rounded-full transition hover:scale-105 hover:text-gray-900 hover:shadow-lg hover:shadow-green-400/25"

    >
      💬 Text Finn
    </Button>
  </a>

  <Button
    onClick={() => setShowJitsi(!showJitsi)}
    variant="default"
    className="backdrop-blur-md bg-gray-800/60 border border-white/10 text-white font-light text-lg px-8 py-6 rounded-full transition hover:scale-105  hover:text-gray-900 hover:shadow-lg hover:shadow-green-400/25"

  >
    📹 Meet Me Now
  </Button>
</div>

        {/* Jitsi Meet Iframe */}
        {showJitsi && (
          <div className="w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://meet.jit.si/${roomName}`}
              allow="camera; microphone; fullscreen; display-capture"
              style={{ width: "100%", height: "100%", border: "0" }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 text-gray-500 text-sm">
          <p>Available for... everything — even your 3AM thoughts.</p>
        </div>
      </div>
    </div>
  );
}
