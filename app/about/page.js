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
  const [isMobile, setIsMobile] = useState(null); // Changed to null initially
  const [isTablet, setIsTablet] = useState(null); // Changed to null initially
  const [isLoaded, setIsLoaded] = useState(false); // Add loading state

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsLoaded(true); // Set loaded after first screen size check
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const startSequence = async () => {
      // Wait for component to be fully loaded and screen size detected
      if (!isLoaded || isMobile === null || isTablet === null) return;

      await new Promise((res) => setTimeout(res, 500)); // Reduced initial delay

      // Run animations for all screen sizes with different parameters
      if (isMobile || isTablet) {
        // Mobile/Tablet animations - simpler scale animation
        await controls.start({
          scale: 1.5,
          transition: { duration: 0.6 },
        });

        await controls.start({
          scale: 1,
          transition: { duration: 0.6 },
        });
      } else {
        // Desktop animations - original complex animation
        await controls.start({
          scale: 2,
          transition: { duration: 0.8 },
        });

        await controls.start({
          x: "-30vw",
          scale: 1,
          transition: { duration: 0.8 },
        });
      }

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
  }, [controls, isMobile, isTablet, isLoaded]); // Add isLoaded dependency

  // Don't render anything until screen size is detected
  if (!isLoaded || isMobile === null || isTablet === null) {
    return (
      <main className="relative min-h-screen w-full text-white overflow-hidden">
        {/* Radial Gradient Background */}
        <div className="fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_center,_#000000,_#1a1a40)]" />

        {/* Loading placeholder */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-xl">Loading...</div>
        </div>
      </main>
    );
  }

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
    "Can tech make this simpler, smarter, and more sustainable?",
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

  // Calculate responsive heights and positions
  const getResponsiveValues = () => {
    if (isMobile) {
      return {
        aboutSectionHeight: "1300px", // Increased from 1100px
        educationTop: "1400px", // Adjusted accordingly
        educationHeight: "620px",
        achievementsTop: "2060px", // Adjusted accordingly
        achievementsHeight: "600px",
        spacerTop: "2720px", // Adjusted accordingly
      };
    } else if (isTablet) {
      return {
        aboutSectionHeight: "1250px", // Increased from 1050px
        educationTop: "1340px", // Adjusted accordingly
        educationHeight: "500px",
        achievementsTop: "1880px", // Adjusted accordingly
        achievementsHeight: "650px",
        spacerTop: "2630px", // Adjusted accordingly
      };
    } else {
      return {
        aboutSectionHeight: "1250px",
        educationTop: "1360px",
        educationHeight: "500px",
        achievementsTop: "1900px",
        achievementsHeight: "800px",
        spacerTop: "2780px",
      };
    }
  };

  const responsiveValues = getResponsiveValues();

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

      <div className="relative custom-scrollbar min-h-screen overflow-y-auto text-white px-4 md:px-6 flex justify-center">
        {/* Main About Section */}
        <div
          className="absolute top-16 sm:top-20 md:top-24 lg:top-20 w-full max-w-[95vw] lg:max-w-none lg:w-[1300px] bg-gradient-to-b from-blue-950 to-gray-800 border-2 border-black rounded-3xl shadow-2xl"
          style={{ height: responsiveValues.aboutSectionHeight }}
        >
          {/* ABOUT ME Title */}
          {showAboutTitle && (
            <div className="absolute top-6 md:top-8 lg:top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold"
              >
                ABOUT ME
              </motion.h1>

              <motion.img
                src="/under2.png"
                alt="underline"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-[-20px] sm:top-[-25px] md:top-[-28px] lg:top-[-32px] w-[120px] sm:w-[140px] md:w-[150px] lg:w-[180px] opacity-80"
              />
            </div>
          )}

          {/* Profile Image */}
          {!isMobile && !isTablet ? (
            // Desktop: Shifted up positioning with animation
            <motion.img
              src="/me2.png"
              alt="Profile"
              initial={{
                x: "-50%",
                y: "-50%",
                scale: 1,
                position: "absolute",
                left: "39%",
                top: "24%",
              }}
              animate={controls}
              className="w-66 h-66 rounded-full object-cover shadow-xl absolute top-[130px]"
            />
          ) : (
            // Mobile/Tablet: Animated positioning above name
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[80px] sm:top-[90px] md:top-[100px] z-10">
              <motion.img
                src="/me2.png"
                alt="Profile"
                initial={{
                  scale: 1,
                }}
                animate={controls}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-xl"
              />
            </div>
          )}

          {/* Name Text */}
          {showTitle && (
            <>
              {!isMobile && !isTablet ? (
                // Desktop: Adjusted position for moved profile
                <div className="absolute right-[140px] top-[150px] max-w-xl w-full">
                  <TrueFocus text="I'M VIDHATRI" />
                </div>
              ) : (
                // Mobile/Tablet: Use TrueFocus with moved down position
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[190px] sm:top-[210px] md:top-[230px] max-w-xl w-full text-center z-10">
                  <TrueFocus text="I'M VIDHATRI" />
                </div>
              )}
            </>
          )}

          {/* Summary Box */}
          {showBox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`absolute mt-8 p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg ${
                isMobile || isTablet
                  ? `left-1/2 transform -translate-x-1/2 ${
                      isMobile
                        ? "top-[250px] w-[calc(100%-20px)] min-h-[320px]"
                        : "top-[270px] w-[calc(100%-40px)] min-h-[280px]"
                    }`
                  : "right-[50px] top-[230px] w-[800px] min-h-[180px]"
              }`}
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
                      className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Decorative Lines and Dots */}
          <div
            className={`absolute w-[90%] justify-center items-center left-1/2 transform -translate-x-1/2 ${
              isMobile ? "top-[650px]" : isTablet ? "top-[630px]" : "top-[52%]"
            }`}
          >
            <div className="flex items-center justify-center w-full py-10">
              {/* Left Dots */}
              <div className="flex absolute left-4 gap-2 mr-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"
                  />
                ))}
              </div>

              {/* Horizontal Lines */}
              <div className="flex flex-col items-start">
                <div
                  className={`h-0.5 md:h-1 absolute bg-white mb-4 ${
                    isMobile
                      ? "left-[40px] w-[60%]"
                      : isTablet
                      ? "left-[80px] w-[65%]"
                      : "left-[116px] w-[70%]"
                  }`}
                />
                <div
                  className={`h-0.5 md:h-1 absolute bg-white ${
                    isMobile
                      ? "top-[35px] left-[60px] w-[50%]"
                      : isTablet
                      ? "top-[45px] left-[140px] w-[60%]"
                      : "top-[58px] left-[192px] w-[70%]"
                  }`}
                />
              </div>

              {/* Right Dots */}
              <div
                className={`flex absolute gap-2 ml-4 ${
                  isMobile
                    ? "top-[35px] right-[20px]"
                    : isTablet
                    ? "top-[45px] right-[40px]"
                    : "top-[55px] right-[64px]"
                }`}
              >
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"
                  />
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
              className={`absolute left-1/2 transform -translate-x-1/2 px-4 md:px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md shadow-md ${
                isMobile
                  ? "top-[750px] w-[calc(100%-20px)] min-h-[450px]"
                  : isTablet
                  ? "top-[730px] w-[calc(100%-40px)] min-h-[400px]"
                  : "top-[62%] w-[90%] h-[350px]"
              }`}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
                THE WHY BEHIND MY WORK
              </h2>
              <p className="text-white leading-relaxed md:leading-loose text-xs sm:text-sm md:text-base lg:text-lg font-hand font-medium text-center mt-2 sm:mt-4">
                Every breakthrough begins with a question — "What if?" What if
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

        {/* EDUCATION Section */}
        <div
          className="absolute w-full max-w-[95vw] lg:max-w-none lg:w-[1300px] bg-gradient-to-b from-blue-950 to-gray-800 border-2 border-black rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10"
          style={{
            top: responsiveValues.educationTop,
            height: responsiveValues.educationHeight,
          }}
        >
          <div className="relative">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
              EDUCATION
            </h1>
            <motion.img
              src="/under2.png"
              alt="underline"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 top-[-18px] sm:top-[-22px] md:top-[-25px] lg:top-[-30px] w-[120px] sm:w-[140px] md:w-[150px] lg:w-[180px] opacity-80"
            />
          </div>
          <div
            className={`grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center ${
              isMobile
                ? "grid-cols-1 px-2 mt-8"
                : isTablet
                ? "grid-cols-1 px-8 mt-10"
                : "grid-cols-3 px-2 mt-12"
            }`}
          >
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
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                viewport={{ once: true }}
                className={`bg-white/10 backdrop-blur-md rounded-full shadow-xl flex flex-col items-center justify-center text-center ${
                  isMobile
                    ? "w-[95%] max-w-[320px] h-[140px] p-3 mb-3"
                    : isTablet
                    ? "w-[300px] h-[180px] p-6 mb-6"
                    : "w-[240px] h-[240px] p-6"
                }`}
              >
                <img
                  src={edu.logo}
                  alt={edu.title}
                  className={`object-contain rounded-full mb-2 sm:mb-3 ${
                    isMobile
                      ? "w-10 h-10"
                      : isTablet
                      ? "w-16 h-16"
                      : "w-20 h-20 lg:w-24 lg:h-24"
                  }`}
                />
                <h3
                  className={`font-semibold mb-1 ${
                    isMobile
                      ? "text-sm leading-tight"
                      : isTablet
                      ? "text-base"
                      : "text-lg md:text-xl"
                  }`}
                >
                  {edu.title}
                </h3>
                <p
                  className={`text-white leading-tight ${
                    isMobile ? "text-xs px-2" : isTablet ? "text-sm" : "text-sm"
                  }`}
                >
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <div
          className="absolute w-full max-w-[95vw] lg:max-w-none lg:w-[1300px] bg-gradient-to-b from-blue-950 to-gray-800 border-2 border-black rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden"
          style={{
            top: responsiveValues.achievementsTop,
            height: responsiveValues.achievementsHeight,
          }}
        >
          <div className="relative">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
              ACHIEVEMENTS
            </h1>
            <motion.img
              src="/under2.png"
              alt="underline"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 top-[-18px] sm:top-[-22px] md:top-[-25px] lg:top-[-30px] w-[120px] sm:w-[140px] md:w-[150px] lg:w-[180px] opacity-80"
            />
          </div>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-6 sm:mt-8 md:mt-12 px-1 sm:px-2">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white/10 p-3 sm:p-4 md:p-6 rounded-xl shadow-md backdrop-blur-md mx-auto max-w-full"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spacer below to prevent flush bottom */}
        <div
          className="h-20 absolute w-full"
          style={{ top: responsiveValues.spacerTop }}
        />
      </div>
    </main>
  );
}
