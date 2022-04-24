const API_URL = "https://api.github.com"

export const getUserInfo = async (username) => {
    try{
        const userInfo = await fetch(`${API_URL}/users/${username}`);
        return userInfo.json();
    }catch(error){
        console.error(error);
    }
}