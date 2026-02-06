import { memories } from "../utils/data";
import { motion } from "framer-motion";

// MemoryType update: audio_src optional
export type MemoryType = (typeof memories)[0] & { audio_src?: string };

type MemoryProps = { memory: MemoryType; handleOpen: () => void };

export default function Memory({ handleOpen, memory }: MemoryProps) {
  return (
    <button onClick={handleOpen} className="cursor-pointer">
      <div className="border-b border-gray-700">
        <div className="flex items-center gap-5">
          <div className="w-18 md:w-26">
            <div className="relative overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 109 173"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2701_7)">
                  <g clipPath="url(#clip1_2701_7)">
                    <path
                      d="M0 11C0 4.925 4.925 0 11 0H98C104.075 0 109 4.925 109 11V173H0V11Z"
                      fill="black"
                    />
                    <path d="M39 11H68Z" fill="black" />
                    <path
                      d="M39 11H68"
                      stroke="#444444"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_2701_7">
                    <rect width="109" height="173" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_2701_7">
                    <rect width="109" height="173" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute z-1 top-0 left-0 right-0 px-1 pt-4 md:pt-5.5 overflow-hidden">
                <img
                  alt={memory.name}
                  loading="lazy"
                  className="rounded-xs"
                  src={memory.image_src.small}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-1">
            <div className="text-left">
              <h2 className="font-bethany text-white text-lg mb-1">
                {memory.name}
              </h2>

              <motion.p
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ color: "#E01075" }}
                className="text-xs font-semibold cursor-pointer mb-0.5"
              >
                {memory.seat}
              </motion.p>

              <p className="text-xs uppercase text-[#a7a7a7]">{memory.dates}</p>
            </div>
            <div className="">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
