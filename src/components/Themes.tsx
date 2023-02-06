import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export const lightTheme = {
  body: "#F6F8FF",
  text: "#4B6A9B",
  backgroundMain: "#FEFEFE",
  logoColor: "#222731",
  nameColor: "#2B3442",
  statistic: "#F6F8FF",
  buttonHover: "#60ABFF",
  joinedColor: "#697C9A",
  filterIcons: "unset",
  boxShadowTop: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
  boxShadowMain: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
  imgIconChangeTheme: `${iconMoon}`,
  outline: "#697C9A",
}

export const darkTheme = {
  body: "#141D2F",
  text: "#FFFFFF",
  backgroundMain: "#1E2A47",
  logoColor: "#FFFFFF",
  nameColor: "#FFFFFF",
  statistic: "#141D2F",
  buttonHover: "#60ABFF",
  joinedColor: "#FFFFFF",
  filterIcons: "brightness(1000%)",
  boxShadowTop: "unset",
  boxShadowMain: "unset",
  imgIconChangeTheme: `${iconSun}`,
  outline: "#fff"
}