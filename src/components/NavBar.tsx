import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

    const NavItem = ({ title, isActive = false }: INavItemProps) => <div className="hover:border-black border-b-2 border-white cursor-pointer">{title}</div>

    return (
        <div className="my-8 lg:mx-12 lg:block hidden">
            <div className="flex justify-between items-center bg-red-">
                <div>
                    {!isDetails && <img src="/logo-codigo-red.svg" alt="Codigo logo" width="145" height="19" />}
                    {isDetails && <Link to="/" className="flex space-x-4 items-center">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-xs primary-color" />
                        <p>Back to Work</p>
                    </Link>}
                </div>
                <div className="flex items-center space-x-12 pt-2">
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
            </div>
        </div>
    )
}

export default NavBar
