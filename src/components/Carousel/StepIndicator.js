const StepIndicator = ({ STEPS, currentStep }) => {
  return (
    <div className="bg-indigo-500 w-10 flex flex-col justify-center items-center p-5">
      {STEPS.map((_, index) => (
        <div
          key={index}
          role="presentation"
          className={`w-4 h-4 ${
            currentStep === index ? "border-2 border-white" : "bg-white"
          } rounded-full my-2`}
        ></div>
      ))}
    </div>
  );
};

export default StepIndicator;
