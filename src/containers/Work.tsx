import works from "../data/works.json";

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
        <div className="w-4/5 mx-auto mt-40">
            <div className="text-6xl font-extrabold space-y-4">
                <p className="tracking-wider">Here's 5% of</p>
                <p className="tracking-wider">our published work.</p>
                <p className="tracking-wide primary-color">See 100% of our power.</p>
            </div>
            <div className="flex mt-24 w-full items-end">
                <div className="grid grid-rows-4 grid-cols-3 gap-y-8 w-full">
                    {works.map((work) => (
                        <WorkItem name={work} isActive={work === "All"} />
                    ))}
                </div>
                <div className="w-1/4">
                    <p className=" text-xs font-bold mb-6">LEGEND</p>
                    <div className="flex flex-col space-y-4 border-l-2 border-black px-4">
                        <div className="flex justify-between">
                            <LegendItem image={"/ico-app.svg"} name="App" />
                            <LegendItem image={"/ico-web.svg"} name="Web" />
                        </div>
                        <div className="flex justify-between">
                            <LegendItem image={"/ico-cms.svg"} name="CMS" />
                            <LegendItem image={"/ico-uiux.svg"} name="UI/UX" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;