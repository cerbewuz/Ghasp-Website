import Logo from "@/Components/Logo";
import MenuRight from "@/Components/MenuRight";
import MenuLeft from "@/Components/MenuLeft";
export default function Topbar() {
    return (
        <>
            <div className="topbar-container">
                <div className="topbar-container-inside">
                    <Logo />
                    <MenuLeft
                        items={["HOME", "GALLERY", "ABOUT US", "CONTACT US"]}
                    />
                    <MenuRight items={["SIGN IN"]} />
                </div>
            </div>
        </>
    );
}
