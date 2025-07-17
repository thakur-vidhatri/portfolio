"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import TrueFocus from "@/components/ui/TextAnimations/TrueFocus/TrueFocus";
import Waves from "@/components/Waves";

export default function AboutPage() {
  const controls = useAnimation();
  const [showAboutTitle, setShowAboutTitle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [showSummaryText, setShowSummaryText] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);

  useEffect(() => {
    const startSequence = async () => {
      await new Promise((res) => setTimeout(res, 1000));

      await controls.start({
        scale: 2,
        transition: { duration: 0.8 },
      });

      await controls.start({
        x: "-30vw",
        scale: 1,
        transition: { duration: 0.8 },
      });

      setShowAboutTitle(true);
      setShowTitle(true);

      setTimeout(() => {
        setShowBox(true);
        setTimeout(() => {
          setShowSummaryText(true);
          setTimeout(() => {
            setShowMotivation(true);
          }, 1500);
        }, 700);
      }, 800);
    };

    startSequence();
  }, [controls]);

  const lineVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const summaryLines = [
    "As a full-stack developer with a deep interest in AI and emerging technologies,",
    "I enjoy building solutions that are not just innovative, but also impact-driven.",
    " My core skills lie in React.js, Node.js, MongoDB, and FastAPI, with hands-on experience",
    "in deploying end-to-end projects from web apps to AI integrations.",
    "What sets my work apart is how I choose my ideas: I look around at real, everyday problems",
    "from gaps in agriculture and wellness to inefficiencies in small businesses and ask,",
    "“Can tech make this simpler, smarter, and more sustainable?”",
    "Whether it's developing a disease detection system for farmers, or crafting a personalized wellness platform,",
    "I strive to use tech meaningfully, where it serves both people and the planet.",
  ];

  const achievements = [
    {
      title: "MERN Training @ CodeSprint",
      description:
        "Completed industrial training and internship in MERN stack.",
    },
    {
      title: "MongoDB Certificate",
      description: "Earned completion certificate in MongoDB.",
    },
    {
      title: "Smart India Hackathon - Internal Hackathon",
      description:
        "Shortlisted for internal rounds for analytical thinking and rapid prototyping.",
    },
    {
      title: "ByteXL Internship",
      description: "Completed training and internship with ByteXL.",
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      description:
        "Earned Microsoft Certified: Azure AI Fundamentals credential.",
    },
  ];

  return (
    <main className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_center,_#000000,_#1a1a40)]" />

      {/* Waves Layer on top of background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Waves
          lineColor="gray"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.008}
          waveAmpX={30}
          waveAmpY={15}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="relative custom-scrollbar min-h-screen overflow-y-auto  text-white  px-6 flex justify-center">
        <div className="absolute top-20 h-[1200px] w-[1300px] justify-center items-center bg-gradient-to-b from-blue-950 to-gray-800 border-2 border-black rounded-3xl shadow-2xl ">
          {/* ABOUT ME Title */}
          {showAboutTitle && (
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold"
              >
                ABOUT ME
              </motion.h1>

              <motion.img
                src="/under2.png"
                alt="underline"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-[-32px] w-[180px] opacity-80"
              />
            </div>
          )}

          {/* Profile Image */}
          <motion.img
            src="/me2.png"
            alt="Profile"
            initial={{
              x: "-50%",
              y: "-50%",
              scale: 1,
              position: "absolute",
              left: "47%",
              top: "28%",
            }}
            animate={controls}
            className="w-66 h-66 rounded-full object-cover shadow-xl absolute  top-[130px]"
          />

          {/* TrueFocus Text */}
          {showTitle && (
            <div className="absolute right-[140px] top-[150px]  max-w-xl w-full">
              <TrueFocus text="I'M VIDHATRI" />
            </div>
          )}

          {/* Summary Box */}
          {showBox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute right-[50px] top-[230px] w-[800px] mt-8 p-6 min-h-[180px] bg-white/10 backdrop-blur-md rounded-lg shadow-lg"
            >
              {showSummaryText && (
                <div>
                  {summaryLines.map((line, index) => (
                    <motion.p
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={lineVariant}
                      className="text-white text-lg font-medium leading-relaxed"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              )}
            </motion.div>
          )}
          <div className="absolute top-[53.5%] w-[90%] justify-center items-center left-170 transform -translate-x-1/2">
            <div className="flex items-center justify-center w-full py-10">
              {/* Left Dots */}
              <div className="flex absolute left-4 gap-2 mr-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full" />
                ))}
              </div>

              {/* Horizontal Lines */}
              <div className="flex flex-col items-start">
                <div className="h-1 absolute left-29 w-[70%] bg-white mb-4" />
                <div className="h-1 absolute left-48 top-[58px] w-[70%]  bg-white" />
              </div>

              {/* Right Dots */}
              <div className="flex absolute right-16 top-[55px] gap-2 ml-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full" />
                ))}
              </div>
            </div>
          </div>
          {/* What Motivates Me */}
          {showMotivation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-[64%] left-1/2 transform -translate-x-1/2 w-[90%] h-[400px] px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md shadow-md"
            >
              <h2 className="text-2xl font-bold mb-10 text-center">
                THE WHY BEHIND MY WORK
              </h2>
              <p className="text-white leading-loose text-lg font-hand font-medium text-center mt-4">
                Every breakthrough begins with a question — “What if?” What if
                machines could see like us? Think like us? Solve the problems we
                overlook? That&apos;s the spark of ideation not just building
                apps, but building answers. In a world overflowing with data, AI
                and deep learning aren&apos;t just tools they&apos;re lenses
                that reveal what humans can&apos;t always see. They transform
                patterns into predictions, effort into efficiency, and ideas
                into impact. The journey from idea to innovation isn&apos;t
                linear. It&apos;s a dance between observation and curiosity
                spotting gaps, connecting dots, and shaping tech that
                doesn&apos;t just impress, but matters. Because the real power
                of AI lies not in automation, but in augmentation of human
                potential, of sustainable systems, of the future we dare to
                imagine.
              </p>
            </motion.div>
          )}
        </div>

        {/* EDUCATION Section (same as before) */}
        {/* EDUCATION Section with Floating Badges */}
        <div className="absolute top-[1400px] w-[1300px] bg-gradient-to-b from-blue-950 to-gray-800 border-2 border-black rounded-2xl shadow-2xl p-10">
          <h1 className="text-3xl font-bold text-center mb-12">EDUCATION</h1>
          <motion.img
            src="/under2.png"
            alt="underline"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute justify-center items-center left-[43%] top-[5px] w-[180px] opacity-80"
          />
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                title: "B.E - CBIT",
                logo: "/cbit.png",
                details: "Bachelor of Engineering in IT, 2022-2026",
              },
              {
                title: "Intermediate - Alphores",
                logo: "/alp.png",
                details: "MPC, 2019-2021",
              },
              {
                title: "SSC - Vidyadhari High School",
                logo: "/vid.jpg",
                details: "SSC, 2018-2019",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-full shadow-xl w-[240px] flex flex-col items-center text-center"
              >
                <img
                  src={edu.logo}
                  alt={edu.title}
                  className="w-24 h-24 object-contain rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-sm mt-2 text-white">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* ACHIEVEMENTS SECTION */}
        <div className="absolute top-[1930px] bottom-[50px] mb-10 min-h-[900px] w-[1300px] justify-center items-center bg-gradient-to-b from-blue-950 to-gray-800 border-2 border-black rounded-2xl shadow-2xl p-10">
          <h1 className="text-3xl font-bold text-center mb-8">ACHIEVEMENTS</h1>
          <motion.img
            src="/under2.png"
            alt="underline"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute justify-center items-center  left-[43%] top-[5px] w-[180px] opacity-80"
          />
          <div className="space-y-8 mt-18">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spacer below the button to prevent flush bottom */}
        <div className="h-4 absolute top-[2900px] w-full">
          {/* This empty div creates space at the bottom of the page */}
        </div>
      </div>
    </main>
  );
}
