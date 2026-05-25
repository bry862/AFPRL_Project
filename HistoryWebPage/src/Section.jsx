import { useState } from "react";

function Section(prop) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="mx-6 my-5 bg-green-900 backdrop-blur-md border border-amber-800 shadow-lg rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.01]"
      style={{ height: isExpanded ? "320px" : "140px" }}
    >
      <div className="h-full flex items-center gap-6 px-6 py-4">

        <div className="shrink-0">
          <img
            src={prop.image}
            className="w-28 h-28 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {prop.title}
          </h2>

         

          {isExpanded && (
            <p className="text-white/90 mt-3 leading-relaxed">
              {prop.paragraph}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default Section