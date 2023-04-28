import React from "react";
import CategorySlider from "@/components/home/CategorySlider";

export default function Home() {
  const [selecteCategory, setSelecteCategory] = React.useState("games");
  return (
    <div className="w-full h-screen flex flex-col gap-y-2 ">
      <div className="text-xl font-bold p-2">Este es mi blog! :D</div>
      <CategorySlider selectedCategory={selecteCategory} setSelectedCategory={setSelecteCategory} />
    </div>
  )
}
