import SectionTitle from "./SectionTitle.jsx";
import {skills} from "../data.jsx";
import SkillsCard from "./SkillsCard.jsx";

const Skills = () => {
    return (
        <section className={'py-20 align-element'} id="skills">
            <SectionTitle text='Tech Stack' />
            <div className={'py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'}>
                {skills.map((skill) => {
                    const {id,title,icon,text} = skill;
                    return(
                        <SkillsCard
                            key={id}
                            title={title}
                            icon={icon}
                            text={text}
                        />
                    )
                })}
            </div>

        </section>
    )
}
export default Skills
