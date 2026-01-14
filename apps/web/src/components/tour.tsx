"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";

interface TourStep {
  target: string;
  title: string;
  content: string;
  position: "top" | "bottom" | "left" | "right" | "center";
}

const STEPS: TourStep[] = [
  {
    target: "center",
    title: "Welcome to AutoSyndicate™",
    content: "Let's take a quick tour of the platform's key AI features.",
    position: "center",
  },
  {
    target: ".marketplace-stats",
    title: "Marketplace Overview",
    content: "View live loan statistics and market activity at a glance.",
    position: "bottom",
  },
  {
    target: ".loan-filters",
    title: "Smart Filters",
    content: "Filter opportunities by Sector, ESG Score, and Status.",
    position: "bottom",
  },
  {
    target: ".analyze-btn",
    title: "AI Analysis",
    content: "Click 'Analyze Allocation' to see our AI match lenders to loans.",
    position: "top",
  },
];

export function GuidedTour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setTimeout(() => setIsOpen(true), 1000);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenTour", "true");
  };

  const step = STEPS[currentStep];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <Card className="w-[400px] border-neon-cyan/50 shadow-2xl shadow-neon-cyan/20 animate-in fade-in zoom-in duration-300">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              {step.title}
            </h3>
            <button
              onClick={handleClose}
              className="text-muted-foreground hover:text-white"
            >
              ✕
            </button>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed">{step.content}</p>

          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentStep ? "bg-neon-cyan" : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <Button onClick={handleNext}>
              {currentStep === STEPS.length - 1 ? "Get Started" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
