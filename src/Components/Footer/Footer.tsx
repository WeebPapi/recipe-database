import "./Footer.css"
import { FaGithub, FaSquareUpwork, FaLinkedin } from "react-icons/fa6"
import { SiFiverr } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="footer-heading">Project By Alex's Web Development</h1>
        <p className="footer-subtitle">
          View my other projects and works and follow me here
        </p>
      </div>
      <div className="footer-links">
        <a
          target="blank"
          href="https://www.fiverr.com/alexmakespages?up_rollout=true"
        >
          <SiFiverr fill="white" />
        </a>
        <a
          target="blank"
          href="https://www.upwork.com/freelancers/~019e9b8790cba48ff1"
        >
          <FaSquareUpwork fill="white" />
        </a>
        <a target="blank" href="https://github.com/WeebPapi">
          <FaGithub fill="white" />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/aleksandre-kapanadze-034681212/"
        >
          <FaLinkedin fill="white" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
