import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-xl lg:text-lg footer justify-center lg:justify-around mt-5 py-10 bg-base-200   text-center">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dbeafe"
          fill-opacity="1"
          d="M0,256L20,245.3C40,235,80,213,120,181.3C160,149,200,107,240,128C280,149,320,235,360,250.7C400,267,440,213,480,192C520,171,560,181,600,176C640,171,680,149,720,149.3C760,149,800,171,840,192C880,213,920,235,960,240C1000,245,1040,235,1080,208C1120,181,1160,139,1200,144C1240,149,1280,203,1320,213.3C1360,224,1400,192,1420,176L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg> */}
      <nav>
        <header className="footer-title">Quick Links</header>
        <Link className="link link-hover">Notice</Link>
        <Link to="/academic/routine" className="link link-hover">
          Routine
        </Link>
        <Link to="/academic/notes" className="link link-hover">
          Notes
        </Link>
        <Link to="/academic/tutorial" className="link link-hover">
          Tutorial
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Info</header>
        <Link to="/students/profileCard" className="link link-hover">
          Profile
        </Link>
        <Link to="/students/idCard" className="link link-hover">
          ID Card
        </Link>
        <Link to="/faculty" className="link link-hover">
          Faculty
        </Link>
        <Link to="features">Feature Logs</Link>
      </nav>
      <nav>
        <header className="footer-title">Developer's Social</header>
        <div className="flex justify-around gap-4 text-4xl">
          <a href="https://www.facebook.com/MDahsanulhoqueabir">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/ahsanulhoqueabir/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ahsanulhoqueabir">
            <FaGithub />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
