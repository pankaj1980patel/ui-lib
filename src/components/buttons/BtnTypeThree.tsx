import React from "react";

interface Props {
  backgroundColor: string;
  foregroundColor: string;
  variant: "sm" | "md" | "lg" | "xl" | "2xl";
  shadow?: boolean;
  onClick?: () => void;
  borderColor?: string;
  borderType?: "solid" | "dashed" | "dotted";
  borderWidth?: string;
  shadowColor?: string;
}

const BtnTypeThree = ({
  variant,
  backgroundColor,
  foregroundColor,
  shadow,
  onClick,
  borderColor,
  borderType = "solid",
  borderWidth = "1px",
  shadowColor,
}: Props) => {
  const getShadowColor = () => {
    return shadowColor ? shadowColor : backgroundColor + "40";
  };
  const shadowStyle = shadow
    ? {
        boxShadow: `0px 0px 0px 4px ${getShadowColor()}`,
      }
    : {};

  const btnBorderCss = `${borderWidth} ${borderType} ${borderColor}`;
  const commonBtnCss = `rounded-full`;
  const buttonClasses = {
    sm: `${commonBtnCss} text-sm font-semibold p-2`,
    md: `${commonBtnCss} text-sm font-semibold p-[10px]`,
    lg: `${commonBtnCss} text-base font-semibold p-[12px]`,
    xl: `${commonBtnCss} text-base font-semibold p-[14px]`,
    "2xl": `${commonBtnCss} text-lg font-semibold p-[16px]`,
  };
  const borderCss = `w-5 h-5 rounded-full border-2`;
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center ${buttonClasses[variant]}`}
      style={{
        backgroundColor: backgroundColor,
        color: foregroundColor,
        border: borderColor ? btnBorderCss : "none",
        ...shadowStyle,
      }}
    >
      <div className={borderCss} style={{ borderColor: foregroundColor }} />
    </button>
  );
};

export default BtnTypeThree;
