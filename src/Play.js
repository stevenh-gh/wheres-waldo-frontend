import { useState } from "react";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const Play = () => {
    const menuRef = useRef();
    const params = useParams();
    const [jsonData, setJsonData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/games/${params.id}`)
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => setJsonData(resp))
            .catch((resp) => console.log(resp));
    }, []);

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
            <div
                className="w-[1175px] h-[726px] bg-contain bg-no-repeat grid grid-cols-[repeat(25,_1fr)]"
                style={{ backgroundImage: `url(${jsonData.img})` }}
            >
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
                    {["Waldo", "Woof", "Wilma", "Odlaw"].map((ele, idx) => {
                        return (
                            <li
                                onClick={handleCharacterClick}
                                className="hover:bg-yellow-200 hover:cursor-pointer pl-3"
                                data-selection={ele.toLowerCase()}
                                key={idx}
                            >
                                {ele}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Play;
