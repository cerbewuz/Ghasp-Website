import LogoImage from "../../../public/image/logo.png";

import { router } from "@inertiajs/react";
export default function Logo() {
    const navigateToHome = () => {
        router.visit("/");
    };
    return (
        <>
            <div className="logo-container">
                <div className="logo-container-inside" onClick={navigateToHome}>
                    <img src={LogoImage} className="logo-item" alt="Logo" />
                </div>
            </div>
        </>
    );
}
