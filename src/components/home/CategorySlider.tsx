import React, { useMemo } from "react";
import clsx from "clsx";

type CategorySliderProps = {
  selectedAmount: string;
  setSelectedAmount: (value: string) => void;
};

function CategorySlider({ selectedAmount, setSelectedAmount }: CategorySliderProps) {
  function onClickHandler(value: string) {
    setSelectedAmount(value);
  }

  const amountOptions = {
    "1 sesión": (
      <>
        <div className={clsx("lg:hidden", selectedAmount !== "1 sesión" && "!inline")}>x1</div>
        <div className={clsx("hidden", selectedAmount === "1 sesión" && "lg:!inline")}>1 sesión</div>
      </>
    ),
    "5 sesiones": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("lg:hidden", selectedAmount !== "5 sesiones" && "!inline")}>x5</div>
        <div className={clsx("hidden", selectedAmount === "5 sesiones" && "lg:!inline")}>5 sesiones</div>
        <div
          className={clsx(
            "w-14",
            "rounded-tl-full rounded-br-full",
            "bg-c1 text-white",
            selectedAmount === "5 sesiones" && "!bg-white !text-c1",
          )}
        >
          -5%
        </div>
      </div>
    ),
    "10 sesiones": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("lg:hidden", selectedAmount !== "10 sesiones" && "!inline")}>x10</div>
        <div className={clsx("hidden", selectedAmount === "10 sesiones" && "lg:!inline")}>10 sesiones</div>
        <div
          className={clsx(
            "w-14",
            "rounded-tl-full rounded-br-full",
            "bg-c1 text-white",
            selectedAmount === "10 sesiones" && "!bg-white !text-c1",
          )}
        >
          -10%
        </div>
      </div>
    ),
  };

  const translationValue = useMemo(() => {
    if (Object.keys(amountOptions).length > 0 && selectedAmount) {
      return 100 * (Object.keys(amountOptions).findIndex((item) => item === selectedAmount) || 0);
    }
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAmount]);

  return (
    <section className={clsx("w-full px-5")}>
      <div
        className={clsx(
          "lg:w-1/2",
          "grid grid-cols-3 gap-x-5",
          "mx-auto p-1",
          "bg-white",
          "rounded-full md:rounded-xl",
          "relative",
        )}
      >
        <div
          className={clsx(
            "h-5/6 w-1/3",
            "bg-c1",
            "rounded-full md:rounded-xl",
            "absolute transition-transform duration-300",
            "border border-white shadow-sm",
            "self-center",
          )}
          style={{ transform: `translateX(${translationValue}%)` }}
        ></div>

        {amountOptions &&
          Object.keys(amountOptions).length > 0 &&
          Object.keys(amountOptions).map((option) => (
            <React.Fragment key={option}>
              <button
                onClick={() => onClickHandler(option)}
                className={clsx(
                  "w-full",
                  "z-10",
                  "col-span-1",
                  "py-1",
                  "bg-transparent",
                  "rounded-xl",
                  "transition-colors duration-200",
                  "disabled:cursor-not-allowed",
                  "group",
                  selectedAmount !== option && "hover:bg-gray-200/70",
                )}
              >
                <p
                  className={clsx(
                    "text-center text-sm text-examedi-black-dark",
                    "font-medium",
                    "z-20",
                    "transition-colors delay-75 duration-150",
                    "group-disabled:text-examedi-gray-4",
                    "flex justify-center",
                    selectedAmount === option && "!text-white",
                  )}
                >
                  {amountOptions[option as keyof typeof amountOptions]}
                </p>
              </button>
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}

export default CategorySlider;
