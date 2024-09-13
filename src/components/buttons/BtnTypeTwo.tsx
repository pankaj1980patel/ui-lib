import React from "react";

interface Props {
  backgroundColor: string;
  foregroundColor: string;
  variant: "sm" | "md" | "lg" | "xl" | "2xl";
  label: string;
  shadow?: boolean;
}

const BtnTypeTwo = ({
  variant,
  backgroundColor,
  foregroundColor,
  label,
  shadow,
}: Props) => {
  const shadowStyle = shadow
    ? { boxShadow: `0px 0px 0px 4px ${backgroundColor + "40"}` }
    : {};

  const commonBtnCss = `rounded-full`;
  const buttonClasses = {
    sm: `${commonBtnCss} text-sm font-semibold px-[14px] py-2`,
    md: `${commonBtnCss} text-sm font-semibold py-[10px] px-[16px]`,
    lg: `${commonBtnCss} text-base leading-[22px] font-semibold py-[10px] px-[18px]`,
    xl: `${commonBtnCss} text-base leading-[22px] font-semibold py-[12px] px-[20px]`,
    "2xl": `${commonBtnCss} text-lg font-semibold py-[16px] px-[28px]`,
  };
  return (
    <button
      className={`flex gap-2 items-center ${buttonClasses[variant]}`}
      style={{
        backgroundColor: backgroundColor,
        color: foregroundColor,
        ...shadowStyle,
      }}
    >
      <div
        className={`w-[10px] h-[10px] rounded-full`}
        style={{ backgroundColor: foregroundColor }}
      />
      {label}
    </button>
  );
};

export default BtnTypeTwo;
