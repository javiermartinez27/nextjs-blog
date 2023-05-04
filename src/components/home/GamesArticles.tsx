import React from "react";

import ArticleMini from "@/components/home/ArticleMini";
import ARTICLE_1 from "@/constants/articles/games/silent-hill";

function GamesArticles() {
  return (
    <div>
      <div className="w-full grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ArticleMini title={ARTICLE_1.title} tags={ARTICLE_1.tags} image={ARTICLE_1.mainImage}/>
        </div>
        <div className="grid-span-1 selection:flex flex-col">
          <div className="col-span-1">
            <ArticleMini title={"Articulo 2"} tags={["hola"]} image={ARTICLE_1.sideImage}/>
            <ArticleMini title={"Articulo 2"} tags={["hola"]} image={ARTICLE_1.sideImage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamesArticles;
