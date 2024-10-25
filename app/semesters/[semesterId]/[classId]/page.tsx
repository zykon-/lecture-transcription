import { Metadata } from "next";
import ClassView from "@/components/class/ClassView";

export const metadata: Metadata = {
  title: "Class Recordings",
  description: "View and manage your class recordings and transcriptions",
};

// This is required for static site generation with dynamic routes
export async function generateStaticParams() {
  // Mock data - In a real app, this would come from your database
  const semesters = [
    {
      id: "1",
      courses: [
        { id: "1" },
        { id: "2" },
        { id: "3" },
      ],
    },
    {
      id: "2",
      courses: [
        { id: "4" },
        { id: "5" },
      ],
    },
  ];

  return semesters.flatMap(semester => 
    semester.courses.map(course => ({
      semesterId: semester.id,
      classId: course.id,
    }))
  );
}

export default function ClassPage({
  params,
}: {
  params: { semesterId: string; classId: string };
}) {
  return <ClassView semesterId={params.semesterId} classId={params.classId} />;
}