import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState('');

    return (
        <div className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Search Github username..."
                onChange={e => setValue(e.target.value)}
            />
            <button className="search-bar__button">Search</button>
        </div>
    )
}