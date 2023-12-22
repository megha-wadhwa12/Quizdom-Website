import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { AppContext } from './ParentContext';
import questions from '../Questions';
import quizImg from "./../assets/Quiz-image.png"

// Quiz component for displaying quiz questions and options
const Quiz = () => {
  // Accessing the 'isDark' state from the AppContext
  const { isDark,setPage,score,setScore } = useContext(AppContext);
  const [isHighlight,setIsHighlight] = useState(false)
  const [currQues,setCurrQues] = useState(0)

  return (
    <div>
      {/* Navigation bar component */}
      <Navbar />

      {/* Displaying page number */}
      <p className='pages'><span className='pageNo'>{currQues+1}</span> of {questions.length}</p>

      {/* Stylish container for the quiz question */}
      <div className='ques-pink' style={{
        transform: `scale(${isHighlight?'1.05':'0.97'})`,
        backgroundColor: `${isHighlight?"#61b2d5" : "#d561cafa"}`,

      }}>
        <div className='ques-white' style={{
          // fontSize: `${isHighlight? "1.1rem":"1rem"}`,
          // transform: `scale(${isHighlight?'1':'0.9'})`,
          color: `${isHighlight ? "#c82390":"#61b2d5"}`
        }}>
          {/* Actual quiz question */}
          Q. {questions[currQues].text}
        </div>
      </div>

      {/* Container for options and accompanying image */}
      <div className="options-image flex">
        {/* Options container */}
        <div className="options">
          <div onClick={()=>{
            if(questions[currQues].options[0].isCorrect){
              setScore(score+1);
            }
            if(currQues<questions.length-1){
              setCurrQues(currQues+1)
            }else{
              setCurrQues(0)
              setIsHighlight(false)
              setPage("Result")
            }
          }} className="option1">A. {questions[currQues].options[0].text}</div>
          <div onClick={()=>{
            if(questions[currQues].options[1].isCorrect){
              setScore(score+1);
            }
            if(currQues<questions.length-1){
              setCurrQues(currQues+1)
            }else{
              setCurrQues(0)
              setIsHighlight(false)
              setPage("Result")
            }
          }} className="option2">B. {questions[currQues].options[1].text}</div>
          <div onClick={()=>{
            if(questions[currQues].options[2].isCorrect){
              setScore(score+1);
            }
            if(currQues<questions.length-1){
              setCurrQues(currQues+1)
            }else{
              setCurrQues(0)
              setIsHighlight(false)
              setPage("Result")
            }
          }}className="option3">C. {questions[currQues].options[2].text}</div>
          <div onClick={()=>{
            if(questions[currQues].options[3].isCorrect){
              setScore(score+1);
            }
            if(currQues<questions.length-1){
              setCurrQues(currQues+1)
            }else{
              setCurrQues(0)
              setIsHighlight(false)
              setPage("Result")
            }
          }}className="option4">D. {questions[currQues].options[3].text}</div>
        </div>

        {/* Quiz image */}
        <img src= {quizImg} alt="" />
      </div>

      {/* Buttons for user actions */}
      <div className="buttons">
        {/* Button to highlight an option */}
        <button onClick={()=>{
          setIsHighlight(true)
        }} className="highlight">Highlight</button>

        {/* Button to remove the highlight from an option */}
        <button onClick={()=>{
          setIsHighlight(false)
        }} className="remove">Remove</button>

        {/* Button to quit the quiz */}
        <button className="quit" onClick={()=>{
          setPage("Home")
        }} style={{
          // Dynamically setting styles based on 'isDark' state
          backgroundColor: `${isDark ? "rgba(0, 0, 0, 0.850)" : "white"}`,
          color: `${isDark ? "white" : "black"}`,
        }}>
          Quit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
