import { useEffect, useRef } from "react";

const Play = () => {
    const menuRef = useRef();

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.keyCode === 27) {
                const menu = menuRef.current;
                menu.classList.add("hidden");
            }
        };
        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    const handleClick = (e) => {
        const menu = menuRef.current;

        console.log(e.target.dataset.index);
        menu.style.top = `${e.clientY}px`;
        menu.style.left = `${e.clientX}px`;
        menu.innerText = e.target.dataset.index;
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
            ></div>
        </>
    );
};

export default Play;
