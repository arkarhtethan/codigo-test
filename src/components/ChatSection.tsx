import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IChatItemProps {
    title: string;
    description: string;
}
const ChatSection = () => {
    const ChatItem = ({ description, title }: IChatItemProps) => {
        return <div className="cursor-pointer">
            <div className="flex space-x-4 items-center">
                <p className="font-bold text-2xl mb-2">
                    {title}
                </p>
                <FontAwesomeIcon icon={faArrowRight} className="text-sm mb-3 primary-color" />
            </div>
            <p className="text-sm">{description}</p>
        </div>
    }

    const VerticalSeparator = () => <div className="border-r-2 border-gray-200 pr-2">

    </div>

    return (
        <div className="my-16">
            <h1 className="primary-color font-bold text-4xl text-center mb-28">Let's have a chat</h1>
            <div className="flex space-x-12">
                <ChatItem title="Build" description="Help you build something" />
                <VerticalSeparator />
                <ChatItem title="Co-incubate" description="Co-incubate an idea together" />
                <VerticalSeparator />
                <ChatItem title="Customise" description="Customise a solution for your business" />
                <VerticalSeparator />
                <ChatItem title="Organise" description="Organise learning sessions with us" />
            </div>
        </div>
    )
}

export default ChatSection
