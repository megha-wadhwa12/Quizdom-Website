import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { AppContext } from './ParentContext'
import winLogo from "./../assets/Win-girl.png"
import lostBoy from "./../assets/Lost-boy.png"

const Result = () => {

    const {isDark,setPage,score,setScore} = useContext(AppContext)
    const percentage = Math.floor(((score)/10)*100)


  return (
    <div>
        <Navbar />
        <div className="result-main flex">
        <div className="result-left flex">
        <h1 className='winning-message'>{score>4 && score<=7?"Good job! Your consistent scores are paying off !":score>7? "Bingo! You aced it, superstar!": "Tough break, next time's your charm!"}</h1>
        <h2 className='score-percentage'>Your score is : {percentage} %</h2>
        <h2 className='result-attempted'>You attempted <span>
          {score}</span>/10 questions correctly</h2>
        <button onClick={()=>{
          setScore(0)
          setPage("Home")
        }} className="home-button" style={{
                backgroundColor: `${isDark? "rgba(0, 0, 0, 0.850)" : "white"}`,
                color: `${isDark? "white" : "black"}`,
            }}>Home</button>
        </div>
        <div className="result-right">
            <img src= {score>4? winLogo :lostBoy} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Result

  // `${score>4? "./../src/assets/Win-girl.png" : "./../src/assets/Lost-boy.png"}`
  // Bingo! You aced it, superstar!