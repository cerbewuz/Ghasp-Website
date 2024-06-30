export default function MenuRight({ items }) {
    return (
        <>
            <div className="menu-container">
                <div className="menu-container-inside">
                    {items.map((item, index) => (
                        <span
                            key={index}
                            className="menu-container-inside-item"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}
