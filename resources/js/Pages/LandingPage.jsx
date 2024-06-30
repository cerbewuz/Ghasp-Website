import { Link, Head } from "@inertiajs/react";

import Topbar from "@/Components/Topbar";
import Sidebar from "@/Components/Sidebar";

export default function LandingPage() {
    return (
        <>
            <Head title="Welcome" />
            <div className="globals-container">
                <div className="landing-page-container">
                    <Topbar />
                </div> 
            </div>
        </>
    );
}
