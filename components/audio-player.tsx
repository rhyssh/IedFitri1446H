"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/takbir.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    const playAudio = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => console.log("Autoplay prevented:", error));
      }
    };

    // Try to autoplay
    playAudio();

    // Ensure autoplay works after user interaction
    const enableAudio = () => {
      if (!isPlaying) {
        playAudio();
      }
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener("click", enableAudio);
    };
  }, [isPlaying]);

  return null;
}
