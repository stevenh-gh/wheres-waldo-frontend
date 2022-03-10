import { useRef } from "react";

const Play = () => {
    const menuRef = useRef();

    const handleClick = (e) => {
        console.log(e.target.dataset.index);
        const menu = menuRef.current;
        menu.style.top = `${e.clientY}px`;
        menu.style.left = `${e.clientX}px`;
        menu.classList.remove("hidden");
    };

    return (
        <>
            <div>the game page</div>
            <div className="bg-[url('../public/waldo.jpeg')] w-[1175px] h-[726px] bg-contain bg-no-repeat grid grid-cols-[repeat(25,_1fr)]">
                {[...Array(625)].map((el, index) => {
                    return (
                        <div
                            className="hover:border hover:border-blue-500"
                            key={index}
                            data-index={index}
                            onClick={handleClick}
                        ></div>
                    );
                })}
            </div>
            <div
                className="border border-black h-[250px] w-[250px] absolute hidden"
                id="menu"
                ref={menuRef}
            >
                clicked
            </div>
        </>
    );
};

export default Play;
