import React from 'react';
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import "./ThemeSwitch.css";

export const ThemeSwitch = () => {
    const [isLight, setIsLight] = React.useState(true);

    const toggleTheme = () => {
        setIsLight(!isLight);
    };

    return (
        <div className={isLight ? "switch" : "switch switch--dark"}>
            <span className='switch__label'>{isLight ? "dark" : "light"}</span>
            <img  className='switch__icon' src={isLight ? iconMoon : iconSun}  onClick={toggleTheme} alt="Choose light or dark theme" />
        </div>
    );
};


