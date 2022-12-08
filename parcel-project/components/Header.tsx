import Link from "next/link"



export default function Header() {
    return (
        <header>
            <h1>국내.외 택배조회 시스템</h1>
            <ul>
                <li><Link href='/'>택배조회 화면</Link></li>
                <li><Link href='/'>택배조회 웹 서비스 소개</Link></li>
                <li><Link href='/'>다크 모드로 보기</Link></li>
            </ul>
        </header>
    )
}