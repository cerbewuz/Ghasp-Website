export default function Menu({ items }) {
    return (
        <>
            <div className="menu-container">
                <div className="menu-coontainer-inside">
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
