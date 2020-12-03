import React from 'react'
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';

const Component = () => {
    return (
        <div className='contact' id='contact'>
            <h1>Ready to Connect?</h1>
            <Zoom left cascade>
            <div className='icons'>
                <div onClick={() => window.open( "https://linkedin.com/in/zane-griffin", "_blank")}><FontAwesomeIcon icon={faLinkedin} size='4x'></FontAwesomeIcon></div>
                <div onClick={() => window.open( "https://github.com/zanegriffin", "_blank")}><FontAwesomeIcon icon={faGithub} size='4x'></FontAwesomeIcon></div>
                <div onClick={() => window.open( "https://twitter.com/ZaneBGriffin", "_blank")}><FontAwesomeIcon icon={faTwitter} size='4x'></FontAwesomeIcon></div>
                <div><a href={"mailto:" + 'zanegriffinstudios@gmail.com'}><FontAwesomeIcon icon={faEnvelope} size='4x'></FontAwesomeIcon></a></div>
            </div>
            </Zoom>
            <h4>Let's Talk!</h4>
            <p>Send me a message and let me know what we can collaborate on. I'm located in the Dallas/Fort Worth Metroplex area of Texas but am open to remote opportunities.</p>
            <Jump delay={2000}>
            <p>I can't wait to hear from you!</p>
            </Jump>
            <div></div>
        </div>
    )
}

export default Component