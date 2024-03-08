import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';


const useAos = () => {
    useEffect(()=>{
        Aos.init({})
      }, [])
};

export default useAos;