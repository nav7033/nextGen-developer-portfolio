import React from 'react';
import './MobileLayout.css';
import SvgIcon from "@/components/SvgIcon/SvgIcon";

const MobileHero = () => {
    return (
        <div className="mobile-bg-container">
            <div className="mobile-content-wrapper">
                <header className="hero-header">
                    <p className="hero-intro"><span className="animate-bounce">👋</span> Hi, I am Naveen Kumar</p>
                    <h3 className="mobile-hero-title">Full-Stack Engineer <span>|</span> Java & React</h3>
                    <p className="hero-subtext">
                        Building robust backend architectures with Java & Spring Boot, combined with modern, high-performance user interfaces in React.js.
                    </p>
                    <div className="hero-separator"></div>
                    <div className="hero-socials">
                        <a href="mailto:your-email@example.com" className="social-icon icon-mail" aria-label="Mail">
                            <SvgIcon
                                src="/icons/email.svg"
                                alt="Email"
                                width={24}
                                height={24}
                            />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-icon icon-github" aria-label="GitHub">

                            <SvgIcon
                                src="/icons/github.svg"
                                alt="GitHub"
                                width={24}
                                height={24}
                            />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-icon icon-linkedin" aria-label="LinkedIn">

                            <SvgIcon
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default MobileHero;