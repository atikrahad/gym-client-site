import About from "./homeComponents/About";
import Classes from "./homeComponents/Classes";
import Homebenner from "./homeComponents/Homebenner";
import Status from "./homeComponents/Status";

const Home = () => {
    return (
        <div>
            <Homebenner></Homebenner>
            <About></About>
            <Status></Status>
            <Classes></Classes>
        </div>
    );
};

export default Home;