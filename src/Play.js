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

    const handleMenuClick = (e) => {
        const menu = menuRef.current;

        console.log(e.target.dataset.index);
        menu.style.top = `${e.clientY}px`;
        menu.style.left = `${e.clientX}px`;
        // menu.innerText = e.target.dataset.index;
        menu.classList.remove("hidden");
    };

    const handleCharacterClick = (e) => {
        console.log(e.target.dataset.selection);
        menuRef.current.classList.add("hidden");
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
                            onClick={handleMenuClick}
                        ></div>
                    );
                })}
            </div>
            <div
                className="border border-black h-[100px] w-[100px] absolute hidden bg-yellow-400 rounded-md"
                id="menu"
                ref={menuRef}
            >
                <ul>
                    <li
                        onClick={handleCharacterClick}
                        className="hover:bg-yellow-200 hover:cursor-pointer pl-3"
                        data-selection="waldo"
                    >
                        Waldo
                    </li>
                    <li
                        onClick={handleCharacterClick}
                        className="hover:bg-yellow-200 hover:cursor-pointer pl-3"
                        data-selection="woof"
                    >
                        Woof
                    </li>
                    <li
                        onClick={handleCharacterClick}
                        className="hover:bg-yellow-200 hover:cursor-pointer pl-3"
                        data-selection="wilma"
                    >
                        Wilma
                    </li>
                    <li
                        onClick={handleCharacterClick}
                        className="hover:bg-yellow-200 hover:cursor-pointer pl-3"
                        data-selection="odlaw"
                    >
                        Odlaw
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Play;
