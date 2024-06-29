import React from 'react'
import projects from '../data'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <h1 className='text-center'>Projects</h1>
            <div className="container">
                <div className="row">
                    {
                        projects.map((project) => (
                            <>
                                <div className="mt-4 mb-4 col-lg-4 col-md-4 col-sm-12 text-center">
                                    <Link to={`${project.link}`}>

                                        <img src={project.image} alt="" style={{ width: "300px", height: "300px" }} />
                                        <button className='mt-5 btn btn-success'>Demo</button>
                                    </Link>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>



        </>
    )
}

export default Projects