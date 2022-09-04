import React from "react";
import styles from "../styles/Intro.module.css";
import Typewriter from "typewriter-effect";
function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Hi, my name is</h3>
        <h2>
          <span className={styles.fname}>Mohamed Ali.</span>
        </h2>
        {/* <h2>A</h2> */}
        <h2 className={styles.type}>
          <Typewriter
            options={{
              strings: ["A Front-End Developer", " A Full-Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p>My <span>passion</span> is to learn and grow in the software development industry by exploring new technologies, <span>solving problems</span> and adding value to the world, one line of <span>code</span> at a time.</p>
      </div>
      
    </div>
  );
}

export default Intro;
