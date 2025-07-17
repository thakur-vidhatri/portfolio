"use client";
import React from "react";

const ProjectCard = ({ image, title, subtitle }) => {
  return (
    <div className="group flex flex-col items-center min-w-[180px] z-10">
      {/* Card with glow on hover */}
      <div
        className="relative w-[190px] h-[260px] rounded-xl overflow-hidden border border-pink-500 bg-white transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_4px_rgba(255,0,150,0.6)]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Text below the card */}
      <div className="mt-2 text-center">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-xs italic text-pink-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
