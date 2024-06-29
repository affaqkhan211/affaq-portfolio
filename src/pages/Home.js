import React, { useEffect } from 'react';
import Projects from './Projects';
import "./Home.css";
import Skills from './Skills';

const Home = () => {
  useEffect(() => {
    const textElement = document.querySelector('.typing-text');
    if (textElement) {
      textElement.classList.add('start-typing');
    }

    const imageElement = document.querySelector('.slide-in-image');
    if (imageElement) {
      imageElement.classList.add('slide-in');
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1 className="typing-text">I am Affaq Khan</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, laboriosam nobis soluta neque reprehenderit eum repellat tenetur eos numquam incidunt.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <img className="slide-in-image" style={{ height: "400px", width: "400px" }} src="/images/profile.jfif" alt="Profile" />
          </div>
        </div>
      </div>

      <Projects />

      <Skills/>
    </>
  );
}

export default Home;
