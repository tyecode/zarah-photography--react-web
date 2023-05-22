import { useEffect, useState } from "react";
import { styles } from "../utils/styles";
import { MdOutlineArrowUpward } from "react-icons/md"

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const backToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        })
    }, []);

    return (
        <div
            onClick={backToTop}
            className={`fixed right-8 bottom-28 z-50 overflow-hidden cursor-pointer animate-bounce ${!showButton ? 'hidden' : ''}`}>
            <div className={`w-12 aspect-square border-white border-2 bg-transparent rounded-full opacity-70 ${styles.flexCenter}`}>
                <MdOutlineArrowUpward className="text-2xl text-white" />
            </div>
        </div>
    );
}

export default BackToTopButton;