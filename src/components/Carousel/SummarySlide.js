import React from "react";

const SummarySlide = (props) => {
  const { isSubmitted, selectedOptions, handleSubmit, STEPS } = props;
  return (
    <div className="bg-indigo-500 w-full flex items-center justify-center h-screen">
      <div className="flex flex-col">
        {isSubmitted ? (
          <div className="text-white text-4xl font-bold">
            Thank you for your feedback.
          </div>
        ) : (
          <React.Fragment>
            <div>
              <h2 className="text-white text-4xl font-bold">Summary</h2>
              {selectedOptions.map((optionIndex, stepIndex) => (
                <p key={stepIndex} className="text-white text-2xl mt-2">
                  - <span className="mr-5">{STEPS[stepIndex].title}:</span>
                  <span>{STEPS[stepIndex].options[optionIndex]?.label}</span>
                </p>
              ))}
            </div>
            <div className="text-right p-5">
              <button
                className="bg-white text-indigo-500 font-bold py-2 px-4 rounded-lg border-2 border-indigo-500"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Save
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default SummarySlide;
