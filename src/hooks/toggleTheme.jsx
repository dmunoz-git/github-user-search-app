import { useEffect } from 'react';
import useLocalStorage from "use-local-storage";

const changeTheme = () => {
    document.documentElement.classList = `${localStorage.getItem('theme').replace(/['"]+/g, '')}-theme`;
}

export const useToggleTheme = (defaultTheme = 'light') => {
    const [theme, setTheme] = useLocalStorage('theme', localStorage.getItem('theme') || defaultTheme);

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        changeTheme();
    } , [theme]);

    return [
        theme,
        handleThemeChange
    ];
};