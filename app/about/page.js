"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import TrueFocus from "@/components/ui/TextAnimations/TrueFocus/TrueFocus";
import Waves from "@/components/Waves";

export default function AboutPage() {
  const controls = useAnimation();
  const mobileControls = useAnimation();
  const [showAboutTitle, setShowAboutTitle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [showSummaryText, setShowSummaryText] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const startSequence = async () => {
      await new Promise((res) => setTimeout(res, 1000));

      if (isMobile || isTablet) {
        // ✅ only zoom in/out after load, not before
        await mobileControls.start({
          scale: 1.8,
          transition: { duration: 0.8, ease: "easeInOut" },
        });

        await mobileControls.start({
          scale: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
      } else {
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

    if (isMobile !== null && isTablet !== null) {
      startSequence();
    }
  }, [controls, mobileControls, isMobile, isTablet]);

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
        aboutSectionHeight: "1200px",
        educationTop: "1280px",
        educationHeight: "620px",
        achievementsTop: "1940px",
        achievementsHeight: "600px",
        spacerTop: "2600px",
      };
    } else if (isTablet) {
      return {
        aboutSectionHeight: "1150px",
        educationTop: "1220px",
        educationHeight: "500px",
        achievementsTop: "1760px",
        achievementsHeight: "650px",
        spacerTop: "2510px",
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
          {/* Profile Image */}
          <motion.img
            src="/me2.png"
            alt="Profile"
            initial={{
              x: "-50%",
              y: 0,
              scale: 1, // ✅ always start normal size
              opacity: 1,
            }}
            animate={isMobile || isTablet ? mobileControls : controls}
            className={`rounded-full object-cover shadow-xl absolute z-10
    ${isMobile ? "w-24 h-24" : isTablet ? "w-28 h-28" : "w-[260px] h-[260px]"}`}
            style={{
              left: isMobile || isTablet ? "50%" : "39%",
              top: isMobile ? "80px" : isTablet ? "100px" : "130px",
              transform: "translateX(-50%)",
            }}
          />

          {/* Name Text */}
          {showTitle && (
            <>
              {!isMobile && !isTablet ? (
                // Desktop: Adjusted position for moved profile
                <div className="absolute right-[140px] top-[150px] max-w-xl w-full">
                  <TrueFocus text="I'M VIDHATRI" />
                </div>
              ) : (
                // Mobile/Tablet: Below image with animation
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[170px] sm:top-[190px] md:top-[210px] max-w-xl w-full text-center z-10 mt-4">
                  <motion.div
                    className="text-2xl sm:text-3xl md:text-3xl font-bold text-white tracking-wider"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    I'M VIDHATRI
                  </motion.div>
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
                        ? "top-[230px] w-[calc(100%-20px)] min-h-[320px]"
                        : "top-[250px] w-[calc(100%-40px)] min-h-[280px]"
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

          {/* Decorative Lines and Dots - Fixed positioning */}
          <div
            className={`absolute w-[90%] left-1/2 transform -translate-x-1/2 ${
              isMobile ? "top-[640px]" : isTablet ? "top-[590px]" : "top-[54%]"
            }`}
          >
            <div className="flex items-center justify-center w-full relative py-6">
              {/* Left Dots */}
              <div className="flex absolute left-4 gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"
                  />
                ))}
              </div>

              {/* Main horizontal line */}
              <div
                className={`h-0.5 md:h-1 bg-white ${
                  isMobile
                    ? "w-[calc(100%-135px)] ml-4"
                    : isTablet
                    ? "w-[calc(100%-200px)] mx-auto"
                    : "w-[calc(100%-200px)] mx-auto"
                }`}
              />

              {/* Secondary line - positioned below and offset */}
              <div
                className={`h-0.5 md:h-1 bg-white absolute ${
                  isMobile
                    ? "top-[40px] left-[40px] w-[65%]"
                    : isTablet
                    ? "top-[45px] left-[100px] w-[68%]"
                    : "top-[50px] left-[160px] w-[74%]"
                }`}
              />

              {/* Right Dots */}
              <div
                className={`flex absolute gap-2 ${
                  isMobile
                    ? "top-[40px] right-[20px]"
                    : isTablet
                    ? "top-[45px] right-[40px]"
                    : "top-[50px] right-[60px]"
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
                  ? "top-[720px] w-[calc(100%-20px)] min-h-[420px]"
                  : isTablet
                  ? "top-[680px] w-[calc(100%-40px)] min-h-[400px]"
                  : "top-[64%] w-[90%] h-[350px]"
              }`}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
                THE WHY BEHIND MY WORK
              </h2>
              <p className="text-white leading-relaxed md:leading-loose text-xs sm:text-sm md:text-base lg:text-lg font-hand font-medium text-center mt-7 sm:mt-4">
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
            className={`grid gap-3 sm:gap-5 md:gap-6 lg:gap-8 justify-items-center ${
              isMobile
                ? "grid-cols-1 px-2 mt-9"
                : isTablet
                ? "grid-cols-1 px-8 mt-2 sm:mt-4 md:mt-6"
                : "grid-cols-3 px-2 mt-2 sm:mt-4 md:mt-6"
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
          <div
            className={`space-y-3 sm:space-y-4 md:space-y-6 px-1 sm:px-2 ${
              isMobile
                ? "mt-8"
                : isTablet || !isMobile
                ? "mt-6 sm:mt-8 md:mt-12"
                : "mt-6 sm:mt-8 md:mt-12"
            }`}
          >
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
