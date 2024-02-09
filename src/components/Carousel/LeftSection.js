import { BookOpenIcon } from "@heroicons/react/24/solid";

const LeftSection = ({ STEPS, slideOffset }) => {
  return (
    <div className="bg-indigo-500 flex flex-col w-1/2 p-5 relative overflow-hidden">
      <BookOpenIcon className="w-10 h-10 text-white" />
      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(${slideOffset})` }}
      >
        {STEPS.map((stepData, i) => (
          <div
            key={stepData.id}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="text-white text-center p-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                {stepData.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
