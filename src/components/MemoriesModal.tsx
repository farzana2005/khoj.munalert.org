import { AnimatePresence, motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import AudioWave from "../assets/audioWave";
import type { MemoryType } from "./Memory";






type MemoriesModalProps = {
  isVisible: boolean;
  selected: MemoryType | undefined;
  handleClose: () => void;
};

export default function MemoriesModal({
  isVisible,
  selected,
  handleClose,
}: MemoriesModalProps) {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const firstName = selected?.name.split(" ").at(0);

  // Pause audio on unmount
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  // Reset when selected changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (isPlaying) setIsPlaying(false);
  }, [selected]);

  const handleAudioToggle = () => {
    if (!selected?.audio_src) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(selected.audio_src);
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const story = selected?.story;
  const match = story?.match(/\n\n\*(–.*?)\*$/);
  let mainText = story;
  let authorText = null;

  if (match) {
    authorText = match[1];
    mainText = story?.replace(/\n\n\*(–.*?)\*$/, "");
  }

  const handleCopyLink = async () => {
    if (!selected?.name) return;
    const shareLink = `${window.location.origin}/#${selected.name.replace(/\s+/g, "-")}`;
    await navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isVisible && selected && (
        <motion.div
          className="fixed inset-0 bg-[#212121] overflow-y-auto z-20"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Header */}
          <div className="sticky z-10 top-0 left-0 right-0 p-6 md:p-9 flex justify-end gap-3.5 bg-[#212121]/80 backdrop-blur-sm">
            {selected.audio_src && (
              <button
                onClick={handleAudioToggle}
                className={`bg-white hover:bg-[#C8E4C2] active:bg-[#C8E4C2] rounded-full cursor-pointer px-6 py-3 transition-all uppercase text-xs text-black font-medium items-center gap-2 hidden md:flex ${isPlaying ? "bg-[#C8E4C2]!" : ""}`}
              >
                <AudioWave />
                <p className="-mb-1">{isPlaying ? "Pause Story" : `Hear ${firstName}'s Story`}</p>
              </button>
            )}
            <button
              onClick={handleClose}
              className="bg-[#ffffffcc] hover:bg-[#C8E4C2] active:bg-[#C8E4C2] rounded-full text-black cursor-pointer p-3 transition-all"
            >
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
                <path d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="w-full px-6 lg:container mx-auto">
            {/* Mobile Header */}
            <div className="md:hidden mt-6">
              <h2 className="text-2xl font-bethany mb-1 text-white">{selected.name}</h2>
              <p className="mb-2 text-white text-sm">{selected.dates}</p>
              {selected.audio_src && (
                <button
                  onClick={handleAudioToggle}
                  className={`bg-white hover:bg-[#C8E4C2] active:bg-[#C8E4C2] rounded-full cursor-pointer px-6 py-3 transition-all uppercase text-[10px] text-black font-medium flex items-center gap-2 md:hidden mb-5 ${isPlaying ? "bg-[#C8E4C2]!" : ""}`}
                >
                  <AudioWave />
                  <p className="-mb-1">{isPlaying ? "Pause Story" : `Hear ${firstName}'s Story`}</p>
                </button>
              )}
            </div>

            {/* Image + Content */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mt-6 md:mt-12">
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-64 lg:w-72 sticky md:relative">
                <div className="relative overflow-hidden -translate-y-6 md:-translate-y-0">
                  <img
                    alt={selected.name}
                    src={selected.image_src.large}
                    loading="eager"
                    className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-6 md:pt-0 xl:ml-8">
                <h2 className="text-5xl font-bethany mb-4 text-white hidden md:block">{selected.name}</h2>
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ color: "#E01075" }}
                  className="font-bold text-xl mb-4 cursor-pointer hidden md:block"
                >
                  {selected.seat}
                </motion.p>
                <p className="mb-6 text-white text-lg hidden md:block">{selected.dates}</p>
                <p className="whitespace-pre-line text-white">{mainText}</p>
                {authorText && <p className="italic text-sm opacity-70 mt-4 text-white">{authorText}</p>}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  {selected.audio_src && (
                    <button
                      onClick={handleAudioToggle}
                      className={`bg-white hover:bg-[#C8E4C2] active:bg-[#C8E4C2] rounded-full cursor-pointer px-6 py-3 transition-all uppercase text-xs text-black font-medium flex items-center gap-2 ${isPlaying ? "bg-[#C8E4C2]!" : ""}`}
                    >
                      <AudioWave />
                      <p className="-mb-1">{isPlaying ? "Pause Story" : `Hear ${firstName}'s Story`}</p>
                    </button>
                  )}

                  <button
                    onClick={handleCopyLink}
                    className="bg-[#E01075] hover:bg-[#C8E4C2] active:bg-[#C8E4C2] rounded-full cursor-pointer px-6 py-3 transition-all uppercase text-xs text-white font-medium flex items-center gap-2"
                  >
                    <p className="-mb-1">{copied ? "Link Copied" : `Share ${firstName}'s Story`}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
