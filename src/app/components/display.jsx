"use client";
import { sentences } from "@/constants/sample1";
import { useState, useEffect } from "react";

export default function Display() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex(
        (prevIndex) => (prevIndex + 1) % sentences.length
      );
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 25));
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSentenceIndex]);

  const handleNextClick = () => {
    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    setTimeLeft(25);
  };

  useEffect(() => {
    console.log(timeLeft);
  }, [timeLeft]);

  return (
    <div>
      <p className=" text-3xl">{sentences[currentSentenceIndex]}</p>
      <button
        className="mt-4 bg-green-600 px-4 py-2 rounded-md"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}
