import { useState, useContext, useEffect } from "react";
import { getUserInfo } from "../../services/user";
import { UserContext } from "../../context/UserContext";
import "./SearchBar.css";
import iconSearch from "../../assets/images/icon-search.svg";

export const SearchBar = () => {
    const userContext = useContext(UserContext);
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    
    useEffect(() => {
        getUserInfo("dmunoz-git").then((user) => userContext.setUser(user)).catch((error) => console.error(error));
    }, []);

    const searchUser = (event) => {
        event.preventDefault();
        if(value){
            getUserInfo(value).then((user) => {
                if(user.message && user.message === 'Not Found'){
                    setError(true);
                }else {
                    if(error) setError(false);
                    userContext.setUser(user);
                }
                
            }).catch((error) => console.error(error));
        }
        
    }

    return (
        <form className="search-bar" onSubmit={searchUser}>
            <img src={iconSearch} className="search-bar__icon" alt="" />
            
                <input
                    className="search-bar__input"
                    type="text"
                    placeholder="Search Github username..."
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
                { error && <span className="search-bar__404">No results</span>}
                <button className="search-bar__button" type="submit">Search</button>
        </form>
    )
}