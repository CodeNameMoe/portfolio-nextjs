import React, { useEffect, useState } from 'react'
import styles from "../styles/Projects.module.css"
import ProjectCard from './ProjectCard'
import Filter from './Filter'

let ProjectData = [
    {   key: 1,
        src: "/../public/images/PROJECT.png",
        title: "Project 1",
        stack: "React.js / Express.js / PostgreSQL",
        stackId: "front"
    },
    {   key: 2,
        src: "/../public/images/PROJECT.png",
        title: "Project 2",
        stack: "React.js / Express.js / PostgreSQL",
        stackId: "front"
    },
    {   key: 3,
        src: "/../public/images/PROJECT.png",
        title: "Project 3",
        stack: "React.js / Express.js / PostgreSQL",
        stackId: "front"
    },
    {   key: 4,
        src: "/../public/images/PROJECT.png",
        title: "Project 4",
        stack: "React.js / Express.js / PostgreSQL",
        stackId: "full"
    },
    {   key: 5,
        src: "/../public/images/PROJECT.png",
        title: "Project 4",
        stack: "React.js / Express.js / PostgreSQL",
        stackId: "full"
    },
    {   key: 6,
        src: "/../public/images/PROJECT.png",
        title: "Project 4",
        stack: "React.js / Express.js / PostgreSQL",
        stackId: "back"
    }
];


function Projects() {
    const [order, setOrder] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeStack, setActiveStack] = useState("all");

    useEffect(() => {
        getProjects()

    }, [])

    function getProjects(){
        setOrder(ProjectData)
        setFiltered(ProjectData)
    };
    
  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Projects</h3>
        <Filter order={order} setFiltred={setFiltered} activeStack={activeStack} setActiveStack={setActiveStack}/>
        <div className={styles.projectsCard}>
        {filtered.map((project) => {
        return <ProjectCard key={ProjectData.key} project={project}/>
})}
        </div>

    </div>
  
)}

export default Projects