import React from "react";
import CategorySlider from "@/components/home/CategorySlider";
import GamesArticles from "@/components/home/GamesArticles";
import MoviesArticles from "@/components/home/MoviesArticles";
import ShowsArticles from "@/components/home/ShowsArticles";
import OtherArticles from "@/components/home/OtherArticles";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState("games");
  return (
    <div className="w-full h-screen flex flex-col gap-y-10 ">
      <div className="text-xl font-bold p-2">Este es mi blog! :D</div>
      <CategorySlider selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <section className="flex justify-center">
        {selectedCategory === "games" && (
          <GamesArticles/>
        )}
        {selectedCategory === "movies" && (
          <MoviesArticles/>
        )}
        {selectedCategory === "shows" && (
          <ShowsArticles/>
        )}
        {selectedCategory === "others" && (
          <OtherArticles/>
        )}
      </section>
    </div>
  )
}
