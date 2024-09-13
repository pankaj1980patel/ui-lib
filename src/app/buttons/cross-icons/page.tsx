import React from "react";
import { ALL_CROSS_BTNS } from "./btnCross";
import IconButton from "@/components/buttons/IconButtons";

const page = () => {
  return (
    <div className="mt-10 space-y-6">
      {ALL_CROSS_BTNS.map((singleSet, index1) => (
        <div className="flex flex-wrap items-center gap-[64px] " key={index1}>
          {singleSet.map((btn, index2) => (
            <IconButton
              key={index2}
              backgroundColor={btn.backgroundColor}
              foregroundColor={btn.foregroundColor}
              icon={btn.icon}
              shadow={!!btn.shadow}
              shadowColor={btn.shadowColor}
              className={btn.className}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default page;
