import { atom } from "recoil";
import { ThemeProvider } from 'styled-components';


export const themeState = atom({
  key: "theme",
  default: true,
});