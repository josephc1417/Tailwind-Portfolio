import {projects} from '../data'
import ProjectsCard from './ProjectsCard'
import SectionTitle from "./SectionTitle.jsx";


const Projects = () => {
    return (
        <section className={'py-20 align-element' } id="projects">
            <SectionTitle text='Web Creations' />
            <div className={'py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'}>
                {projects.map((project) => {
                    const {id, img, url, github, title, text} = project;
                    return(
                        <ProjectsCard
                            key={id}
                            img={img}
                            url={url}
                            github={github}
                            title={title}
                            text={text}
                        />
                    )
                })}
            </div>
            Projects
        </section>
    )
}
export default Projects
