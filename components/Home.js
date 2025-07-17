import React from "react";
import SplashCursor from "@/components/ui/Animations/SplashCursor/SplashCursor"; // adjust path if needed

const floatingCards = [
  {
    text: "SUSTAINABLE SOLUTIONS",
    className:
      "border-red-700 bg-red-400 flex items-center justify-center text-xl text-black top-30 right-72 w-64 h-24 rotate-[-10deg]",
    delay: "0.5s",
  },
  {
    text: "INQUISITIVE",
    className:
      "flex items-center justify-center text-xl border-green-700 bg-green-400 text-black top-[18rem] right-[17rem] w-64 h-24 rotate-[10deg]",
    delay: "0.8s",
  },
  {
    text: "INTELLIGENT SYSTEMS ENGINEER",
    className:
      "flex items-center justify-center text-xl border-orange-700 bg-orange-400 text-black top-[22rem] left-[16rem] w-72 h-20 rotate-[-6deg]",
    delay: "1.1s",
  },
  {
    text: "DETAIL ORIENTED",
    className:
      "flex items-center justify-center text-xl border-yellow-700 bg-yellow-400 text-black top-[32rem] left-[8rem] w-56 h-24 rotate-[3deg]",
    delay: "1.4s",
  },
  {
    text: "VISION CRAFTING",
    className:
      "flex items-center justify-center text-xl border-cyan-700 bg-cyan-400 text-black top-[14rem] left-[6rem] w-62 h-26 rotate-[7deg]",
    delay: "1.7s",
  },
  {
    text: "FULL-STACK DEVELOPMENT",
    className:
      "flex items-center justify-center text-xl border-blue-700 bg-blue-400 text-black top-[28rem] right-[10rem] w-68 h-24 rotate-[-5deg]",
    delay: "2s",
  },
];

const Home = () => {
  return (
    <div className="relative bg-[radial-gradient(circle_at_center,_#1a1a40,_#000000)] opacity-100 min-h-screen w-full overflow-hidden">
      <SplashCursor />
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: "url(/back.jpg)",
          opacity: 0.05,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen text-white">
        <h1
          className="text-8xl  font-extrabold p-10 relative opacity-0 top-7 animate-fade-in transition-all"
          style={{ animationDelay: "0s" }}
        >
          VIDHATRI
        </h1>

        {floatingCards.map((card, index) => (
          <div
            key={index}
            className={`absolute px-4 py-3 w-fit border-2 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float ${card.className}`}
            style={{ animationDelay: card.delay }}
          >
            {card.text}
          </div>
        ))}
      </div>

      {/* Center image */}
      <div
        className="absolute top-[26rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 animate-fade-in-img transition-all"
        style={{ animationDelay: "2.5s" }}
      >
        <img
          src="/me.png"
          alt="Me"
          className="w-full h-full object-cover mix-blend-multiply opacity-100"
        />
      </div>
    </div>
  );
};

export default Home;
