"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { RecordingDialog } from "./RecordingDialog";

export function RecordingButton() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Button onClick={() => setShowDialog(true)}>
        <Plus className="mr-2 h-4 w-4" /> New Recording
      </Button>
      <RecordingDialog 
        open={showDialog} 
        onOpenChange={setShowDialog}
      />
    </>
  );
}