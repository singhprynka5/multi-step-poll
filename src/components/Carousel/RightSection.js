import React from "react";

const RightSection = (props) => {
  const { slideOffset, STEPS, selectOption, selectedOptions } = props;

  return (
    <div className="w-1/2 bg-white flex flex-col p-5 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(${slideOffset})` }}
      >
        {STEPS.map((step, index) => (
          <div
            key={index}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="text-center flex flex-wrap justify-center">
              {step.options.map((option, optionIndex) => (
                <React.Fragment key={optionIndex}>
                  <div className="group relative p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div
                      className="text-6xl cursor-pointer flex flex-col items-center"
                      onClick={() => selectOption(index, optionIndex)}
                    >
                      {option.icon}
                      <div
                        className={`absolute bottom-0 transform translate-y-full transition-opacity duration-300 ease-in-out bg-white text-indigo-500 border-2 border-indigo-500 rounded-lg shadow-xl px-4 py-2 mt-2 text-sm font-bold ${
                          selectedOptions[index] === optionIndex
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {option.label}
                      </div>
                    </div>
                  </div>
                  {optionIndex < step.options.length - 1 && (
                    <div className="flex justify-center items-center text-6xl">
                      🤔
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSection;
