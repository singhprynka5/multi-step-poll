import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SummarySlide from "../components/Carousel/SummarySlide";
import { STEPS } from "../utils/stepsData";

describe("SummarySlide Component", () => {
  test("renders thank you message when submitted", () => {
    render(
      <SummarySlide
        isSubmitted={true}
        selectedOptions={[]}
        handleSubmit={() => {}}
        STEPS={STEPS}
      />
    );
    expect(
      screen.getByText("Thank you for your feedback.")
    ).toBeInTheDocument();
  });

  test("displays summary of selected options when not submitted", () => {
    const selectedOptions = [0];
    render(
      <SummarySlide
        isSubmitted={false}
        selectedOptions={selectedOptions}
        handleSubmit={() => {}}
        STEPS={STEPS}
      />
    );

    expect(screen.getByText(STEPS[0].title + ":")).toBeInTheDocument();
    expect(
      screen.getByText(STEPS[0].options[selectedOptions[0]].label)
    ).toBeInTheDocument();
  });

  test("calls handleSubmit when save button is clicked", async () => {
    const handleSubmit = jest.fn();
    render(
      <SummarySlide
        isSubmitted={false}
        selectedOptions={[0]}
        handleSubmit={handleSubmit}
        STEPS={STEPS}
      />
    );

    await userEvent.click(screen.getByText("Save"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
