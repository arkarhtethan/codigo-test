import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ChatSection from './ChatSection'

const Footer = () => {
    return (
        <div className="bg-white w-full flex flex-col items-center space-y-5 mb-16">
            <ChatSection />
            {/* icon */}
            <div className="flex text-lg space-x-8">
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
            <div className="flex flex-col items-center text-sm space-y-3">
                <p>Copyright © Codigo - Mobile App Developer Singapore</p>
                <p>+65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970</p>
            </div>
        </div>
    )
}

export default Footer
