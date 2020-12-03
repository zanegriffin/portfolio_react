import React from 'react'
import '../style/About.scss'
import Flip from 'react-reveal/Flip';
import Typewriter from 'typewriter-effect';

const Component = () => {
    return (
        <div className='about' id='about'>
            <h1>Who Am I?</h1>
            <div className='portrait'/>
            <h3>Zane Griffin</h3>
            <p>I’m a <Flip left delay={1000}>baker</Flip> turned <Flip left delay={2000}>coder</Flip> with a persistent and stubborn personality looking to make beautiful websites full of responsive features.</p>
            <p>As a <Typewriter style={{display: 'inline'}}
                      options={{
                        strings: ['web developer','designer','software engineer'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                I continuously wish to learn so I can better implement designs and interactivity. My persistent personality pushes me to sharpen my skills and hone my craftsmanship so that I can create unique applications.</p>
        </div>
    )
}

export default Component