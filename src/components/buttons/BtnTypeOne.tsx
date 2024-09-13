import React from "react";

export interface IButtonProps {
  backgroundColor: string;
  foregroundColor: string;
  variant: "sm" | "md" | "lg" | "xl" | "2xl";
  label: string;
  shadow?: boolean;
  borderColor?: string;
  borderType?: "solid" | "dashed" | "dotted";
  borderWidth?: string;
  shadowColor?: string;
}

const BtnTypeOne = ({
  variant,
  backgroundColor,
  foregroundColor,
  label,
  shadow,
  borderColor,
  borderType = "solid",
  borderWidth = "1px",
  shadowColor,
}: IButtonProps) => {
  const shadowStyle = shadow
    ? {
        boxShadow: `0px 0px 0px 4px ${
          shadowColor ? shadowColor : backgroundColor + "40"
        }`,
      }
    : {};
  const btnBorderCss = `${borderWidth} ${borderType} ${borderColor}`;
  const commonBtnCss = `rounded-full`;
  const buttonClasses = {
    sm: `${commonBtnCss} text-sm font-semibold px-[14px] py-2`,
    md: `${commonBtnCss} text-sm font-semibold py-[10px] px-[16px]`,
    lg: `${commonBtnCss} text-base font-semibold py-[11px] px-[18px]`,
    xl: `${commonBtnCss} text-base font-semibold py-[13px] px-[20px]`,
    "2xl": `${commonBtnCss} text-lg leading-[24px] font-semibold py-[16px] px-[28px]`,
  };
  const borderCss = `w-5 h-5 rounded-full border-2`;
  return (
    <button
      className={`flex gap-2 items-center box-border ${buttonClasses[variant]}`}
      style={{
        backgroundColor: backgroundColor,
        color: foregroundColor,
        border: borderColor ? btnBorderCss : "none",
        ...shadowStyle,
      }}
    >
      <div className={borderCss} style={{ borderColor: foregroundColor }} />
      {label}
      <div className={borderCss} style={{ borderColor: foregroundColor }} />
    </button>
  );
};

export default BtnTypeOne;
