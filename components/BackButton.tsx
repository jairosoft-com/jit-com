"use client";

import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <Button variant="outline" onClick={() => window.history.back()}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      Go Back
    </Button>
  );
}