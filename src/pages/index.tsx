import React from "react";

import Image from 'next/image'

import CategorySlider from "@/components/home/CategorySlider";
import GamesArticles from "@/components/home/GamesArticles";
import MoviesArticles from "@/components/home/MoviesArticles";
import ShowsArticles from "@/components/home/ShowsArticles";
import OtherArticles from "@/components/home/OtherArticles";
import logo from "@/images/logo.png";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState("games");
  return (
    <div className="w-full h-screen flex flex-col">
      <Image
        className="p-4"
        src={logo}
        width={250}
        height={70}
        alt="Bafanada logo"
      />
      <CategorySlider selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <section className="px-5 lg:px-20">
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
