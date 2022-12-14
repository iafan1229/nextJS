import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    bgImg: string;
    btnColor: string;
    pointColor:string;
    boxShadow?:string;
    btnbg?: boolean;
  }
}