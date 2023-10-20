import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className={'bg-white py-20'} id={'about'}>
            {/* Two Column Layout (custom class*/}
            <div className={'align-element grid md:grid-cols-2 items-center gap-16'}>
                <img src={aboutSvg} alt={'about'} className={'w-full h-64'}/>
                <article>
                    <SectionTitle text='Code and Coffee' />
                    <p className={'mt-8  text-slate-600 tracking-wide'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti,
                        dicta fugit itaque labore laboriosam laborum maiores maxime minima nesciunt nihil
                        numquam optio perspiciatis placeat sed sequi vel veniam, voluptatem!
                    </p>
                </article>
            </div>
        </section>
    )
}
export default About
