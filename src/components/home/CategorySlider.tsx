import React, { useMemo } from "react";
import clsx from "clsx";

type CategorySliderProps = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

function CategorySlider({ selectedCategory, setSelectedCategory }: CategorySliderProps) {
  function onClickHandler(value: string) {
    setSelectedCategory(value);
  }

  const categoryOptions = {
    "games": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("lg:hidden", selectedCategory !== "games" && "!inline")}>Juegos</div>
        <div className={clsx("hidden", selectedCategory === "games" && "lg:!inline")}>Juegos</div>
        {/* <div
          className={clsx(
            "w-14",
            "rounded-tl-full rounded-br-full",
            "bg-c1 text-black",
            selectedCategory === "games" && "!bg-white !text-c1",
          )}
        >
          -5%
        </div> */}
      </div>
    ),
    "movies": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("lg:hidden", selectedCategory !== "movies" && "!inline")}>Películas</div>
        <div className={clsx("hidden", selectedCategory === "movies" && "lg:!inline")}>Películas</div>
        <div
          className={clsx(
            "w-14",
            "rounded-tl-full rounded-br-full",
            "bg-blue-200 text-white",
            selectedCategory === "movies" && "!bg-red-200",
          )}
        >
          🎥
        </div>
      </div>
    ),
    "shows": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("lg:hidden", selectedCategory !== "10 sesiones" && "!inline")}>Series</div>
        <div className={clsx("hidden", selectedCategory === "10 sesiones" && "lg:!inline")}>Series</div>
        {/* <div
          className={clsx(
            "w-14",
            "rounded-tl-full rounded-br-full",
            "bg-c1 text-white",
            selectedCategory === "10 sesiones" && "!bg-white !text-c1",
          )}
        >
          -10%
        </div> */}
      </div>
    ),
    "others": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("lg:hidden", selectedCategory !== "10 sesiones" && "!inline")}>Otros</div>
        <div className={clsx("hidden", selectedCategory === "10 sesiones" && "lg:!inline")}>Otros</div>
        {/* <div
          className={clsx(
            "w-14",
            "rounded-tl-full rounded-br-full",
            "bg-c1 text-white",
            selectedCategory === "10 sesiones" && "!bg-white !text-c1",
          )}
        >
          -10%
        </div> */}
      </div>
    ),
  };

  const translationValue = useMemo(() => {
    if (Object.keys(categoryOptions).length > 0 && selectedCategory) {
      return 100 * (Object.keys(categoryOptions).findIndex((item) => item === selectedCategory) || 0);
    }
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <section className={clsx("w-full px-5")}>
      <div
        className={clsx(
          "lg:w-1/2",
          "grid grid-cols-4 gap-x-5",
          "mx-auto p-1",
          "bg-white",
          "rounded-full md:rounded-xl",
          "relative",
        )}
      >
        <div
          className={clsx(
            "h-5/6 w-1/4",
            "bg-c1",
            "rounded-full md:rounded-xl",
            "absolute transition-transform duration-300",
            "border border-white shadow-sm",
            "self-center",
          )}
          style={{ transform: `translateX(${translationValue}%)` }}
        ></div>

        {categoryOptions &&
          Object.keys(categoryOptions).length > 0 &&
          Object.keys(categoryOptions).map((option) => (
            <React.Fragment key={option}>
              <button
                onClick={() => onClickHandler(option)}
                className={clsx(
                  "w-full",
                  "z-10",
                  "col-span-1",
                  "py-1",
                  "bg-blue-100",
                  "rounded-xl",
                  "transition-colors duration-200",
                  "disabled:cursor-not-allowed",
                  "group",
                  selectedCategory !== option && "hover:bg-gray-200/70",
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
                    selectedCategory === option && "!text-white",
                  )}
                >
                  {categoryOptions[option as keyof typeof categoryOptions]}
                </p>
              </button>
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}

export default CategorySlider;
