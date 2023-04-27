import React from "react";
import CategorySlider from "@/components/home/CategorySlider";

export default function Home() {
  const [selectedAmount, setSelectedAmount] = React.useState("1 sesión");
  return (
    <div className="w-full h-screen">
      <div className="text-xl font-medium">Este es mi blog! :D</div>
      <CategorySlider selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />
    </div>
  )
}
