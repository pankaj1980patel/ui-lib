import BtnTypeOne, { IButtonProps } from "@/components/buttons/BtnTypeOne";
import BtnTypeThree from "@/components/buttons/BtnTypeThree";
import BtnTypeTwo from "@/components/buttons/BtnTypeTwo";
import React from "react";
import { ALL_BTNS } from "./btnColors";

const page = ({ params }: { params: { type?: string } }) => {
  const VARIANTS = ["sm", "md", "lg", "xl", "2xl"];
  const btnType: "1" | "2" | "3" =
    params.type && ["1", "2", "3"].includes(params.type)
      ? (params.type as "1" | "2" | "3")
      : "1";
  return (
    <div>
      <h1 className="text-3xl font-bold  text-[#2F2B43] my-10">Buttons</h1>
      {ALL_BTNS.map((btns, index) => (
        <div className="space-y-10 mb-[88px]" key={index}>
          {btns.map((btn, index2) => (
            <div className="flex flex-wrap items-start gap-[54px]" key={index2}>
              {VARIANTS.map((variant, index3) =>
                renderButtonComponent(
                  {
                    ...btn,
                    variant: variant as "sm" | "md" | "lg" | "xl" | "2xl",
                  },
                  btnType,
                  index3
                )
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default page;

const renderButtonComponent = (
  buttonProps: Omit<IButtonProps, "label">,
  type: string,
  index: number
) => {
  switch (type) {
    case "1":
      return (
        <BtnTypeOne
          backgroundColor={buttonProps.backgroundColor}
          foregroundColor={buttonProps.foregroundColor}
          shadow={!!buttonProps.shadow}
          shadowColor={buttonProps.shadowColor}
          label="Button CTA"
          variant={buttonProps.variant}
          borderColor={buttonProps.borderColor}
          borderType={buttonProps.borderType}
          borderWidth={buttonProps.borderWidth}
          key={index}
        />
      );
    case "2":
      return (
        <BtnTypeTwo
          backgroundColor={buttonProps.backgroundColor}
          foregroundColor={buttonProps.foregroundColor}
          badgeColor={buttonProps.badgeColor}
          shadow={!!buttonProps.shadow}
          shadowColor={buttonProps.shadowColor}
          label="Button CTA"
          variant={buttonProps.variant}
          borderColor={buttonProps.borderColor}
          borderType={buttonProps.borderType}
          borderWidth={buttonProps.borderWidth}
          key={index}
        />
      );
    case "3":
      return (
        <BtnTypeThree
          backgroundColor={buttonProps.backgroundColor}
          foregroundColor={buttonProps.foregroundColor}
          shadow={!!buttonProps.shadow}
          shadowColor={buttonProps.shadowColor}
          variant={buttonProps.variant}
          borderColor={buttonProps.borderColor}
          borderType={buttonProps.borderType}
          borderWidth={buttonProps.borderWidth}
          key={index}
        />
      );
    default:
      return (
        <BtnTypeOne
          backgroundColor={buttonProps.backgroundColor}
          foregroundColor={buttonProps.foregroundColor}
          shadow={!!buttonProps.shadow}
          label="Button CTA"
          variant={buttonProps.variant}
          borderColor={buttonProps.borderColor}
          borderType={buttonProps.borderType}
          borderWidth={buttonProps.borderWidth}
          key={index}
        />
      );
  }
};
