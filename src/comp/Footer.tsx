"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function Footer() {
      
    return (
        <div>
            <div style={{position:'fixed',bottom:0,left:0}}>
            <Link href="/" >HOME</Link>
            <Link href="/about" >ABOUT</Link>
            <Link href="/company" >COMPANY</Link>
            </div>
        </div>
    );
}

export default Footer;