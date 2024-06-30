export default function MenuLeft({ items }) {
    return (
        <>
            <div className="menu-container">
                <div className="menu-container-inside">
                    {items.map((item, index) => (
                        <div key={index} className="menu-container-inside-item">
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
