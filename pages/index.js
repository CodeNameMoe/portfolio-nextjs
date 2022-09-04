import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import About from "../components/About"
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
  
  <div>
    <Head>
      <title>Mohamed Ali | Full-Stack Developer</title>
      <meta name="description" content="Full-Stack developer portfolio"  />
    </Head>
    <Intro/>
    <About/>

  
  </div>
  )
}
