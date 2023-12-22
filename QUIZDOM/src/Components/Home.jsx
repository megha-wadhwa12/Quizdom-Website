import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AppContext } from './ParentContext';
import homeImg from "./../assets/Home-side-image.png"
import homeImgDark from "./../assets/Home-side-image-black.png"


// Home component for the main landing page
const Home = () => {
  // Accessing the 'isDark' state from the AppContext
  const { isDark,setPage } = useContext(AppContext);

  return (
    <div>
      {/* Navigation bar component */}
      <Navbar />

      {/* Main content of the home page */}
      <div className="home-main flex">
        {/* Left section with introductory text and start button */}
        <div className="home-main-left flex">
          <p className='home-main-left-text-1'>
            {/* First line of introductory text */}
            Ready for the ultimate quiz challenge?
          </p>
          <p className='home-main-left-text-2'>
            {/* Second line of introductory text */}
            Prove your knowledge – let the quizzing begin!
          </p>
          <button className='start' onClick={()=>{
            setPage("Quiz")
          }}>
            {/* Button to start the quiz */}
            Start the Quiz
          </button>
        </div>

        {/* Right section with an image, dynamically changed based on 'isDark' state */}
        <img
          className="home-main-right"
          src={isDark ? homeImg : homeImgDark}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
