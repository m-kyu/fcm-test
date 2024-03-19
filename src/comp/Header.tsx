"use client"
import Link from "next/link";

function Header() {
    
    return (
        <div>
            <div style={{position:'fixed',top:0,left:0}}>
            <Link href="/" >HOME</Link>
            <Link href="/about" >ABOUT</Link>
            <Link href="/company" >COMPANY</Link>
            </div>
        </div>
    );
}

export default Header;