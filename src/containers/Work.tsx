import works from "../data/works.json";
import ProjectsSection from "../components/ProjectsSection";

interface IWorkItemProps {
    name: string;
    isActive?: boolean;
}

interface ILegendItemProps {
    name: string;
    image: string;
}

const Work = () => {
    const WorkItem = ({ name, isActive = false }: IWorkItemProps) => {
        return (
            <div className="flex items-center">
                {isActive && (
                    <div className="border-b-2 w-4 mr-1 mb-1 border-pink-500" />
                )}
                <p className={`${isActive ? "font-bold" : ""} text-lg`}>{name}</p>
            </div>
        );
    };

    const LegendItem = ({ image, name }: ILegendItemProps) => (
        <div className="space-x-2 flex">
            <img src={image} alt={name} style={{ width: "13px", height: "13px" }} />
            <p className="text-xs uppercase">{name}</p>
        </div>
    );

    return (
        <div className="">
            <div className="lg:w-4/5 mx-4 lg:mx-auto lg:mt-40 mt-32 mb-12">
                <div className="text-6xl font-extrabold lg:space-y-4">
                    <p className="tracking-wider">Here's 5% of</p>
                    <p className="tracking-wider">our published work.</p>
                    <p className="tracking-wide primary-color">See 100% of our power.</p>
                </div>
                <div className="lg:flex md:flex lg:flex-row md:flex-col mt-24 lg:w-full items-end hidden md:w-5/6 md:mx-auto">
                    <div className="grid grid-rows-4 grid-cols-3 lg:gap-y-8 md:gap-y-4 w-full">
                        {works.map((work, index) => (
                            <WorkItem key={index} name={work} isActive={work === "All"} />
                        ))}
                    </div>
                    <div className="lg:w-1/4 w-full md:mt-16">
                        <p className=" text-xs font-bold mb-6">LEGEND</p>
                        <div className="flex flex-col space-y-4 border-l-2 border-black px-4">
                            <div className="flex space-x-5 lg:justify-between">
                                <LegendItem image={"/ico-app.svg"} name="App" />
                                <LegendItem image={"/ico-web.svg"} name="Web" />
                            </div>
                            <div className="flex space-x-5 lg:justify-between">
                                <LegendItem image={"/ico-cms.svg"} name="CMS" />
                                <LegendItem image={"/ico-uiux.svg"} name="UI/UX" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectsSection />
        </div>
    );
};

export default Work;
