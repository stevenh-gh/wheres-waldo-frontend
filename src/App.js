import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/games")
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => setJsonData(resp))
            .catch((resp) => console.log(resp));
    }, []);

    return (
        <>
            <h2>Choose a level</h2>
            {jsonData.map((ele, idx) => {
                return <img key={idx} src={ele.img} alt="" />;
            })}
            {/* <Link to="/play">
                <div className="bg-[url('../public/waldo.jpeg')] w-[900px] h-[556px] bg-contain bg-no-repeat hover:scale-105"></div>
            </Link> */}
        </>
    );
};

export default App;
