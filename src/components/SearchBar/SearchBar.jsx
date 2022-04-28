import { useState } from "react";
import { getUserInfo } from "../../services/user";
import "./SearchBar.css";
import iconSearch from "../../assets/images/icon-search.svg";

export const SearchBar = ({onSearch}) => {
    const [value, setValue] = useState('');

    const searchUser = (event) => {
        event.preventDefault();
        getUserInfo(value).then((user) => {onSearch(user)});
    }

    return (
        <form className="search-bar" onSubmit={searchUser}>
            <img src={iconSearch} className="search-bar__icon" alt="" />
            
                <input
                    className="search-bar__input"
                    type="text"
                    placeholder="Search Github username..."
                    onChange={e => setValue(e.target.value)}
                />
                <button className="search-bar__button" type="submit">Search</button>
        </form>
    )
}