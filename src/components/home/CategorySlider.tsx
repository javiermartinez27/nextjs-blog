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
        <div className={clsx("inline lg:hidden", selectedCategory === "games" && "!hidden")}>🎮</div>
        <div className={clsx("hidden lg:inline", selectedCategory === "games" && "!hidden")}>Juegos 🎮</div>
        <div className={clsx("inline", selectedCategory !== "games" && "!hidden")}>Juegos 🎮</div>
      </div>
    ),
    "movies": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("inline lg:hidden", selectedCategory === "movies" && "!hidden")}>🎥</div>
        <div className={clsx("hidden lg:inline", selectedCategory === "movies" && "!hidden")}>Películas 🎥</div>
        <div className={clsx("inline", selectedCategory !== "movies" && "!hidden")}>Películas 🎥</div>
      </div>
    ),
    "shows": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("inline lg:hidden", selectedCategory === "shows" && "!hidden")}>📺</div>
        <div className={clsx("hidden lg:inline", selectedCategory === "shows" && "!hidden")}>Series 📺</div>
        <div className={clsx("inline", selectedCategory !== "shows" && "!hidden")}>Series 📺</div>
      </div>
    ),
    "others": (
      <div className="flex flex-row gap-x-1">
        <div className={clsx("inline lg:hidden", selectedCategory === "others" && "!hidden")}>👨‍💻</div>
        <div className={clsx("hidden lg:inline", selectedCategory === "others" && "!hidden")}>Otros 👨‍💻</div>
        <div className={clsx("inline", selectedCategory !== "others" && "!hidden")}>Otros 👨‍💻</div>
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
    <section className={clsx("w-full px-2")}>
      <div
        className={clsx(
          "lg:w-1/2",
          "grid grid-cols-4 gap-x-1",
          "mx-auto p-1",
          "bg-white",
          "rounded-full md:rounded-xl",
          "relative",
        )}
      >
        <div
          className={clsx(
            "h-5/6 w-1/4",
            "bg-lime-600/80",
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
                  "bg-transparent",
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
