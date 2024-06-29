import React from 'react';
import './Skills.css'; // Ensure you import the CSS file

const Skills = () => {
    return (
        <>
            <h1 className='text-center mt-5'>My Skills</h1>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 s">
                        <div className="d-flex">
                            <img src="/images/html.png" alt="HTML" style={{ height: "40px" }} />
                            <p className='ms-2'>Html</p>
                        </div>
                        <div className="skill-container">
                            <div className="skill-bar-1">90%</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 s">
                        <div className="d-flex">
                            <img src="/images/css.png" alt="HTML" style={{ height: "40px" }} />
                            <p className='ms-2'>Css</p>
                        </div>
                        <div className="skill-container">
                            <div className="skill-bar-2">65%</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 s">
                        <div className="d-flex">
                            <img src="/images/nodejs.png" alt="HTML" style={{ height: "40px" }} />
                            <p className='ms-2'>Node jS</p>
                        </div>
                        <div className="skill-container">
                            <div className="skill-bar-3">86%</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Skills;
