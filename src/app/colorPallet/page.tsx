import SingleColor from "@/components/colorPallet/SingleColor";
import React from "react";

const page = () => {
  const COLOR_PALLET: Record<
    string,
    { colorShade: string; colorHex: string; isSpecial?: boolean }[]
  > = {
    Base: [
      { colorShade: "White", colorHex: "#FFFFFF", isSpecial: false },
      { colorShade: "Black", colorHex: "#000000", isSpecial: false },
    ],
    Gray: [
      { colorShade: "25", colorHex: "#FCFCFD", isSpecial: false },
      { colorShade: "50", colorHex: "#F9FAFB", isSpecial: false },
      { colorShade: "100", colorHex: "#F4F5F7", isSpecial: false },
      { colorShade: "200", colorHex: "#EAECF0", isSpecial: false },
      { colorShade: "300", colorHex: "#D0D5DD", isSpecial: false },
      { colorShade: "400", colorHex: "#98A2B3", isSpecial: false },
      { colorShade: "500", colorHex: "#667085", isSpecial: true },
      { colorShade: "600", colorHex: "#475467", isSpecial: false },
      { colorShade: "700", colorHex: "#344054", isSpecial: false },
      { colorShade: "800", colorHex: "#1D2939", isSpecial: false },
      { colorShade: "900", colorHex: "#101828", isSpecial: false },
    ],
    Primary: [
      { colorShade: "25", colorHex: "#EDF5FF", isSpecial: false },
      { colorShade: "50", colorHex: "#E1EFFD", isSpecial: false },
      { colorShade: "100", colorHex: "#CEE7FE", isSpecial: false },
      { colorShade: "200", colorHex: "#A7D8FC", isSpecial: false },
      { colorShade: "300", colorHex: "#69C2F9", isSpecial: false },
      { colorShade: "400", colorHex: "#309EF8", isSpecial: false },
      { colorShade: "500", colorHex: "#1E86FE", isSpecial: true },
      { colorShade: "600", colorHex: "#027AEF", isSpecial: false },
      { colorShade: "700", colorHex: "#0466C8", isSpecial: false },
      { colorShade: "800", colorHex: "#0544A3", isSpecial: false },
      { colorShade: "900", colorHex: "#09377B", isSpecial: false },
    ],
    Secondary: [
      { colorShade: "25", colorHex: "#FEF3F9", isSpecial: false },
      { colorShade: "50", colorHex: "#FEE9F3", isSpecial: false },
      { colorShade: "100", colorHex: "#FDD3E1", isSpecial: false },
      { colorShade: "200", colorHex: "#F9A8C5", isSpecial: false },
      { colorShade: "300", colorHex: "#E66194", isSpecial: true },
      { colorShade: "400", colorHex: "#C23D60", isSpecial: false },
      { colorShade: "500", colorHex: "#AF1A3A", isSpecial: false },
      { colorShade: "600", colorHex: "#92092D", isSpecial: false },
      { colorShade: "700", colorHex: "#6E0020", isSpecial: false },
    ],
    Tertiary: [
      { colorShade: "25", colorHex: "#FEF9F0", isSpecial: false },
      { colorShade: "50", colorHex: "#FEF3E3", isSpecial: false },
      { colorShade: "100", colorHex: "#FEEBD0", isSpecial: false },
      { colorShade: "200", colorHex: "#FFD8A9", isSpecial: false },
      { colorShade: "300", colorHex: "#FFAB47", isSpecial: true },
      { colorShade: "400", colorHex: "#E37D00", isSpecial: false },
      { colorShade: "500", colorHex: "#C25500", isSpecial: false },
      { colorShade: "600", colorHex: "#A43E00", isSpecial: false },
      { colorShade: "700", colorHex: "#8B3200", isSpecial: false },
    ],
    Blue: [
      { colorShade: "25", colorHex: "#E8F5FC", isSpecial: false },
      { colorShade: "50", colorHex: "#D0EAF8", isSpecial: false },
      { colorShade: "100", colorHex: "#A3D4F0", isSpecial: false },
      { colorShade: "200", colorHex: "#6AB2E0", isSpecial: false },
      { colorShade: "300", colorHex: "#3693CF", isSpecial: false },
      { colorShade: "400", colorHex: "#0085C6", isSpecial: false },
      { colorShade: "500", colorHex: "#0073A9", isSpecial: true },
      { colorShade: "600", colorHex: "#00557D", isSpecial: false },
      { colorShade: "700", colorHex: "#003E5E", isSpecial: false },
      { colorShade: "800", colorHex: "#002B43", isSpecial: false },
      { colorShade: "900", colorHex: "#001A2D", isSpecial: false },
    ],
    Error: [
      { colorShade: "25", colorHex: "#FFF7F7", isSpecial: false },
      { colorShade: "50", colorHex: "#FEEFEF", isSpecial: false },
      { colorShade: "100", colorHex: "#FDE4E4", isSpecial: false },
      { colorShade: "200", colorHex: "#FCBFBF", isSpecial: false },
      { colorShade: "300", colorHex: "#FA8989", isSpecial: false },
      { colorShade: "400", colorHex: "#F76666", isSpecial: false },
      { colorShade: "500", colorHex: "#F04444", isSpecial: true },
      { colorShade: "600", colorHex: "#D92020", isSpecial: false },
      { colorShade: "700", colorHex: "#A61B1B", isSpecial: false },
      { colorShade: "800", colorHex: "#781010", isSpecial: false },
      { colorShade: "900", colorHex: "#590A0A", isSpecial: false },
    ],
    Warning: [
      { colorShade: "25", colorHex: "#FFF7ED", isSpecial: false },
      { colorShade: "50", colorHex: "#FEF0C7", isSpecial: false },
      { colorShade: "100", colorHex: "#FEDF89", isSpecial: false },
      { colorShade: "200", colorHex: "#FEC84B", isSpecial: false },
      { colorShade: "300", colorHex: "#FDA61C", isSpecial: false },
      { colorShade: "400", colorHex: "#F79009", isSpecial: false },
      { colorShade: "500", colorHex: "#DC6803", isSpecial: true },
      { colorShade: "600", colorHex: "#B54708", isSpecial: false },
      { colorShade: "700", colorHex: "#93370D", isSpecial: false },
      { colorShade: "800", colorHex: "#7A2E0E", isSpecial: false },
      { colorShade: "900", colorHex: "#5C2303", isSpecial: false },
    ],
    Success: [
      { colorShade: "25", colorHex: "#F6FEF9", isSpecial: false },
      { colorShade: "50", colorHex: "#ECFDF3", isSpecial: false },
      { colorShade: "100", colorHex: "#D1FADF", isSpecial: false },
      { colorShade: "200", colorHex: "#A6F4C5", isSpecial: false },
      { colorShade: "300", colorHex: "#6CE9A6", isSpecial: false },
      { colorShade: "400", colorHex: "#32D583", isSpecial: false },
      { colorShade: "500", colorHex: "#12B76A", isSpecial: true },
      { colorShade: "600", colorHex: "#039855", isSpecial: false },
      { colorShade: "700", colorHex: "#027A48", isSpecial: false },
      { colorShade: "800", colorHex: "#05603A", isSpecial: false },
      { colorShade: "900", colorHex: "#054F31", isSpecial: false },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold  text-[#2F2B43] my-10">Color Pallet</h1>
      {Object.entries(COLOR_PALLET).map(([key, value]) => {
        return (
          <div key={key} className="my-[54px]">
            <h2 className="text-2xl font-bold text-[#121212]">{key}</h2>
            <div className="flex flex-wrap gap-8 mt-10">
              {value.map((color) => (
                <SingleColor
                  key={color.colorShade}
                  colorShade={color.colorShade}
                  colorHex={color.colorHex}
                  isSpecial={color.isSpecial}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
