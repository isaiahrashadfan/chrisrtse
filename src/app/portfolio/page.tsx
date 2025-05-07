import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import '../../../public/styles.css';


export default function Portfolio() {
  return (
    <main className="main-container">
    
      <div className="hero-section"> 
        <h1 className="portfolio-title">PORTFOLIO</h1>
        <video playsInline src="/videos/computer science.mp4" autoPlay loop muted preload='auto' className="video-background"></video>
        <div className="video-overlay"></div>
      </div>

      <div className="content-section">
        <h1 className="projects-title">PROJECTS</h1>

        <div className="projects-group">
          <div className="project-item">
            <div className="project-content">
              <h2 className="project-title">PERSONAL WEBSITE</h2>
              <p className="project-description">
                A website used to display public information about Chris Tse and display the developer's artistic expression. Includes the various facets of the developer.
              </p>
            </div>
            <div className="project-links">
              <div><Link target="_blank" href="https://www.chrisrtse.com/">Website </Link><TbExternalLink/></div>
              <div><Link target="_blank" href="https://github.com/isaiahrashadfan/chrisrtse">Github </Link><TbExternalLink/></div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-content">
              <h2 className="project-title">SMS SPAM TEXT IDENTIFIER</h2>
              <p className="project-description">
                A webtool utilizing OpenAI to determine whether or not a received text message is likely a spam message.
              </p>
            </div>
            <div className="project-links">
              <div><Link target="_blank" href="https://github.com/isaiahrashadfan/sms-scam-identifier">Github </Link><TbExternalLink/></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}