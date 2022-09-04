import React from 'react'
import styles from "../styles/Projects.module.css"
import ProjectCard from './ProjectCard'
import Filter from './Filter'




function Projects() {
    let ProjectData = [
        {   id: 1,
            src: "/../public/images/PROJECT.png",
            title: "Project 1",
            stack: "React.js / Express.js / PostgreSQL"
        },
        {   id: 2,
            src: "/../public/images/PROJECT.png",
            title: "Project 2",
            stack: "React.js / Express.js / PostgreSQL"
        },
        {   id: 3,
            src: "/../public/images/PROJECT.png",
            title: "Project 3",
            stack: "React.js / Express.js / PostgreSQL"
        },
        {   id: 4,
            src: "/../public/images/PROJECT.png",
            title: "Project 4",
            stack: "React.js / Express.js / PostgreSQL"
        },
        {   id: 5,
            src: "/../public/images/PROJECT.png",
            title: "Project 4",
            stack: "React.js / Express.js / PostgreSQL"
        },
        {   id: 6,
            src: "/../public/images/PROJECT.png",
            title: "Project 4",
            stack: "React.js / Express.js / PostgreSQL"
        }
    ]

  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Projects</h3>
        <Filter />
        <div className={styles.projectsCard}>
        {ProjectData.map(project => {
            return <ProjectCard key={ProjectData.id} project={project}/>
        })}
        </div>

    </div>
  )
}

export default Projects