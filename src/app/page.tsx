"use client";
import { useEffect, useState } from "react";
import RenderForm, { Props } from "./go/_components/render-form";

export default function Home({ searchParams }: Readonly<Props>) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadImage = async () => {
    const imageUrl = "/frame.png";
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      localStorage.setItem("customFrameUrl", result);
      setIsLoading(false); // Set loading to false after setting customFrameUrl
    };

    setFileName("frame.png");
    reader.readAsDataURL(blob);
  };

  useEffect(() => {
    handleLoadImage();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  return (
    <div className="w-screen flex items-center justify-center flex-col gap-12 p-6">
      <RenderForm searchParams={searchParams} />
    </div>
  );
}
