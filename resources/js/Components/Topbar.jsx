import Logo from "@/Components/Logo";
import MenuRight from "@/Components/MenuRight";
export default function Topbar() {
    return (
        <>
            <div className="topbar-container">
                <div className="topbar-container-inside">
                    <Logo />
                    
                    <MenuRight
                        items={[
                            "Home",
                            "Gallery",
                            "About Us",
                            "Login",
                            "Contact Us",
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
