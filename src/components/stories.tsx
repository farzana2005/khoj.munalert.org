import React from "react";
import { memories } from "../data";       // ঠিকভাবে import
import ShareButton from "../components/ShareButton"; // ShareButton import

export default function StoriesPage() {
  return (
    <div className="p-6 space-y-6">
      {memories.map((memory, index) => (
        <div key={index} className="p-4 border rounded shadow">
          {/* যদি image থাকে */}
          {memory.image_src && (
            <img
              src={memory.image_src.small}
              alt={memory.name}
              className="w-full max-w-xs rounded mb-2"
            />
          )}
          
          <h2 className="font-bold text-lg">{memory.name}</h2>
          <p>{memory.seat} | {memory.dates}</p>
          <p className="mt-2">{memory.story}</p>

          {/* Share Button */}
          <div className="mt-4">
            <ShareButton
              name={memory.name}
              seat={memory.seat}
              dates={memory.dates}
              story={memory.story}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
