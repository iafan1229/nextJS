import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  bgImg: "transparent",
  textColor: "black",
  btnColor: "#ddd",
  pointColor: "navy",
  boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
};

export const darkTheme: DefaultTheme = {
  bgColor: "#345",
	bgImg: "linear-gradient(to bottom, #0009, transparent)",
  textColor: "white",
  btnColor: "#ffffff20",
  pointColor: "#f1f18f;",
  btnbg: true
};