import { useEffect } from "react";

const useLocalStorage = (key, prop) => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(prop));
    }, [key, prop]);
}

export default useLocalStorage;