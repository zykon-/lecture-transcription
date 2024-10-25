"use client";

export function useClassData(semesterId: string, classId: string) {
  // Mock data - In a real app, this would fetch from your database
  return {
    id: classId,
    name: "Biology 101",
    semester: "Spring 2024",
    recordings: [
      {
        id: 1,
        title: "Cell Structure and Function",
        date: "2024-04-10",
        duration: "45:32",
        transcriptionPreview: "Today we discussed the fundamental structures of cells...",
        hasTranscription: true,
      },
      {
        id: 2,
        title: "Cellular Respiration",
        date: "2024-04-08",
        duration: "52:18",
        transcriptionPreview: "We covered the process of cellular respiration...",
        hasTranscription: true,
      },
      {
        id: 3,
        title: "Photosynthesis Introduction",
        date: "2024-04-05",
        duration: "48:55",
        transcriptionPreview: "Introduction to photosynthesis and its importance...",
        hasTranscription: true,
      },
    ],
  };
}