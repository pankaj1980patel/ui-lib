import SingleShadow from "@/components/shadows/SingleShadow";
import React from "react";

const page = () => {
  const SHADOWS: string[] = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
  return (
    <div>
      <h1 className="text-3xl font-bold  text-[#2F2B43] my-10">Shadows</h1>
      <p className="mb-4 text-gray-500">Note: Check tailwind.config.ts for more details</p>
      <div className="flex flex-wrap gap-[54px]">
        {SHADOWS.map((shadow) => (
          <SingleShadow key={shadow} shadowSize={shadow} />
        ))}
      </div>
    </div>
  );
};

export default page;
