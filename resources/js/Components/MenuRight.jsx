import { router } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
export default function MenuRight({ items }) {
    const [inputSearch, setInputSearch] = useState(false);

    const searchRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setInputSearch(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navigate = () => {
        router.visit("/login");
    };
    return (
        <>
            <div className="menu-container">
                <div className="menu-container-inside">
                    <div className="search-container" ref={searchRef}>
                        <input
                            type="text"
                            className={`input-item-search ${
                                inputSearch ? "display-option" : ""
                            }`}
                        />
                        <div
                            className="icon-container"
                            onClick={() => setInputSearch(!inputSearch)}
                        >
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
