import { useEffect, useState } from "react";
import MemoriesModal from "./MemoriesModal";
import Memory, { type MemoryType } from "./Memory";
import { memories } from "../utils/data";

export default function Memories() {
  const [selected, setSelected] = useState<MemoryType>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const memoryName = hash.replace("#", "").replace(/-/g, " ");
      const foundMemory = memories.find((memory) => memory.name === memoryName);
      if (foundMemory) {
        setTimeout(() => {
          setIsVisible(true);
          window.history.replaceState(null, "", window.location.origin);
          setSelected(foundMemory);
        }, 0);
      }
    }
  }, []);

  return (
    <>
      <div className="w-full lg:container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-4">
          {memories.map((memory, idx) => (
            <Memory
              key={idx}
              memory={memory}
              handleOpen={() => {
                setIsVisible(true);
                setSelected(memory);
              }}
            />
          ))}
        </div>
      </div>
      <MemoriesModal
        selected={selected}
        isVisible={isVisible}
        handleClose={() => {
          setIsVisible(false);
          setSelected(undefined);
        }}
      />
    </>
  );
}
