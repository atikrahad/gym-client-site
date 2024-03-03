import About from "./homeComponents/About";
import Homebenner from "./homeComponents/Homebenner";
import Status from "./homeComponents/Status";

const Home = () => {
    return (
        <div>
            <Homebenner></Homebenner>
            <About></About>
            <Status></Status>
        </div>
    );
};

export default Home;