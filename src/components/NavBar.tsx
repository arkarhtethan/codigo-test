interface INavItemProps {
    title: string;
    isActive?: boolean;
}

const NavBar = () => {
    const NavItem = ({ title, isActive = false }: INavItemProps) => <div className="hover:border-black border-b-2 border-white cursor-pointer">{title}</div>
    return (
        <div className="my-8 mx-12">
            <div className="flex justify-between items-center bg-red-">
                <div>
                    <img src="/logo-codigo-red.svg" alt="Codigo logo" width="145" height="19" />
                </div>
                <div className="flex items-center space-x-12 pt-2">
                    <NavItem title="Work" isActive={true} />
                    <NavItem title="Solutions" />
                    <NavItem title="Services" />
                    <NavItem title="About Us" />
                    <NavItem title="Blog" />
                    <div className="bg-gray-800 text-white rounded-full px-4 py-4">Request a quote</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
