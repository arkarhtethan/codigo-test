import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAlignJustify, faArrowLeft, faList, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import RequestButton from "../shared/RequestButton"

interface INavItemProps {
    title: string;
    isActive?: boolean;
}

const NavBar = () => {
    const location = useLocation();
    const isDetails = location.pathname.includes('details');
    const [showNav, setShowNav] = useState(true);

    const NavItem = ({ title, isActive = false }: INavItemProps) => <div className="hover:border-black border-b-2 border-white cursor-pointer">{title}</div>
    if (showNav) {
        return <div className="lg:hidden absolute top-0 rounded-bl-full z-10" style={{ height: "100vh", width: "100vw", backgroundColor: "#3A2837" }}>
            <div className="relative flex flex-col justify-center items-center h-full px-8">
                <div className="text-white absolute top-12 right-12 cursor-pointer" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faTimes} className="lg:text-3xl text-xl" />
                </div>
                <div className="flex flex-col md:h-3/4 space-y-20" >
                    <div className="md:space-y-12 space-y-5 text-white font-bold md:text-2xl text-center w-full py-4">
                        {!isDetails && <>
                            <p>Work</p>
                            <p>Solutions</p>
                            <p>Services</p>
                            <p>About Us</p>
                            <p>Blog</p>
                        </>
                        }
                        <p>Request a quote</p>
                        <p>Let's chat</p>
                    </div>
                    <div className="flex text-sm md:text-lg space-x-8 text-white">
                        <a href="https://www.facebook.com/codigo.co/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com/CodigoApps" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/hellocodigo/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/company/codigo-pte-ltd" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>
        </div>;
    }
    return (
        <div className={`lg:mx-12 my-8 mx-6`}>
            <div className="flex justify-between items-center">
                <div>
                    {!isDetails && <img src="/logo-codigo-red.svg" alt="Codigo logo" width="145" height="19" />}
                    {isDetails && <Link to="/" className="flex space-x-4 items-center">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-xs primary-color" />
                        <p>Back to Work</p>
                    </Link>}
                </div>
                <div className="lg:flex items-center space-x-12 pt-2 hidden">
                    {!isDetails && <>
                        <NavItem title="Work" isActive={true} />
                        <NavItem title="Solutions" />
                        <NavItem title="Services" />
                        <NavItem title="About Us" />
                        <NavItem title="Blog" />
                    </>
                    }
                    <RequestButton />
                </div>
                <div className="lg:hidden bg-gray-800 text-white rounded-full px-4 py-3 pt-4" onClick={() => setShowNav(true)}>
                    <FontAwesomeIcon icon={faAlignJustify} />
                </div>
            </div>

        </div>
    )
}

export default NavBar
