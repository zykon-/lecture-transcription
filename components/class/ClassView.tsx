"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mic, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecordingsList from "./RecordingsList";
import TranscriptionsList from "./TranscriptionsList";
import { useClassData } from "@/hooks/useClassData";

export default function ClassView({
  semesterId,
  classId,
}: {
  semesterId: string;
  classId: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const classInfo = useClassData(semesterId, classId);

  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link
          href="/semesters"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Semesters
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{classInfo.name}</h1>
            <p className="text-muted-foreground mt-2">{classInfo.semester}</p>
          </div>
          <Button>
            <Mic className="mr-2 h-4 w-4" /> New Recording
          </Button>
        </div>
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

      <Tabs defaultValue="recordings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recordings">Recordings</TabsTrigger>
          <TabsTrigger value="transcriptions">Transcriptions</TabsTrigger>
        </TabsList>

        <TabsContent value="recordings">
          <RecordingsList 
            recordings={classInfo.recordings} 
            searchQuery={searchQuery} 
          />
        </TabsContent>

        <TabsContent value="transcriptions">
          <TranscriptionsList 
            recordings={classInfo.recordings} 
            searchQuery={searchQuery} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}