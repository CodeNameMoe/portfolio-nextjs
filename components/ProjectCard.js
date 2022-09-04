import React from 'react'
import Image from 'next/image'
import styles from "../styles/ProjectCard.module.css"
import projectimg from '../public/images/PROJECT.png'
function ProjectCard({project}) {
  return (
    <div>
        <Image
            className={styles.image}
            src={project.src}
            alt="project image"
            width={1200}
            height={1000}
        />
        <h4>{project.title}</h4>
        <h5>{project.stack}</h5>
    </div>
  )
}

export default ProjectCard