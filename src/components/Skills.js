import React from 'react'
import '../style/Skills.scss'
import Fade from 'react-reveal/Fade';
const Component = () => {
    return (
        <>
        <div className='skills'>
            <h1>Skillset</h1>
            <Fade bottom cascade>
            <div className='skills-container'>
                <div>
                    <p>FRONTEND</p>
                    <hr/>
                    <p>HTML5</p>
                    <hr/>
                    <p>CSS3</p>
                    <hr/>
                    <p>SASS</p>
                </div>
                <div>
                    <p>BACKEND</p>
                    <hr/>
                    <p>NODE.JS</p>
                    <hr/>
                    <p>RUBY ON RAILS</p>
                    <hr/>
                    <p>EXPRESS.JS</p>
                </div>
                <div>
                    <p>DATABASES</p>
                    <hr/>
                    <p>MONGODB</p>
                    <hr/>
                    <p>POSTGRESQL</p>
                </div>
                <div>
                    <p>DESIGN</p>
                    <hr/>
                    <p>PHOTOSHOP</p>
                    <hr/>
                    <p>ILLUSTRATOR</p>
                    <hr/>
                    <p>FIGMA</p>
                </div>
                <div>
                    <p>LIBRARIES</p>
                    <hr/>
                    <p>JQUERY</p>
                    <hr/>
                    <p>REACT</p>
                    <hr/>
                    <p>MONGOOSE</p>
                </div>
            </div>
            </Fade>
            <div className='space'></div>
        </div>
        
        </>
    )
}

export default Component