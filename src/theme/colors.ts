export enum ColorName {
  Blood = "blood",
  Bruise = "bruise",
  Fat = "fat",
  Scalpel = "scalpel",
  Surgical = "surgical",
  Urine = "urine",
}

export type ColorGrade =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

const blood = {
  100: "#FDE2E2",
  200: "#FBC4C4",
  300: "#FAA7A7",
  400: "#F88989",
  500: "#F66C6C",
  600: "#E85454",
  700: "#D44949",
  800: "#BE3D3D",
  900: "#AA3232",
  950: "#901729",
};

const bruise = {
  100: "#EEF5FF",
  200: "#C3DBFF",
  300: "#94BFFF",
  400: "#6691FF",
  500: "#5268FF",
  600: "#494FF6",
  700: "#393EDF",
  800: "#1E32B6",
  900: "#07198B",
  950: "#03045E",
};

const fat = {
  100: "#FFF9F2",
  200: "#FFEACE",
  300: "#FFD5AF",
  400: "#FFC795",
  500: "#FFB97A",
  600: "#FAAB65",
  700: "#F49947",
  800: "#E7852E",
  900: "#DB761C",
  950: "#C9670E",
};

const scalpel = {
  100: "#F4F4F4",
  200: "#E6E6E6",
  300: "#CCCCCC",
  400: "#B3B3B3",
  500: "#999999",
  600: "#7F7F7F",
  700: "#666666",
  800: "#434343",
  900: "#353535",
  950: "#202020",
};

const surgical = {
  100: "#E6FCF9",
  200: "#CCF8F3",
  300: "#99F1E7",
  400: "#4DE8D5",
  500: "#01DDC3",
  600: "#0ED0B9",
  700: "#05B6AB",
  800: "#019894",
  900: "#057177",
  950: "#015965",
};

const urine = {
  100: "#FDF7E3",
  200: "#FFF2C6",
  300: "#FFEDAB",
  400: "#FEE690",
  500: "#FFE176",
  600: "#FED545",
  700: "#FACC29",
  800: "#F3BE00",
  900: "#E7B400",
  950: "#D4A600",
};

export const colors = {
  bruise,
  blood,
  fat,
  scalpel,
  surgical,
  urine,
  black: "#000000",
  white: "#FFFFFF",
};
