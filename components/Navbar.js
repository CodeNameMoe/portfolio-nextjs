import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/ma-LOGO.png"

function Navbar() {
  return (
    <div className={styles.container}>
        <Link href="/">
            <a>
            <Image
                className={styles.logo}
                src={logo}
                alt="Logo"
                width={100}
                height={70}
            />
            </a>
        </Link>
        <ul className={styles.container}>
            <li className={styles.listItem}>
                <Link href="/about">
                    <a className={styles.a}>About</a>
                </Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/projects">
                    <a className={styles.a}>Projects</a>
                </Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/contact">
                    <a className={styles.a}>Contact</a>
                </Link>
            </li>
            <li className={`${styles.listItem} ${styles.resume}`}>
                <Link href="/resume">
                    <a className={styles.a}>Resume</a>
                </Link>
            </li>
        
        </ul>
    </div>
  )
}

export default Navbar