"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SemestersPage() {
  const semesters = [
    {
      id: 1,
      name: "Spring 2024",
      courses: [
        { id: 1, name: "Biology 101", recordingsCount: 12 },
        { id: 2, name: "Physics 201", recordingsCount: 8 },
        { id: 3, name: "Chemistry 101", recordingsCount: 15 },
      ],
    },
    {
      id: 2,
      name: "Fall 2023",
      courses: [
        { id: 4, name: "Mathematics 201", recordingsCount: 20 },
        { id: 5, name: "Computer Science 101", recordingsCount: 18 },
      ],
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Semesters & Classes</h1>
          <p className="text-muted-foreground mt-2">Organize your recordings by semester and class</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Semester
        </Button>
      </div>

      <div className="grid gap-6">
        {semesters.map((semester) => (
          <Card key={semester.id}>
            <CardHeader>
              <CardTitle>{semester.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {semester.courses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/semesters/${semester.id}/${course.id}`}
                  >
                    <div
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center">
                        <BookOpen className="mr-3 h-5 w-5 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">{course.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {course.recordingsCount} recordings
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}