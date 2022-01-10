import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IChatItemProps {
    title: string;
    description: string;
}
const ChatSection = () => {
    const ChatItem = ({ description, title }: IChatItemProps) => {
        return <div className="cursor-pointer px-12">
            <div className="flex space-x-4 justify-between items-center">
                <p className="font-bold text-2xl mb-2">
                    {title}
                </p>
                <FontAwesomeIcon icon={faArrowRight} className="text-sm mb-3 primary-color" />
            </div>
            <p className="text-sm">{description}</p>
        </div>
    }

    const Separator = () => <div className="lg:border-r-2 border-b-2 border-gray-200 pr-2">

    </div>

    return (
        <div className="lg:my-16 mb-12 w-full">
            <h1 className="primary-color font-bold text-4xl text-center lg:mb-28 lg:my-0 my-12">Let's have a chat</h1>
            <div className="flex lg:flex-row flex-col lg:space-x-12 space-x-0 space-y-4 lg:space-y-0">
                <ChatItem title="Build" description="Help you build something" />
                <Separator />
                <ChatItem title="Co-incubate" description="Co-incubate an idea together" />
                <Separator />
                <ChatItem title="Customise" description="Customise a solution for your business" />
                <Separator />
                <ChatItem title="Organise" description="Organise learning sessions with us" />
            </div>
        </div>
    )
}

export default ChatSection
