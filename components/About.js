import React from "react";
import styles from "../styles/About.module.css";
import profile from "../public/images/profile.png";
import Image from "next/image";
import {
  SiJavascript,
  SiCss3,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiHeroku,
  SiNetlify,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function About() {
  return (
    <div>
      <section className={styles.about}>
        <div className={styles.left}>
          <h3>About Me</h3>
          <p>
            I am a highly motivated Full Stack developer with a background in
            SEO, ecommerce and digital marketing. Software development gives me
            the chance to impact the environment around me by solving real world
            problems through code.
          </p>
          <p>
            I've dedicated my time and effort into changing career directions
            into tech as the industry really excites me as well as the endless
            collaborative possibilities.
          </p>
          <div className={styles.techStack}>
            <div className={styles.iconsList}>
              <ImHtmlFive className={styles.techIcons} />
              <SiCss3 className={styles.techIcons} />
              <SiJavascript className={styles.techIcons} />
              <FaReact className={styles.techIcons} />
              <SiNextdotjs className={styles.techIcons} />
              <SiNodedotjs className={styles.techIcons} />
              <SiExpress className={styles.techIcons} />
              <SiPostgresql className={styles.techIcons} />
              <FaGitAlt className={styles.techIcons} />
              <BsGithub className={styles.techIcons} />
              <SiJest className={styles.techIcons} />
              <SiCypress className={styles.techIcons} />
              <SiHeroku className={styles.techIcons} />
              <SiNetlify className={styles.techIcons} />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.profile}
            src={profile}
            alt="profile"
            width={900}
            height={1200}
          />
        </div>
      </section>
    </div>
  );
}

export default About;
