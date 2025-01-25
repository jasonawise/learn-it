"use client";
import { sentences } from "@/constants/sample1";
import { useState, useEffect } from "react";

export default function Display() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex(
        (prevIndex) => (prevIndex + 1) % sentences.length
      );
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const handleNextClick = () => {
    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  return (
    <div>
      <p className=" text-3xl">{sentences[currentSentenceIndex]}</p>
      <button className="mt-4" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}
