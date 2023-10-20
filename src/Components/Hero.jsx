import heroImg from "../assets/hero.svg"
import {FaGithubSquare, FaLinkedin, FaTwitter} from "react-icons/fa";

const Hero = () => {
    return (
        <div className={'bg-emerald-100 py-24'}>
            <div className={'align-element grid md:grid-cols-2 items-center gap-8'}>
                <article>
                    <h1 className={'text-7xl font-bold tracking-wider'}>
                        Hi, I'm <span className={'text-emerald-600'}>Joseph</span>
                    </h1>
                    <p className={'mt-4 text-3xl text-slate-700 capitalize tracking wide'}>
                        Front End Developer
                    </p>
                    <p className={'mt-2 text-lg text-slate-700 capitalize tracking-wide'}>
                        Turning ideas into interactive reality!
                    </p>
                    <div className={'flex gap-x-4 mt-4'}>
                        <a href={'#'}>
                            <FaGithubSquare className={'h-8 w-8 test-slate-500 hover:text-black duration-300'} />
                        </a>
                        <a href={'#'}>
                            <FaLinkedin className={'h-8 w-8 test-slate-500 hover:text-black duration-300'}/>
                        </a>
                        <a href={'#'}>
                            <FaTwitter className={'h-8 w-8 test-slate-500 hover:text-black duration-300'}/>
                        </a>
                    </div>
                </article>
                <article className={'hidden md:block'}>
                    <img className={'h-80 lg:h-96'} src={heroImg} alt="hero" />
                </article>
            </div>
        </div>
    )
}
export default Hero
