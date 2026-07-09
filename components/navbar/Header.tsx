"use client";

import Link from "next/link";
import "./Header.css";
import { useDevice } from "@/hooks/useDevice";
import MobileHeader from "./MobileHeader"
export default function Header() {
  const { isMobile, isTablet } = useDevice();


  if (isMobile || isTablet) {
    return (
      <>
        < MobileHeader />
      </>
    )
  }

  return (
    <header className="header">
      <nav className="nav">
        <Link href="#portfolio" className="navLink">
          Portfolio
        </Link>

        <Link href="#about" className="navLink">
          About Me
        </Link>

        <Link href="#skills" className="navLink">
          Skills
        </Link>

        <Link href="#contact" className="contactBtn">
          CONTACT ME
        </Link>
      </nav>
    </header>
  );
}