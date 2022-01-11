import { Link } from "react-router-dom";
import { Element } from "../types/type";

interface IProjectItemProps {
    name: string;
    category: string;
    image: string;
    cols: string;
    platform: string[];
}

interface IPlatFormItemProps {
    image: string;
}

const ProjectItem = ({ category, cols, image, name, platform }: IProjectItemProps) => {

    const PlatFormItem = ({ image }: IPlatFormItemProps) => (<div className="bg-white rounded-full w-fit h-fit p-2">
        <img src={image} alt="web" style={{ width: "12px" }} />
    </div>)

    const PlatFormItems = () => {
        const items: Element[] = [];
        if (platform.includes('APP')) {
            items.push(<PlatFormItem key="app" image="/ico-app.svg" />);
        }
        if (platform.includes('WEB')) {
            items.push(<PlatFormItem key="web" image="/ico-web.svg" />);
        }
        if (platform.includes('CMS')) {
            items.push(<PlatFormItem key="cms" image="/ico-cms.svg" />);
        }
        if (platform.includes('UIUX')) {
            items.push(<PlatFormItem key="uiux" image="/ico-uiux.svg" />);
        }
        return <>{[...items]}</>;
    }

    return (
        <div
            className={`bg-cover text-white h-96`}
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <Link to="/details">
                <div className="flex flex-col justify-between py-4 pl-12 h-full">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm">{category}</p>
                        <p className="font-bold text-2xl">{name}</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <PlatFormItems />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectItem;
