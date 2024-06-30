import LogoImage from "../../../public/image/logo.png";

export default function Logo() {
    return (
        <>
            <div className="logo-container">
                <div className="logo-container-inside">
                    <img src={LogoImage} className="logo-item" alt="Logo" />
                </div>
            </div>
        </>
    );
}
