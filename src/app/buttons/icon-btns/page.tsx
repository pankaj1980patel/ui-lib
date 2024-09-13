import React from "react";
import { ALL_ICON_BTNS } from "./btnProps";
import IconButton from "@/components/buttons/IconButtons";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold  text-[#2F2B43] my-10">Buttons</h1>
      <div className="space-y-16">
        {ALL_ICON_BTNS.map((singleSet, index1) => (
          <div className="space-y-4" key={index1}>
            {singleSet.map((singleRow, index2) => (
              <div
                className="flex flex-wrap items-start gap-[64px]"
                key={index2}
              >
                {singleRow.map((btn, index) => (
                  <IconButton
                    key={index}
                    backgroundColor={btn.backgroundColor}
                    foregroundColor={btn.foregroundColor}
                    shadow={!!btn.shadow}
                    label={btn.label}
                    borderColor={btn.borderColor}
                    borderType={btn.borderType}
                    borderWidth={btn.borderWidth}
                    icon={btn.icon}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
