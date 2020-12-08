import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import About from '../About'
import Contact from '../Contact'
import Portfolio from '../Portfolio'
import Skills from '../Skills'
import './../../style/ModernPage.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import {HashLink} from 'react-router-hash-link'

const Component = (props) => {
    return (
        <div className='modern'>
            <Header></Header>
            <div className='intro'>
                <ScrollAnimation animateIn="fadeInRight" initiallyVisible={true} animateOnce={true}>
                <h1>ZANE GRIFFIN</h1>
                </ScrollAnimation>
                <hr></hr>
                <ScrollAnimation animateIn="fadeInLeft" initiallyVisible={true} animateOnce={true}>
                <h3>Welcome to a world full of responsive design.</h3>
                </ScrollAnimation>
                <HashLink smooth to='#portfolio'>
                    <FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon>
                </HashLink>
               
            </div>
            <Portfolio></Portfolio>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Component