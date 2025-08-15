"use client";
import { useState, useEffect } from "react";
import Particles from "@/components/ui/Backgrounds/Particles/Particles";

const Skillspage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showSkills, setShowSkills] = useState(false);

  const boxes = [
    { title: "Programming Languages", skills: ["Java", "Python"] },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
    },
    {
      title: "Backend & Frameworks",
      skills: ["Node.js", "Express.js", "FastAPI"],
    },
    { title: "Databases & Messaging", skills: ["MongoDB", "Kafka"] },
    {
      title: "AI / ML Technologies",
      skills: ["Machine Learning", "Deep Learning", "OpenCV"],
    },
  ];

  useEffect(() => {
    if (openIndex !== null) {
      const timer = setTimeout(() => setShowSkills(true), 400);
      return () => clearTimeout(timer);
    } else {
      setShowSkills(false);
    }
  }, [openIndex]);

  return (
    <main className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_center,_#000000,_#1a1a40)]" />

      {/* Particles on top of background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Particles />
      </div>

      {/* Scrollable wrapper only on small screens */}
      <div className="relative min-h-screen inset-0 z-20 w-full overflow-hidden sm:overflow-hidden">
        <div className="sm:block overflow-y-auto max-h-screen">
          <div className="w-full max-w-6xl mx-auto px-6 pt-12 pb-16 relative z-10">
            <h1 className="text-3xl font-bold mt-12 mb-10 text-white text-center drop-shadow-lg">
              Skills & Highlights
            </h1>

            <div className="flex flex-wrap gap-6 justify-center">
              {boxes.map((box, idx) => {
                const isOpen = openIndex === idx;
                const isOut = openIndex !== null && openIndex !== idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className={`relative cursor-pointer text-white rounded-xl
                      bg-transparent backdrop-blur-md border-2 border-transparent
                      transition-all duration-500 ease-in-out
                      ${
                        isOpen
                          ? "w-full h-60 sm:h-52 shine-border flex items-center justify-center"
                          : ""
                      }
                      ${
                        isOut
                          ? "w-0 h-0 overflow-hidden opacity-0 p-0 m-0 border-none"
                          : "w-full sm:w-[45%] lg:w-[30%] h-32 shine-border p-6"
                      }`}
                  >
                    {isOpen ? (
                      <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="font-semibold text-xl mb-4">
                          {box.title}
                        </h2>
                        {showSkills && (
                          <div className="flex flex-wrap gap-3 justify-center">
                            {box.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20 shadow-md backdrop-blur-md"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <h2 className="font-semibold text-xl text-center">
                        {box.title}
                      </h2>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Shine Border Animation */}
      <style jsx>{`
        @keyframes border-rotate {
          0% {
            background-position: 100% 0%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .shine-border {
          position: relative;
          z-index: 0;
        }

        .shine-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          padding: 2px;
          background: linear-gradient(270deg, #ff00cc, #3333ff, #ff00cc);
          background-size: 300% 100%;
          animation: border-rotate 4s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
          z-index: -1;
        }
      `}</style>
    </main>
  );
};

export default Skillspage;
