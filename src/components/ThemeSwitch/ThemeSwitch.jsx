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
    };

    return (
        <div className={(theme === 'light') ? "switch" : "switch switch--dark"}>
            <span className='switch__label'>{(theme === 'light') ? "dark" : "light"}</span>
            <img  className='switch__icon' src={(theme === 'light') ? iconMoon : iconSun}  onClick={toggleTheme} alt="Choose light or dark theme" />
        </div>
    );
};


