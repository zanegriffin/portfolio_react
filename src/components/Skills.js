import React from 'react'
import '../style/Skills.scss'
import Slide from 'react-reveal/Slide';
const Component = () => {
    return (
        <>
        <div className='skills'>
            <h1>Current Skillset</h1>
            <Slide left cascade>
            <div>
                <p><span>LANGUAGES:</span> HTML5, CSS3, NODE.JS, RUBY</p>
                <p><span>LIBRARIES:</span> JQUERY, REACT, MONGOOSE</p>
                <p><span>FRAMEWORKS:</span> EXPRESS, BOOTSTRAP, SCSS</p>
                <p><span>DATABASES:</span> POSTGRESQL, MONGODB</p>
                <p><span>DESIGN TOOLS:</span> PHOTOSHOP, ILLUSTRATOR</p>
            </div>
            </Slide>
            <div></div>
        </div>
        
        </>
    )
}

export default Component