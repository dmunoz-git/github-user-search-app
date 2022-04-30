import React from 'react';
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import useLocalStorage from "use-local-storage";
import {changeTheme} from "../../services/theme";
import "./ThemeSwitch.css";

export const ThemeSwitch = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    const toggleTheme = async () => {
        await setTheme((theme === 'light') ? 'dark' : 'light');
        changeTheme(theme);

        console.log(theme);
    };

    return (
        <div className="switch">
            <span className='switch__label'>{(theme === 'light') ? "light" : "dark"}</span>
            <img  className='switch__icon' src={(theme === 'light') ? iconSun : iconMoon}  onClick={toggleTheme} alt="Choose light or dark theme" />
        </div>
    );
};


