import React, { useContext } from "react";
import { AppContext } from "./ParentContext";
import logo from "./../assets/Quizdom-logo.png"

const Navbar = () => {
  const { isDark, setIsDark } = useContext(AppContext);


  return (
    <nav>
      <div>
        <img
          className="logo"
          src= {logo}
          alt="logo"
        />
      </div>
      <div className="toggle-switch">
        <button style={{
                backgroundColor: `${isDark? "Black":"White"}`,
                boxShadow: `${isDark? "0px 0px 20px 5px rgba(0, 0, 0, 0.25)": "-0px 0px 20px 5px rgba(255, 255, 255, 0.25)"
            }`,
            // justifyContent: `${isDark? "flex-start": "flex-end"}`,
            // justifyContent: "center",
            // transform: `${isDark?"translate(-50%)":"translate"}`

        }}
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          <div className="sphere" style={{
                // marginLeft: `${isDark? "0vw":"2.52vw"}`,
                backgroundColor: `${isDark? "White":"Black"}`,
                // position:"absolute",
                left: `${isDark?"0%":"50%"}`

          }}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
