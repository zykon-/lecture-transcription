"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mic, Square, Pause, Play } from "lucide-react";
import AudioVisualizer from "./AudioVisualizer";
import TranscriptionPreview from "./TranscriptionPreview";

export function RecordingDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    // Start recording logic here
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    // Stop recording logic here
  };

  const handlePauseRecording = () => {
    setIsPaused(!isPaused);
    // Pause/resume recording logic here
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>New Recording</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Enter recording title..." />
          </div>

          <div className="space-y-2">
            <Label>Class</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bio101">Biology 101</SelectItem>
                <SelectItem value="phy201">Physics 201</SelectItem>
                <SelectItem value="chem101">Chemistry 101</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center">
              <span className="text-3xl font-mono">{formatTime(recordingTime)}</span>
            </div>

            <AudioVisualizer isRecording={isRecording && !isPaused} />

            <div className="flex justify-center space-x-4">
              {!isRecording ? (
                <Button onClick={handleStartRecording} size="lg">
                  <Mic className="mr-2 h-5 w-5" />
                  Start Recording
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handlePauseRecording}
                    variant="outline"
                    size="icon"
                  >
                    {isPaused ? (
                      <Play className="h-5 w-5" />
                    ) : (
                      <Pause className="h-5 w-5" />
                    )}
                  </Button>
                  <Button
                    onClick={handleStopRecording}
                    variant="destructive"
                    size="icon"
                  >
                    <Square className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
          </div>

          {isRecording && (
            <TranscriptionPreview />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}