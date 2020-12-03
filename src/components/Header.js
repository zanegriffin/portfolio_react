import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import {HashLink} from 'react-router-hash-link'
const Component = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" fixed="top" >
              <Navbar.Brand href="#home">
                <Typewriter
                  options={{
                    strings: ['{web_developer}','COFFEE_ADDICT','const me = cat-lover','[softwareEngineer]'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="ml-auto">
                     <Nav.Link as={HashLink} smooth to='#top' style={{color: '#5cfaff'}}>Home</Nav.Link>
                     <Nav.Link as={HashLink} smooth to='#portfolio' style={{color: '#5cfaff'}}>Portfolio</Nav.Link>
                     <Nav.Link as={HashLink} smooth to='#about' style={{color: '#5cfaff'}}>About</Nav.Link>
                     <Nav.Link as={HashLink} smooth to='#contact' style={{color: '#5cfaff'}}>Contact</Nav.Link>
                   </Nav>
                 </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Component