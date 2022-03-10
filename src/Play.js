const Play = () => {
    return (
        <>
            <div>the game page</div>
            <div className="bg-[url('../public/waldo.jpeg')] w-[1175px] h-[726px] bg-contain bg-no-repeat grid grid-cols-[repeat(25,_1fr)]">
                {[...Array(625)].map((el, index) => {
                    return (
                        <div
                            className="hover:border hover:border-blue-500"
                            key={index}
                        ></div>
                    );
                })}
            </div>
        </>
    );
};

export default Play;
