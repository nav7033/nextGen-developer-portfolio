"use client";
import Image from "next/image";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import MobileHero from "./MobileHero"
import { useDevice } from "@/hooks/useDevice";
import "./Hero.css";

export default function Hero() {
  const { isMobile, isTablet } = useDevice();

  if (isMobile || isTablet) {
    return (
      <>
        <MobileHero />
      </>
    )
  }

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h3 className="hero-greeting">
          <span className="animate-bounce">👋</span> Hi, I am
        </h3>
        <h1 className="hero-title">Naveen Kumar</h1>
        <p className="hero-subtitle">
          Full-Stack Engineer <span className="text-muted">|</span> Java & React
        </p>
        <div className="hero-social-icons">
          <a href="mailto:mandaln51@gamil.com" className="social-icon">
            <SvgIcon
              src="/icons/email.svg"
              alt="Email"
              width={24}
              height={24}
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SvgIcon
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SvgIcon
              src="/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-background-shape">
          <Image
            src="/icons/Protfolio-img.jpeg"
            alt="Hero Image"
            width={783}
            height={877}
            className="hero-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}