import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepIndicator from "../components/Carousel/StepIndicator";
import { STEPS } from "../utils/stepsData";

describe("StepIndicator Component", () => {
  test("renders the correct number of step indicators", () => {
    const currentStep = 1;
    render(<StepIndicator STEPS={STEPS} currentStep={currentStep} />);
    const indicators = screen.getAllByRole("presentation");
    expect(indicators).toHaveLength(STEPS.length);
  });

  test("highlights the current step indicator", () => {
    const currentStep = 1;
    render(<StepIndicator STEPS={STEPS} currentStep={currentStep} />);
    const indicators = screen.getAllByRole("presentation");
    const currentIndicator = indicators[currentStep];
    expect(currentIndicator).toHaveClass("border-2 border-white");
    expect(currentIndicator).not.toHaveClass("bg-white");
  });
});
