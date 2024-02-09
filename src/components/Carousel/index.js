import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STEPS } from "../../utils/stepsData";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import StepIndicator from "./StepIndicator";
import SummarySlide from "./SummarySlide";
import { submitOptionsData } from "../../actions";

const Carousel = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const dispatch = useDispatch();
  const isSubmitted = useSelector((state) => state.optionsData.isSubmitted);

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const selectOption = (stepIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[stepIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
    handleNext();
  };

  const handleSubmit = () => {
    dispatch(submitOptionsData(selectedOptions));
  };

  const slideOffset = `-${currentStep * 100}%`;
  return (
    <div className="flex flex-row w-full h-screen">
      <StepIndicator STEPS={STEPS} currentStep={currentStep} />
      {currentStep < STEPS.length ? (
        <React.Fragment>
          <LeftSection STEPS={STEPS} slideOffset={slideOffset} />
          <RightSection
            slideOffset={slideOffset}
            STEPS={STEPS}
            selectOption={selectOption}
            selectedOptions={selectedOptions}
          />
        </React.Fragment>
      ) : (
        <SummarySlide
          isSubmitted={isSubmitted}
          selectedOptions={selectedOptions}
          handleSubmit={handleSubmit}
          STEPS={STEPS}
        />
      )}
    </div>
  );
};

export default Carousel;
