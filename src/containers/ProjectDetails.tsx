import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";

const Images = [
    "https://cdn.codigo.co/uploads/2021/04/PAO-1.png",
    "https://cdn.codigo.co/uploads/2021/04/PAO-2-1.png",
    "https://cdn.codigo.co/uploads/2021/04/PAO-3.png",
    "https://cdn.codigo.co/uploads/2021/04/PAO-4-1.png",
    "https://cdn.codigo.co/uploads/2021/04/PAO-5.png",
]

interface INavArrowProps {
    icon: IconDefinition;
}

const ProjectDetails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        accessibility: false,
        arrows: false,
        autoPlay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const NavArrow = ({ icon }: INavArrowProps) => (<div className="bg-red-500 w-20 h-20 rounded-full text-center pt-8 cursor-pointer">
        <FontAwesomeIcon icon={icon} />
    </div>);

    const ProjectFeature = () => (<div className="flex lg:flex-row flex-col lg:space-x-12 space-x-0 space-y-5 lg:space-y-0">
        <p className="font-bold text-lg">Key Features</p>
        <div className="lg:border-l-2 lg:border-gray-500 lg:px-4 space-y-3 lg:text-sm text-xs">
            <p>Scan to pay</p>
            <p>Transfer cash and request payment</p>
            <p>ATM QR cash withdrawal</p>
            <p>Access exclusive discounts and promotions</p>
        </div>
    </div>)

    const ProjectDescription = () => (
        <p className="w-full text-justify">
            You can now pay kopitiam uncles, merchants, peers, and dears with
            the OCBC Pay Anyone app, and you can even withdraw cash by
            scanning the QR code at OCBC’s ATMs without your card!
        </p>
    )

    return (
        <div className="mb-12 lg:px-0 px-5">
            <h1 className="lg:w-5/6 w-full mx-auto font-bold text-6xl">OCBC Pay Anyone</h1>
            <div
                className="lg:w-5/6 w-full mx-auto flex lg:flex-row flex-col"
                style={{ minHeight: "100vh" }}
            >
                <div className="lg:w-1/2 w-full flex items-center lg:order-last -order-last lg:my-0 my-20 ">
                    <div className="bg-blue-400 w-full rounded-full mx-auto" style={{ minHeight: "50vh" }}>
                        <Slider  {...settings}>
                            {Images.map((image, index) => <img key={index} src={image} alt="title" />)}
                        </Slider>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col justify-center lg:px-4">
                    <div className="flex mt-12">
                        <div className="border-2 border-gray-500 w-fit flex items-center px-4 py-2 space-x-4 border-r-0">
                            <img
                                src="https://www.codigo.co/img/ui/ico-app_store.png"
                                alt="apple"
                            />
                            <div className="lg:text-sm text-xs text-center">
                                <p className="uppercase">available on</p>
                                <p className="font-bold">App store</p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 w-fit flex items-center px-4 lg:py-2 lg:space-x-4">
                            <img
                                src="https://www.codigo.co/img/ui/ico-google_play-store.png"
                                alt="google-play"
                            />
                            <div className="lg:text-sm text-xs text-center">
                                <p className="uppercase">available on</p>
                                <p className="font-bold">App store</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-12 mt-12 w-full">
                        <ProjectDescription />
                        <ProjectFeature />
                    </div>
                </div>
            </div >
            <div className="flex justify-between mt-24 text-white lg:absolute lg:top-1/2 w-full">
                <NavArrow icon={faArrowLeft} />
                <NavArrow icon={faArrowRight} />
            </div>
        </div >
    );
};

export default ProjectDetails;
