"use client";
import React, { useState } from "react";
import BlurText from "@/components/ui/TextAnimations/BlurText/BlurText";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Glowing animation style */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 10px #fff, 0 0 20px #f0f, 0 0 30px #0ff;
          }
          50% {
            box-shadow: 0 0 20px #0ff, 0 0 30px #f0f, 0 0 40px #fff;
          }
        }
        .glow-border {
          animation: glow 2s infinite ease-in-out;
          border: 2px solid transparent;
        }
      `}</style>

      {/* Modal Background */}
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-6xl flex flex-col md:flex-row relative glow-border">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white border-2 border-gray-800 rounded-full p-1 z-10"
            title="Close"
          >
            <img
              src="/close.png"
              alt="Close"
              className="w-6 h-6 cursor-pointer"
            />
          </button>

          {/* Left Side - Project Info */}
          <div className="md:w-1/2 space-y-4 pr-6">
            <BlurText text={project?.title} className="text-3xl font-bold" />
            <p className="text-sm italic text-pink-600">{project?.subtitle}</p>
            <p className="text-gray-700 text-sm">{project?.description}</p>

            <div>
              <h4 className="font-semibold mt-3">Features:</h4>
              {project?.features?.length > 0 ? (
                <ul className="list-disc ml-5 text-sm text-gray-600">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-gray-400">No features listed.</p>
              )}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg"
              >
                View on GitHub
              </a>
            )}
          </div>

          {/* Right Side - Images */}
          <div className="md:w-1/2 grid grid-cols-2 gap-3 mt-14">
            {project?.images?.length > 0 ? (
              project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="rounded-2xl object-cover h-45 w-58 border-2 border-gray-500 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(img)}
                />
              ))
            ) : (
              <p className="text-xs text-gray-400">No images available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded"
            className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </>
  );
};

export default ProjectModal;
