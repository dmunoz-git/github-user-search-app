import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import { useToggleTheme } from '../../hooks/toggleTheme';
import "./ThemeSwitch.css";

export const ThemeSwitch = () => {
    const [theme, handleThemeChange] = useToggleTheme();

    return (
        <div className="switch">
            <span className='switch__label'>{(theme === 'light') ? "dark" : "light"}</span>
            <img  className='switch__icon' src={(theme === 'light') ? iconMoon : iconSun}  onClick={handleThemeChange} alt="Choose light or dark theme" />
        </div>
    );
};

