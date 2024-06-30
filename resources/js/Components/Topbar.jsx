import Logo from "@/Components/Logo";
import Menu from "@/Components/Menu";
export default function Topbar() {
    return (
        <>
            <div className="topbar-container">
                <div className="topbar-container-inside">
                    <Logo />
                    <Menu
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
