export const changeTheme = (theme) => {
        document.documentElement.classList = `${theme.replace(/['"]+/g, '')}-theme`;
}