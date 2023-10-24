import {links} from "../data.jsx";
import {FaBars, FaGithubSquare, FaLinkedin, FaTwitter} from "react-icons/fa";
import lnb from "../assets/logo/lnb.svg";
import {useGlobalContext} from "./PortfolioContext.jsx";



const Navbar = () => {
    const {toggleLinks, linksContainerRef, linksRef, linkStyles, setShowLinks,showLinks,} = useGlobalContext();
    return (
        <nav className={'bg-emerald-100 py-4'}>
            <div className={'nav-center'}>
                <div className={'nav-header'}>
                    <img src={lnb} className='logo' alt="logo-no-background" />
                    <button className={'lg:hidden md:block'} type="" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div
                    className='links-container'
                    ref={linksContainerRef}
                    style={linkStyles}
                >
                    <ul className={'links'}>
                        {links.map((link) => {
                        const {id,href,text} = link;
                            return(
                                <li key={id}>
                                    <a
                                        className={'capitalize text-lg tracking-wide hover:underline text-emerald-600'}
                                        key={id}
                                        href={href}
                                    >
                                        {text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={' flex gap-x-8 '}>
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
            </div>
        </nav>
    )
}
export default Navbar
