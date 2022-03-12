import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <h2>Choose a level</h2>
            <Link to="/play">
                <div className="bg-[url('../public/waldo.jpeg')] w-[900px] h-[556px] bg-contain bg-no-repeat hover:scale-105"></div>
            </Link>
        </>
    );
};

export default App;
