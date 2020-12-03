import React from 'react'
import './../style/Card.scss'

const Component = (props) => {

    const project = props.project
    console.log('prohect', project)
    return (
        <div className='card-container'>
            <div className='image' style={{backgroundImage: `url(${project.image})`}}></div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className='card-links'>
                <a target="_blank" href={project.repo}>Github</a>
                <a target="_blank" href={project.live}>Live</a>
            </div>
        </div>
    )
}

export default Component