export const ALL_BTNS: {
  backgroundColor: string;
  foregroundColor: string;
  borderColor?: string;
  borderType?: "solid" | "dashed" | "dotted";
  borderWidth?: string;
  shadow?: boolean;
  shadowColor?: string;
}[][] = [
  [
    {
      backgroundColor: "#005195",
      foregroundColor: "#FFFFFF",
    },
    {
      backgroundColor: "#002646",
      foregroundColor: "#FFFFFF",
    },
    {
      backgroundColor: "#005195",
      foregroundColor: "#FFFFFF",
      shadow: true,
    },
    {
      backgroundColor: "#9CD3EE",
      foregroundColor: "#FFFFFF",
    },
  ],
  [
    {
      backgroundColor: "#FFFFFF",
      foregroundColor: "#344054",
      borderColor: "#D0D5DD",
    },
    {
      backgroundColor: "#F9FAFB",
      foregroundColor: "#1D2939",
      borderColor: "#D0D5DD",
    },
    {
      backgroundColor: "#FFFFFF",
      foregroundColor: "#FFFFFF",
      shadow: true,
      shadowColor: "#F2F4F7",
    },
    {
      backgroundColor: "#FFFFFF",
      foregroundColor: "#D0D5DD",
      borderColor: "#EAECF0",
    },
  ],
];
