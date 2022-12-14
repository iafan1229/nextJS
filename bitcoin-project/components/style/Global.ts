import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
		body{
			background-color: ${(props)=>props.theme.bgColor};
			background-image: ${props=>props.theme.bgImg};
			color:${props=>props.theme.textColor};
		}
		a{
			color:${props=>props.theme.textColor};
		}
		.coins {
			li {
				box-shadow: ${props=>props.theme.boxShadow}
			}
		}
	`

export default Global;