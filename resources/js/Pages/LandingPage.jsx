import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import Topbar from "@/Components/Topbar";
import Sidebar from "@/Components/Sidebar";
import PhotoItem from "../../../public/image/sample-photo-item.png";
import VideoItem from "../../../public/image/sample-video-item.mp4";
export default function LandingPage() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Head title="Welcome" />
            <div className="globals-container">
                <Topbar />
                <div className="landing-page-container">
                    <div className="landing-page-container-item">
                        <div className="landing-page-container-item-inside">
                            <div className="item-left">
                                <span class="item-left-title">
                                    What is Lorem Ipsum?
                                </span>
                                <span class="item-left-para">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </span>
                            </div>
                            <div
                                className="item-right"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <video
                                    src={VideoItem}
                                    autoPlay
                                    loop
                                    muted
                                    style={{
                                        position: "absolute", // Add this line
                                        top: 0, // Add this line
                                        left: 0,
                                        opacity: isHovered ? 1 : 0,
                                        visibility: isHovered
                                            ? "visible"
                                            : "hidden",
                                        transition:
                                            "opacity 0.5s, visibility 0.5s",
                                        width: "100%", // Set the width
                                    }}
                                />
                                <img
                                    src={PhotoItem}
                                    style={{
                                        position: "absolute", // Add this line
                                        top: 0, // Add this line
                                        left: 0,
                                        opacity: isHovered ? 0 : 1,
                                        visibility: isHovered
                                            ? "hidden"
                                            : "visible",
                                        transition:
                                            "opacity 0.5s, visibility 0.5s",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
