import { useEffect } from "react";
import  useLocoalStorage  from './useLocalStorage';


const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocoalStorage (key, initialValue);
    useEffect (() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode]
      
}


export default useDarkMode;