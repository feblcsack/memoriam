// components/MusicAlert.tsx
"use client";

import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useMusicPlayer } from "./MusicPlayerProvider";
import { useState } from "react";

export function MusicAlert() {
  const { play } = useMusicPlayer();
  const [open, setOpen] = useState(true);

  const handlePlay = () => {
    play();
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hey...</AlertDialogTitle>
          <AlertDialogDescription>
            I have a very special song for you
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button onClick={handlePlay}>Play</Button>
          <AlertDialogCancel>Skip</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
