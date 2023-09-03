'use client'
import { Dialog, DialogHeader, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const InitialSetUpPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null;
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default InitialSetUpPage;