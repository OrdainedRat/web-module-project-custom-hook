
import { useState } from "react";

const useLocalStorage = (key, initial ) => {
    const [state, setState] = useState(() => {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            localStorage.setItem(key, JSON.stringify(initial));
            return initial;
        }
    });

    const setStoredState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value)
    }

    return [ state, setStoredState]

}

export default useLocalStorage;