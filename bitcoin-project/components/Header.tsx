import Link from 'next/link';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { themeState } from './recoil/store';
import styled from 'styled-components';
import Image from 'next/image';

export default function Header() {
	const [color, setColor] = useRecoilState(themeState)
	const Btn = styled.button`
		position: fixed;
		bottom:20px;
		left:20px;
		width: 60px;
		height: 60px;
		background-color: ${(props)=> props.theme.btnbg ? props.theme.btnColor: "transparent"};
		color: ${props=>props.theme.textColor};
		padding:0;
		box-shadow: ${props=>props.theme.boxShadow}
	`
	return (
		<>
			<Btn onClick={()=>setColor(!color)}><Image src={color ? "/sun.svg" : "/night.svg"} alt="me" width="32" height="32" /></Btn>
			<header>
				<h1>Hayoung Bitcoin - Top 20 Coins Info!</h1>
			</header>
		</>
	);
}
