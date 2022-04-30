export const changeTheme = (theme) => {
    console.log(theme);
    document.documentElement.classList.toggle('dark-theme');
}