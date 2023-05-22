import { styles } from "../utils/styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Preloader = () => {
    const location = useLocation();

    useEffect(() => {
        document.querySelector("body").classList.remove("loaded");
        setTimeout(() => {
            document.querySelector("body").classList.add("loaded");
        }, 500);
    }, [location]);

    return (
        <div id="loader" className={`bg-primary fixed top-0 w-full h-full z-[999] ${styles.flexCenter}`}>
            <div id="loader-wrapper" className={`${styles.flexCenter}`}>
                <div className={`w-[110px] aspect-square bg-[#696969] rounded-full relative ${styles.flexCenter}`}>
                    <div className="w-[110px] aspect-square absolute rounded-full overflow-clip opacity-90 animate-spin">
                        <div className="w-1/2 h-full absolute right-0 bg-white"></div>
                        <div className="w-full h-1/2 absolute right-0 bg-white"></div>
                    </div>
                    <div className="w-[102px] aspect-square bg-primary rounded-full absolute"></div>
                    <h1 className=" text-7xl text-link font-semibold font-playfair z-50 -mt-2 animate-pulse">Z</h1>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
