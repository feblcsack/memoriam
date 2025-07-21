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
          <AlertDialogTitle>Selamat Datang 👋</AlertDialogTitle>
          <AlertDialogDescription>
            Mau dengerin lagu sambil jelajahi halaman?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button onClick={handlePlay}>Play Lagu</Button>
          <AlertDialogCancel>Lewati</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
