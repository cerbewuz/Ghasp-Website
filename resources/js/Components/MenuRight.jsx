import { router } from "@inertiajs/react";
import { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
export default function MenuRight({ items }) {
    const [inputSearch, setInputSearch] = useState(false);
    const navigate = () => {
        router.visit("/login");
    };
    return (
        <>
            <div className="menu-container">
                <div className="menu-container-inside">
                    <div
                        className="search-container"
                        onClick={setInputSearch(!inputSearch)}
                    >
                        <input
                            type="text"
                            className={`input-item-search ${
                                inputSearch ? "display-option" : ""
                            }`}
                        />
                        <div className="icon-container">
                            <SearchRoundedIcon />
                        </div>
                    </div>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="menu-container-inside-item"
                            onClick={navigate}
                        >
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
