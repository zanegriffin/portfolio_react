import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import Fade from 'react-reveal/Fade';

const Component = () => {

    const [projects, setProjects] = useState([])
    const URL = process.env.REACT_APP_URL;
    console.log(URL)

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = () => {
        axios.get(URL)
        .then(res => {
            console.log(res.data.feed.entry)
            const data = res.data.feed.entry.map(project => {
                return{
                    title: project.gsx$title.$t, 
                    image: project.gsx$image.$t,
                    description: project.gsx$description.$t,
                    repo: project.gsx$repo.$t,
                    live: project.gsx$live.$t
                }
            })
            setProjects(data)
        })
    }

    const renderProjects = projects.map((project, index) => {
        return (
            <>
            <Fade left delay={index + "00"}>
            <Card project={project}/>
            </Fade>
            </>
        )
    })

    return (
        <div id='portfolio'>
            <h1>Portfolio</h1>
            <div className='port-container'>
            {renderProjects}
            </div>
        </div>
    )
}

export default Component