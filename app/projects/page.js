"use client";
import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "PASSWORD MANAGER ",
    subtitle: "manage your passwords",
    image: "/passwrd.jpg",
    description:
      "PassOP is a single-page app built with React.js that securely manages site credentials using browser local storage. It features a clean, responsive UI with password visibility toggle, clipboard copy, and edit/delete options — all without a backend or database",
    features: [
      "LocalStorage-Based Data Handling Stores all credentials directly in the browser's local storage—no need for a backend or external DB.",

      "Password Visibility & Clipboard Copy Users can toggle password visibility and copy credentials to the clipboard with one click.",

      "Edit/Delete Functionality Update or remove saved credentials easily using intuitive action icons.",

      "Minimalist & Responsive UI Clean, gradient-themed interface with real-time updates and mobile-friendly design.",
    ],
    images: ["/pass1.jpg", "/pass2.jpg", " /pass3.jpg"],
    github: "https://github.com/thakur-vidhatri/passwordmanager",
  },
  {
    title: "AYUR ME",
    subtitle: "An Ayurvedic Health Companion",
    image: "/logo.jpg",
    description:
      "MERN project ,which tells the type of disease according to Ayurveda , Recommends a diet system based on the results of your disease  ",
    features: [
      "Dosha Calculator - Analyzes physical, mental, and emotional traits through a quiz to determine the user's dominant Ayurvedic dosha (Vata, Pitta, or Kapha).",
      "Calorie Analyzer - Evaluates the nutritional content of selected foods to help users track and balance their diet according to Ayurvedic guidelines.",

      "Recipe Finder - Lets users search for traditional Indian recipes tailored to their dosha and dietary needs.",

      "Dosha-Based Scoring System - Uses a rule-based logic to assign scores to user answers and accurately predict their Ayurvedic body type based on dominant traits.",
    ],
    images: ["/pro10.jpg", "/pro11.jpg", "/pro12.jpg", "/pro13.jpg"],
    github: "https://github.com/thakur-vidhatri/AyurMe",
  },
  {
    title: "QUEENS COFFEE",
    subtitle: "Coffee Shop Management",
    image: "/coffee.jpeg",
    description:
      " MERN project for a coffee shop to generate bills, to store customer details and to track and log their profits and sales ",
    features: [
      "Inventory Management: CRUD operations for menu items.",
      "Order Processing: Real-time order management and bill generation.",

      "Revenue Analytics: Insights into daily, weekly, and monthly collections.",

      "Secure Admin Access: Role-based login for authorized personnel.",
    ],
    images: ["/coffee1.jpg", "/coffee2.jpg", "/coffee3.jpg", "/cofee4.jpg"],
    github: "https://github.com/thakur-vidhatri/Queens_coffee",
  },
  {
    title: "POTATO LEAF DISEASE DETECTION",
    subtitle: "AI-based Disease Detection",
    image: "/leaf.png",
    description:
      " Developed a deep learning project for potato disease detection using a CNN trained on potato leaf diseases. Built a FastAPI backend for model deployment and integrated it with a React.js frontend to create a complete web application. ",
    features: ["Comic-style narration", "Dynamic lighting", "Multiple paths"],
    images: ["/scarlet1.png", "/scarlet2.png", "/scarlet3.png"],
    github: "https://github.com/thakur-vidhatri/potato_disease",
  },
  {
    title: "AI-POWERED COLD MAIL GENERATOR",
    subtitle: "Automated B2B Sales Emails",
    image: "/coldmail.png",
    description:
      " Developed a full-stack AI solution that craft personalized cold emails for B2B sales efforts.Designed to target product-based companies (e.g., Nike, Adidas, JPMC) and support service-oriented firms like TCS and Atliq. The system is modular, scalable, and tailored for high-impact sales automation.",
    features: [
      "Personalized Email Generation - Uses LLaMA 3-70B to craft custom cold emails based on company data.",
      "Semantic Search with ChromaDB – Retrieves relevant insights for each target company to enhance email relevance.",
      "Real-Time UI with Streamlit – Offers a responsive interface for users to generate and refine emails instantly.",
      "Modular & Scalable Architecture – Designed for easy integration and adaptability across multiple industries and use cases.",
    ],
    images: ["/coldmail1.jpg"],
    github: "https://github.com/thakur-vidhatri/Cold-Mail_Generator",
  },
  {
    title: "RETAIL ANALYTICS DASHBOARD",
    subtitle: "Data-Driven Retail Insights",
    image: "/store.png",
    description:
      "  Built a scalable web application  Enabled real-time data streaming with Apache Kafka and designed interactive dashboards using Recharts. The platform supports multi entity operations, real-time insights, and decision support through pattern analysis and predictive modeling.",
    features: [
      "AI Demand Forecasting  Predicts product demand using LSTM and Prophet.",
      "Dynamic Pricing  Adjusts prices in real time using XGBoost and RL.",
      "Customer Personalization  Recommends products based on user behavior.",
      "Live Dashboard  Shows real-time insights on sales, inventory, and pricing.",
    ],
    images: ["/retail1.jpg", "/retail2.jpg", "/retail3.jpg", " /retail4.jpg"],
    github:
      "https://github.com/thakur-vidhatri/AI-powered_retail_management_system",
  },
  {
    title: "SKIN AI(ONGOING PROJECT)",
    subtitle: " AI-Powered Skin care recommendation system",
    image: "/skin.png",
    description:
      "  Built a scalable web application  Enabled real-time data streaming with Apache Kafka and designed interactive dashboards using Recharts. The platform supports multi entity operations, real-time insights, and decision support through pattern analysis and predictive modeling.",
    features: [
      "Identifies facial skin issues (like acne, wrinkles, pigmentation) from user-uploaded images using deep learning.",
      "Suggests effective chemical combinations using rule-based logic and Transformer models trained on product data.",
      "Finds real skincare products that contain the recommended ingredients, ranked by authenticity and customer reviews.",
      "Uses Generative AI to create daily skincare routines tailored to the user's skin concerns and selected products.",
    ],
    images: [],
    github: "",
  },
];

const Projectpage = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null); // Change to null initially
  const [isTablet, setIsTablet] = useState(null); // Change to null initially
  const [isLoaded, setIsLoaded] = useState(false); // Add loading state

  // Check if screen is mobile size
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (isMobile) {
        // Vertical scrolling for mobile
        scrollRef.current.scrollBy({
          top: direction === "left" ? -300 : 300,
          behavior: "smooth",
        });
      } else {
        // Horizontal scrolling for desktop
        scrollRef.current.scrollBy({
          left: direction === "left" ? -300 : 300,
          behavior: "smooth",
        });
      }
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "walkerCanvas";
    canvas.style.position = "fixed";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = -1;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let width, height;
    let x, y;
    let angle;
    const stepLength = 3;
    const turnChance = 0.15;
    const possibleAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
    const lineWidth = 3;
    const lineColor = "rgba(229, 231, 235, 0.8)";
    const FADE_ENABLED = true;
    const FADE_AMOUNT = 0.03;
    const BACKGROUND_COLOR = "#1f2937";

    const hexToRgb = (hex) => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const setup = () => {
      width = window.innerWidth * 0.8;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      x = Math.random() * width;
      y = Math.random() * height;
      angle = possibleAngles[Math.floor(Math.random() * possibleAngles.length)];

      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (!FADE_ENABLED) {
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const draw = () => {
      requestAnimationFrame(draw);

      if (FADE_ENABLED) {
        const rgb = hexToRgb(BACKGROUND_COLOR);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${FADE_AMOUNT})`;
        ctx.fillRect(0, 0, width, height);
      }

      const oldX = x;
      const oldY = y;

      x += Math.cos(angle) * stepLength;
      y += Math.sin(angle) * stepLength;

      if (x < 0) x = width;
      if (x > width) x = 0;
      if (y < 0) y = height;
      if (y > height) y = 0;

      ctx.beginPath();
      ctx.moveTo(oldX, oldY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      if (Math.random() < turnChance) {
        angle =
          possibleAngles[Math.floor(Math.random() * possibleAngles.length)];
      }
    };

    window.addEventListener("resize", setup);
    setup();
    draw();

    return () => {
      window.removeEventListener("resize", setup);
      document.body.removeChild(canvas);
    };
  }, []);

  // Don't render main content until screen size is detected
  if (!isLoaded || isMobile === null || isTablet === null) {
    return (
      <main className="relative min-h-screen w-full text-white overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_center,_#000000,_#1a1a40)]" />

        {/* Loading placeholder */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-xl">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Canvas gets added by useEffect and is also behind content */}
      {/* Your main content stays here */}
      <div className="relative z-10 p-4 md:p-8 mt-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
          My Projects
        </h1>

        {isMobile ? (
          // Mobile layout - vertical scrolling
          <div className="relative mt-6 flex flex-col items-center w-full mx-auto">
            <div
              ref={scrollRef}
              className="flex flex-col gap-6 overflow-y-auto px-4 py-4 max-h-[70vh] w-full"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.3) transparent",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => openModal(project)}
                  className="cursor-pointer w-full"
                >
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    subtitle={project.subtitle}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => scroll("left")}
                className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transform rotate-90"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transform rotate-90"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        ) : (
          // Desktop layout - horizontal scrolling (original)
          <div className="relative mt-10 flex items-center justify-center w-[85%] mx-auto">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
            >
              <ChevronLeft />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-10 overflow-x-auto no-scrollbar scroll-smooth px-10 py-10"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => openModal(project)}
                  className="cursor-pointer"
                >
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    subtitle={project.subtitle}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projectpage;
