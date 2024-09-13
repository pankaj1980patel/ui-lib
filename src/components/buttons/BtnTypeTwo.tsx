import React from "react";

interface Props {
  backgroundColor: string;
  foregroundColor: string;
  variant: "sm" | "md" | "lg" | "xl" | "2xl";
  label: string;
  shadow?: boolean;
  borderColor?: string;
  borderType?: "solid" | "dashed" | "dotted";
  borderWidth?: string;
  shadowColor?: string;
  badgeColor?: string;
}

const BtnTypeTwo = ({
  variant,
  backgroundColor,
  foregroundColor,
  label,
  shadow,
  borderColor,
  borderType = "solid",
  borderWidth = "1px",
  shadowColor,
  badgeColor,
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
        border: borderColor ? btnBorderCss : "none",
        ...shadowStyle,
      }}
    >
      <div
        className={`w-[10px] h-[10px] rounded-full`}
        style={{ backgroundColor: badgeColor ? badgeColor : foregroundColor }}
      />
      {label}
    </button>
  );
};

export default BtnTypeTwo;
