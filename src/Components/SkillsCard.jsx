

const SkillsCard = ({title,icon,text}) => {
    return (
        <article>
            <span>{icon}</span>
            <h2 className={'mt-6 font-bold'}>
                {title}
            </h2>
            <p className={'mt-2 text-slate-500'}>{text}</p>
        </article>
    )
}
export default SkillsCard
