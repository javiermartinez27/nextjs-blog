import React from "react";
import ArticleMini from "@/components/home/ArticleMini";

function GamesArticles() {
  return (
    <div>
      <div className="w-full grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ArticleMini title={"Articulo 1"}/>
        </div>
        <div className="grid-span-1 selection:flex flex-col">
          <div className="col-span-1">
            <ArticleMini title={"Articulo 2"}/>
            <ArticleMini title={"Articulo 2"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamesArticles;