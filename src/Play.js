const Play = () => {
    const handleClick = (e) => {
        console.log(e.target.dataset.index);
        console.log(e.clientX);
        console.log(e.clientY);
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
        </>
    );
};

export default Play;
