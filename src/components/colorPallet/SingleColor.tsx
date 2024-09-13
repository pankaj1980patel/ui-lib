import React from "react";

interface Props {
  colorShade: string;
  colorHex: string;
  isSpecial?: boolean;
}
const SingleColor = ({ colorShade, colorHex, isSpecial }: Props) => {
  return (
    <div
      className={`relative ${
        isSpecial ? "w-[224px]" : "w-[160px]"
      } h-[156px] !rounded-[24px] shadow-lg`}
    >
      <div
        className={`h-[80px] !rounded-t-[24px]`}
        style={{
          backgroundColor: colorHex,
        }}
      ></div>
      <div className="mt-[10px] px-3 pb-3">
        <p className="text-lg font-medium">{colorShade}</p>
        <p className="text-[#475467] text-base">{colorHex}</p>
      </div>

      {isSpecial && (
        <div
          className={`absolute w-[14px] h-[14px] rounded-full bg-white bg-opacity-30  flex justify-center items-center top-[18px] right-[18px]`}
        >
          <div className="bg-white w-[10px] h-[10px] rounded-full bg-opacity-100"></div>
        </div>
      )}
    </div>
  );
};

export default SingleColor;
