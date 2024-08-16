import { Link } from "react-router-dom"
import options from "../../../../MOCData/NavbarOptions.json"
import { FaBars } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CategorySidebar from "../../../Section/CategorySidebar/CategorySidebar";

const NavbarMain = () => {
    const scrollContainerRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showCategoryBar, setShowCategoryBar] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            if (container) {
                const isAtStart = container.scrollLeft === 0;
                const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
                setIsScrolled(!isAtStart);
                setIsOverflowing(!isAtEnd);
            }
        };

        const checkOverflow = () => {
            const container = scrollContainerRef.current;
            if (container) {
                setIsOverflowing(container.scrollWidth > container.clientWidth);
                setIsScrolled(container.scrollLeft > 0);
            }
        };
        checkOverflow();
        window.addEventListener("resize", checkOverflow);

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("resize", checkOverflow);
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const scrollRight = () => {
        const container = scrollContainerRef.current;        
        if (container) {
            container.scrollBy({ left: 150, behavior: "smooth" });
        }
    };

    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({ left: -150, behavior: "smooth" });
        }
    };
    
  return (
    <div className="navbar-main">
        <div className="left-part"></div>
        <div className="fill-part fx">
            <span className="slider-btn aic cp" onClick={() => setShowCategoryBar(true)}><FaBars /> All</span>
            {isScrolled && (
                <button className="scroll-left-btn" onClick={scrollLeft}>
                    <FaAngleLeft />
                </button>
            )}
            <div className="options-container fx" ref={scrollContainerRef}>
                {
                    options?.map((option, ind) => <Link key={ind} to={option?.link}>{option.label}</Link>)
                }
            </ div>
            {isOverflowing && (
                <button className="scroll-right-btn" onClick={scrollRight}>
                    <FaAngleRight />
                </button>
            )}
        </div>
        <div className="right-part"></div>
        
        <CategorySidebar showCategoryBar={showCategoryBar} setShowCategoryBar={setShowCategoryBar}/>
        { showCategoryBar && 
            <>
                <div className="modal-overlay-2" onClick={() => setShowCategoryBar(false)}></div>
            </>
        }
    </div>
  )
}

export default NavbarMain