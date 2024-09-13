import React from "react";

export interface IIconButtonProps {
  backgroundColor: string;
  foregroundColor: string;
  label?: string;
  icon?: React.ReactNode;
  shadow?: boolean;
  borderColor?: string;
  borderType?: "solid" | "dashed" | "dotted";
  borderWidth?: string;
  shadowColor?: string;
}

const IconButton = ({
  backgroundColor,
  foregroundColor,
  label,
  icon,
  shadow,
  borderColor,
  borderType = "solid",
  borderWidth = "1px",
  shadowColor,
}: IIconButtonProps) => {
  const shadowStyle = shadow
    ? {
        boxShadow: `0px 0px 0px 4px ${
          shadowColor ? shadowColor : backgroundColor + "40"
        }`,
      }
    : {};
  const btnBorderCss = `${borderWidth} ${borderType} ${borderColor}`;

  return (
    <button
      className={`flex gap-3 items-center box-border rounded-full shadow-xs ${
        !label || label === "" ? "p-[10px]" : "py-[10px] px-[16px]"
      }`}
      style={{
        backgroundColor: backgroundColor,
        color: foregroundColor,
        border: borderColor ? btnBorderCss : "none",
        ...shadowStyle,
      }}
    >
      {icon}
      {label}
    </button>
  );
};

export default IconButton;
