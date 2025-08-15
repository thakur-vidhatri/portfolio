import React from "react";
import SplashCursor from "@/components/ui/Animations/SplashCursor/SplashCursor"; // adjust path if needed

const floatingCards = [
  {
    text: "SUSTAINABLE SOLUTIONS",
    className:
      "border-red-700 bg-red-400 flex top-[800px] items-center justify-center text-xl text-black rotate-[-10deg] w-64 h-24 md:w-54 md:h-25 md:rotate-[-5deg] md:top-[10rem]",
    delay: "0.5s",
  },
  {
    text: "INQUISITIVE",
    className:
      "border-green-700 bg-green-400 flex items-center justify-center text-xl text-black rotate-[10deg] w-64 h-24",
    delay: "0.8s",
  },
  {
    text: "INTELLIGENT SYSTEMS ENGINEER",
    className:
      "border-orange-700 bg-orange-400 flex items-center justify-center text-xl text-black rotate-[-6deg] w-72 h-20",
    delay: "1.1s",
  },
  {
    text: "DETAIL ORIENTED",
    className:
      "border-yellow-700 bg-yellow-400 flex items-center justify-center text-xl text-black rotate-[3deg] w-56 h-24 md:w-48 md:h-20 md:rotate-[2deg] sm:top-[300px]",
    delay: "1.4s",
  },
  {
    text: "VISION CRAFTING",
    className:
      "border-cyan-700 bg-cyan-400 flex items-center justify-center text-xl text-black rotate-[7deg] w-62 h-26",
    delay: "1.7s",
  },
  {
    text: "FULL-STACK DEVELOPMENT",
    className:
      "border-blue-700 bg-blue-400 flex items-center justify-center text-xl text-black rotate-[-5deg] w-68 h-24",
    delay: "2s",
  },
];

const Home = () => {
  return (
    <div className="relative bg-[radial-gradient(circle_at_center,_#1a1a40,_#000000)] opacity-100 min-h-screen w-full overflow-hidden">
      <SplashCursor />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: "url(/back.jpg)",
          opacity: 0.05,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen text-white">
        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold px-6 sm:p-10 pt-28 sm:pt-20 relative opacity-0 top-0 animate-fade-in transition-all text-center sm:text-left"
          style={{ animationDelay: "0s" }}
        >
          VIDHATRI
        </h1>

        {/* Floating Cards for large screens (above 1041px) */}
        <div className="hidden lg:block">
          <div
            className="absolute top-40 right-60 px-6 py-8 w-fit border-4 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-red-700 bg-red-400 text-black text-2xl rotate-[-8deg]"
            style={{ animationDelay: "0.5s" }}
          >
            SUSTAINABLE SOLUTIONS
          </div>
          <div
            className="absolute top-76 right-54 px-6 py-8 w-fit border-4 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-green-700 bg-green-400 text-black text-2xl rotate-[-15deg]"
            style={{ animationDelay: "0.8s" }}
          >
            INQUISITIVE
          </div>
          <div
            className="absolute top-95 left-40 px-6 py-8 w-fit border-4 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-orange-700 bg-orange-400 text-black text-xl rotate-[10deg]"
            style={{ animationDelay: "1.1s" }}
          >
            AUTOMATION @AI
          </div>
          <div
            className="absolute bottom-18 left-48 px-6 py-8 w-fit border-4 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-yellow-700 bg-yellow-400 text-black text-2xl rotate-[8deg]"
            style={{ animationDelay: "1.4s" }}
          >
            DETAIL ORIENTED
          </div>
          <div
            className="absolute top-50 left-78 px-6 py-8 w-fit border-4 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-cyan-700 bg-cyan-400 text-black text-2xl rotate-[-10deg]"
            style={{ animationDelay: "1.7s" }}
          >
            VISION CRAFTING
          </div>
          <div
            className="absolute bottom-30 right-30 px-6 py-8 w-fit border-4 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-blue-700 bg-blue-400 text-black text-xl rotate-[8deg]"
            style={{ animationDelay: "2s" }}
          >
            FULL-STACK DEVELOPMENT
          </div>
        </div>

        {/* Floating Cards for tablet/iPad screens */}
        <div className="hidden md:block lg:hidden relative mt-8 px-6">
          <div
            className="absolute top-32 left-4 px-16 py-8 w-fit border-8 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-red-700 bg-red-400 text-black text-6xl rotate-[-8deg]"
            style={{ animationDelay: "0.5s" }}
          >
            SUSTAINABLE SOLUTIONS
          </div>
          <div
            className="absolute top-36 right-4 px-16 py-8 w-fit border-8 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-green-700 bg-green-400 text-black text-6xl rotate-[10deg]"
            style={{ animationDelay: "0.8s" }}
          >
            INQUISITIVE
          </div>
          <div
            className="absolute top-[18rem] left-1 px-16 py-8 w-fit border-8 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-orange-700 bg-orange-400 text-black text-5xl rotate-[-5deg]"
            style={{ animationDelay: "1.1s" }}
          >
            AUTOMATION @AI
          </div>
          <div
            className="absolute top-[20rem] right-1 px-16 py-8 w-fit border-8 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-yellow-700 bg-yellow-400 text-black text-6xl rotate-[6deg]"
            style={{ animationDelay: "1.4s" }}
          >
            DETAIL ORIENTED
          </div>
          <div
            className="absolute top-[26rem] left-4 px-16 py-8 w-fit border-8 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-cyan-700 bg-cyan-400 text-black text-6xl rotate-[-10deg]"
            style={{ animationDelay: "1.7s" }}
          >
            VISION CRAFTING
          </div>
          <div
            className="absolute top-[28rem] right-4 px-16 py-8 w-fit border-8 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-blue-700 bg-blue-400 text-black text-5xl rotate-[8deg]"
            style={{ animationDelay: "2s" }}
          >
            FULL-STACK DEVELOPMENT
          </div>
        </div>

        {/* Floating Cards for small screens - organized layout below name */}
        <div className="md:hidden relative mt-12 px-4 space-y-4">
          <div
            className="absolute top-4 left-4 px-3 py-2 w-fit border-2 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-red-700 bg-red-400 text-black text-sm rotate-[-8deg]"
            style={{ animationDelay: "0.5s" }}
          >
            SUSTAINABLE SOLUTIONS
          </div>
          <div
            className="absolute top-16 right-4 px-3 py-2 w-fit border-2 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-green-700 bg-green-400 text-black text-sm rotate-[12deg]"
            style={{ animationDelay: "0.8s" }}
          >
            INQUISITIVE
          </div>
          <div
            className="absolute top-28 left-2 px-3 py-2 w-fit border-2 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-orange-700 bg-orange-400 text-black text-xs rotate-[-5deg]"
            style={{ animationDelay: "1.1s" }}
          >
            AUTOMATION @AI
          </div>
          <div
            className="absolute top-40 right-6 px-3 py-2 w-fit border-2 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-yellow-700 bg-yellow-400 text-black text-sm rotate-[6deg]"
            style={{ animationDelay: "1.4s" }}
          >
            DETAIL ORIENTED
          </div>
          <div
            className="absolute top-52 left-8 px-3 py-2 w-fit border-2 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-cyan-700 bg-cyan-400 text-black text-sm rotate-[-10deg]"
            style={{ animationDelay: "1.7s" }}
          >
            VISION CRAFTING
          </div>
          <div
            className="absolute top-64 right-2 px-3 py-2 w-fit border-2 font-bold rounded-3xl shadow-md backdrop-blur-md bg-black/30 opacity-0 animate-fade-and-float border-blue-700 bg-blue-400 text-black text-xs rotate-[8deg]"
            style={{ animationDelay: "2s" }}
          >
            FULL-STACK DEVELOPMENT
          </div>
        </div>
      </div>

      {/* Bottom image */}
      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fade-in-img transition-all w-full sm:w-[22rem] md:w-[60rem] lg:w-[45rem]"
        style={{ animationDelay: "2.5s" }}
      >
        <img
          src="/me.png"
          alt="Me"
          className="w-full h-auto max-h-[50vh] md:max-h-[80vh] lg:max-h-[75vh] object-contain object-bottom mix-blend-multiply opacity-100"
        />
      </div>
    </div>
  );
};

export default Home;
