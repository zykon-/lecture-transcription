"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Play, Search, Calendar, Clock, Mic } from "lucide-react";

export default function RecordingsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const recordings = [
    {
      id: 1,
      title: "Biology 101 - Cell Structure",
      date: "2024-04-10",
      duration: "45:32",
      course: "Biology 101",
    },
    {
      id: 2,
      title: "Physics 201 - Quantum Mechanics",
      date: "2024-04-09",
      duration: "52:18",
      course: "Physics 201",
    },
    {
      id: 3,
      title: "Chemistry 101 - Chemical Bonds",
      date: "2024-04-08",
      duration: "48:55",
      course: "Chemistry 101",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Recordings</h1>
          <p className="text-muted-foreground mt-2">Browse and manage your lecture recordings</p>
        </div>
        <Button>
          <Mic className="mr-2 h-4 w-4" /> New Recording
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search recordings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4">
        {recordings.map((recording) => (
          <Card key={recording.id}>
            <CardContent className="flex items-center p-4">
              <Button variant="outline" size="icon" className="mr-4">
                <Play className="h-4 w-4" />
              </Button>
              <div className="flex-1">
                <h3 className="font-medium">{recording.title}</h3>
                <div className="flex gap-4 mt-1">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {recording.date}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {recording.duration}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}