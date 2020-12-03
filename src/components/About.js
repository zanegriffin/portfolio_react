import React, {useState} from 'react'
import '../style/About.scss'
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';

const Component = () => {

    const [clicked, setClicked] = useState('')
    const [clicked2, setClicked2] = useState('')
    const [clicked3, setClicked3] = useState('')
    let flip = false
    let flip2 = false
    let flip3 = false
    const handleClick = () => {
        flip = !flip
        // console.log('click', flip)/
        if(flip){
            setClicked('flip')
        } else if(!flip){
            setClicked('')
        }
        
    }
    const handleClick2 = () => {
        flip2 = !flip2
        // console.log('click', flip2)
        if(flip2){
            setClicked2('flip')
        } else if(!flip2){
            setClicked2('')
        }
    }
    const handleClick3 = () => {
        flip3 = !flip3

        if(flip3){
            setClicked3('flip')
        } else if(!flip3){
            setClicked3('')
        }
    }
    

    return (
        <div className='about' id='about'>
            <h1>Who Am I?</h1>
            <div className='about-container'>
                <Fade left big cascade delay={1000}>
                <div className='flip-container'>
                    <div className={'flip-card ' + clicked3}  onClick={() => handleClick3()}>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front' style={{backgroundImage: 'url(https://res.cloudinary.com/feedmejoy/image/upload/v1607031833/composite_7_bkeh1p.jpg)'}}>
                                <p>ZANE GRIFFIN</p>
                            </div>
                            <div className='flip-card-back' onClick={() => handleClick3()}>
                            <div className='portrait'/>
                            </div>
                        </div>
                    </div>
                    <div className={'flip-card ' + clicked}  onClick={() => handleClick()}>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front' style={{backgroundImage: 'url(https://res.cloudinary.com/feedmejoy/image/upload/v1607028349/ayodeji-alabi-2AsNYOE75vQ-unsplash_ypn6ky.jpg)'}}>
                                <p>IDENTITY</p>
                            </div>
                            <div className='flip-card-back' onClick={() => handleClick()}>
                            <p>I’m a baker turned coder with a persistent and stubborn personality looking to make beautiful websites full of responsive features.</p>
                            </div>
                        </div>
                    </div>
                    <div className={'flip-card ' + clicked2} onClick={() => handleClick2()}>
                        <div className='flip-card-inner' id=''>
                            <div className='flip-card-front' style={{backgroundImage: 'url(https://res.cloudinary.com/feedmejoy/image/upload/v1607028346/safar-safarov-MSN8TFhJ0is-unsplash_klu6zb.jpg)'}}>
                                <p>AMBITION</p>
                            </div>  
                            <div className='flip-card-back' onClick={() => handleClick2()}>
                            <p>As a <Typewriter style={{display: 'inline'}}
                              options={{
                                strings: ['web developer','designer','software engineer'],
                                autoStart: true,
                                loop: true,
                              }}
                            />
                        I continuously wish to learn so I can better implement designs and interactivity. My persistent personality pushes me to sharpen my skills and hone my craftsmanship so that I can create unique applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Component