import React, { useContext } from 'react';
import Home from './Components/Home';
import { AppContext } from './Components/ParentContext';
import Quiz from './Components/Quiz.jsx';
import Result from './Components/Result.jsx';

// Main App component responsible for rendering different sections of the application
const App = () => {
  // Accessing the 'isDark' state from the AppContext
  const { isDark,page } = useContext(AppContext);

  return (
    <div style={{
      // Dynamically setting background color based on 'isDark' state
      backgroundColor: `${isDark ? "White" : "Black"}`,
      width: "100%",
      height: "100vh"
    }}>

    {page=="Home"? <Home />:page=="Quiz"?<Quiz />: <Result />}

    </div>
  );
}

export default App;
