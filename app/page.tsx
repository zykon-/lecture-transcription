import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, BookOpen, Calendar, ListTodo } from "lucide-react";
import Link from "next/link";
import { RecordingButton } from "@/components/recording/RecordingButton";

export default function Home() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Welcome to LectureScribe</h1>
          <p className="text-muted-foreground mt-2">Record, transcribe, and organize your lectures effortlessly</p>
        </div>
        <RecordingButton />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/semesters" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Semesters & Classes
              </CardTitle>
              <CardDescription>Organize your recordings by semester and class</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">View and manage your academic schedule</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/recordings" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Recent Recordings
              </CardTitle>
              <CardDescription>Access your latest lecture recordings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Browse and search through your recordings</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tasks" className="block">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ListTodo className="mr-2 h-5 w-5" />
                Tasks
              </CardTitle>
              <CardDescription>Manage your academic tasks and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Track assignments and important dates</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}