import React from "react";
import { render, screen } from "@testing-library/react";
import LeftSection from "../components/Carousel/LeftSection";
import { STEPS } from "../utils/stepsData";

describe("LeftSection Component", () => {
  test("renders the steps with the correct slide offset", () => {
    const slideOffset = "-100%";
    render(<LeftSection STEPS={STEPS} slideOffset={slideOffset} />);

    STEPS.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    });

    const sliderDiv = document.querySelector(".absolute");
    expect(sliderDiv).toHaveStyle(`transform: translateY(${slideOffset})`);
  });
});
