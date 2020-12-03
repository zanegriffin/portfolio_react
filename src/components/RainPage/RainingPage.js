import React, {useState} from 'react'
import Rain from './Rain'
import City from './City'
import City2 from './City2'
import Alert from 'react-bootstrap/Alert'
import Button from  'react-bootstrap/Button'
import './../../style/RainingPage.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import Header from '../Header'
import Footer from '../Footer'
import About from '../About'
import Contact from '../Contact'
import Portfolio from '../Portfolio'
import Skills from '../Skills'
import {Route} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'


const Component = (props) => {
    
      
    return (
      <>
        <div className='raining-page'>
        <Header></Header>
            <Rain/>
            <ScrollAnimation duration={5} animateIn='fadeIn' initiallyVisible={true} animateOnce={true}>
                <h1><span>Z</span>an<span>e</span>_Gr<span>i</span>ffi<span>n</span></h1>
                <City2/>
                <City />
            </ScrollAnimation>
            <ScrollAnimation duration={3} animateIn='fadeIn' animateOnce={true}>
            <h3>Welcome to a world full of responsive design.</h3>
            </ScrollAnimation>
            <ScrollAnimation duration={2} animateIn='fadeIn' animateOnce={true}>
            <Portfolio></Portfolio>
            </ScrollAnimation>
            <ScrollAnimation duration={2} animateIn='fadeIn' animateOnce={true}>
            <About></About>
            </ScrollAnimation>
            <ScrollAnimation duration={2} animateIn='fadeIn' animateOnce={true}>
            <Skills></Skills>
            </ScrollAnimation>
            <ScrollAnimation duration={2} animateIn='fadeIn' animateOnce={true}>
            <Contact></Contact>
            </ScrollAnimation>
            <Footer></Footer>
        </div>
        </>
    )
}

export default Component