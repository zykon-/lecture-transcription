"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";
import { Recording } from "@/types/recording";

export default function TranscriptionsList({
  recordings,
  searchQuery,
}: {
  recordings: Recording[];
  searchQuery: string;
}) {
  const filteredRecordings = recordings
    .filter((recording) => recording.hasTranscription)
    .filter((recording) =>
      recording.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recording.transcriptionPreview?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="space-y-4">
      {filteredRecordings.map((recording) => (
        <Card key={recording.id}>
          <CardContent className="flex items-center p-4">
            <Button variant="outline" size="icon" className="mr-4">
              <FileText className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <h3 className="font-medium">{recording.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {recording.transcriptionPreview}
              </p>
              <div className="flex gap-4 mt-2">
                <span className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {recording.date}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}