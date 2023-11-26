'use client'
import { Progress } from "@/components/ui/progress";
import React, { Suspense } from "react";

export default function Loading() {


  // You can add any UI inside Loading, including a Skeleton.
  const [progress, setProgress] = React.useState(15);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(90), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <Progress value={progress} className="w-[60%]" />;
    </div>
  );
}
