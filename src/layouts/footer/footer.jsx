import styles from "./footer.module.scss";
import Logo from "../../components/logo";
import { Link } from "react-router-dom";

const SocialIcon = ({ platform, href }) => (
  <a href={href} className={styles.link} target="_blank">
    <i className={`bx bxl-${platform} ${styles.icon}`} />
  </a>
);

const socialIconsData = [
  { platform: "twitter", href: "https://twitter.com/yaz_momani" },
  { platform: "linkedin", href: "https://www.linkedin.com/in/yazeedalmomani" },
  { platform: "github", href: "https://github.com/yazeedmomani" },
  { platform: "upwork", href: "https://www.upwork.com/freelancers/~01428ceffca847ca7a" },
];

const contactData = {
  phone: "+962798697131",
  email: "yazeed.02.momani@outlook.com",
};

const pagesData = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

export default function Footer() {
  // Event handlers
  const handleClickLogo = () => window.scrollTo(0, 0);

  // JSX code
  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <Link to="/" onClick={handleClickLogo}>
        <Logo dark className={styles.logo} />
      </Link>

      {/* Social media icons */}
      <div className={styles.iconContainer}>
        {socialIconsData.map((socialIcon) => (
          <SocialIcon key={socialIcon.platform} platform={socialIcon.platform} href={socialIcon.href} />
        ))}
      </div>

      {/* Contact information */}
      <div className={styles.contactContainer}>
        <a href={`tel:${contactData.phone}`} className={styles.contact}>
          {contactData.phone}
        </a>
        <a href={`mailto:${contactData.email}`} className={styles.contact}>
          {contactData.email}
        </a>
      </div>

      {/* Pages */}
      <h2 className={styles.pagesTitle}>Pages</h2>
      <ul className={styles.pagesUl}>
        {pagesData.map(({ name, path }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>

      {/* Footer text */}
      <p className={styles.footerText}>&copy; 2023 Yazeed al-Momani</p>
    </footer>
  );
}
