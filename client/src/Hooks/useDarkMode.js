import { useEffect } from "react";
import  useLocoalStorage  from './useLocoalStorage';


const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocoalStorage (key);
    useEffect (() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode]
      
}


export default useDarkMode;