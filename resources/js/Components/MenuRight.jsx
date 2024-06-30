import { router } from "@inertiajs/react";

export default function MenuRight({ items }) {
    const navigate = () => {
        router.visit("/login");
    };
    return (
        <>
            <div className="menu-container">
                <div className="menu-container-inside">
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
