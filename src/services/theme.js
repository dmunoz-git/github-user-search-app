export const changeTheme = () => {
        document.documentElement.classList = `${localStorage.getItem('theme').replace(/['"]+/g, '')}-theme`;
}