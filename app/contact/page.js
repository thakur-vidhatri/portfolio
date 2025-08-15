"use client";
import React, { useRef, useState } from "react";
import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const tabs = [
  {
    id: "phone",
    icon: <FaPhone size={24} />,
    bg: "#FF6F61",
    title: "Contact Info",
    description: "You can reach me directly via phone or email.",
    content: ["Phone: +91-8340918654", "Email: thakurvidhatri45368@gmail.com"],
    link: null,
  },
  {
    id: "linkedin",
    icon: <FaLinkedin size={24} />,
    bg: "#22228b",
    title: "My LinkedIn",
    description:
      "Connect with me on LinkedIn for professional networking and updates.",
    content: ["Explore my career journey and achievements."],
    link: "https://www.linkedin.com/in/thakur-vidhatri21",
  },
  {
    id: "github",
    icon: <FaGithub size={24} />,
    bg: "#2A9134",
    title: "My GitHub",
    description: "Browse my projects and contributions.",
    content: ["Explore the code behind my innovations and experiments."],
    link: "https://github.com/thakur-vidhatri",
  },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("phone");
  const [clipStyle, setClipStyle] = useState({});
  const containerRef = useRef(null);

  const handleClick = (tabId, event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const newTab = tabs.find((tab) => tab.id === tabId);

    // Step 1: Start with small circle
    setClipStyle({
      backgroundColor: newTab.bg,
      clipPath: `circle(0% at ${x}px ${y}px)`,
      transition: "none", // no transition for the reset
    });

    // Step 2: Slight delay, then expand the circle
    setTimeout(() => {
      setClipStyle({
        backgroundColor: newTab.bg,
        clipPath: `circle(150% at ${x}px ${y}px)`,
        transition: "clip-path 0.6s ease-out",
      });

      // Change content just after transition starts
      setActiveTab(tabId);
    }, 30);
  };

  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 sm:px-8 py-8"
      style={{
        background: "radial-gradient(circle at center, #000000, #1a1a40)",
        padding: "4rem",
      }}
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-3xl h-auto sm:h-[500px] rounded-lg overflow-hidden shadow-2xl text-white p-6 sm:p-12"
        style={{
          backgroundColor: current.bg,
          transition: "background-color 0.4s ease",
        }}
      >
        {/* Animation Layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            ...clipStyle,
            position: "absolute",
            zIndex: 1,
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <h2 className=" text-3xl sm:text-4xl font-light ">
              {current.title.split(" ")[0]}{" "}
              <strong className="font-bold">
                {current.title.split(" ")[1]}
              </strong>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              {current.description}
            </p>
            <ul className="mt-4 list-disc list-inside text-sm sm:text-base space-y-2">
              {current.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
              {current.id === "phone" && (
                <li>
                  <a
                    href="mailto:thakurvidhatri45368@gmail.com"
                    className="inline-block mt-1 bg-white text-black font-semibold px-4 py-1 rounded-full hover:bg-gray-200 transition text-sm"
                  >
                    Email Me
                  </a>
                </li>
              )}
            </ul>
          </div>

          {current.link && (
            <a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-full inline-block text-sm sm:text-base"
              style={{ color: current.bg }}
            >
              Visit {current.title.split(" ")[1]}
            </a>
          )}

          {/* Tab Icons */}
          <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center sm:justify-start">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={(e) => handleClick(tab.id, e)}
                className={`cursor-pointer w-12 h-12 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-black border-2 border-white"
                    : "bg-white/20 text-white"
                }`}
              >
                {tab.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
