"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TranscriptionPreview() {
  const [transcription, setTranscription] = useState<string[]>([]);

  // Simulate real-time transcription
  useEffect(() => {
    const phrases = [
      "Welcome to today's lecture...",
      "We'll be discussing the fundamental concepts...",
      "Let's start with the main topic...",
      "This is an important point to remember...",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < phrases.length) {
        setTranscription(prev => [...prev, phrases[currentIndex]]);
        currentIndex++;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      <h3 className="font-medium">Live Transcription</h3>
      <ScrollArea className="h-[200px] rounded-md border p-4">
        {transcription.map((text, index) => (
          <p key={index} className="mb-2 text-sm">
            {text}
          </p>
        ))}
        <div className="animate-pulse text-sm text-muted-foreground">
          Listening...
        </div>
      </ScrollArea>
    </div>
  );
}