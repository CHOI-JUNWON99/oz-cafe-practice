import { createContext, useContext } from "react";
import data from "../assets/data";

const menuContext = createContext();

export function MenuProvider({ children }) {
    // const [menu, setMenu] = useState(0)
    return (
        <menuContext.Provider value={{ menu: data.menu }}>
            {children}
        </menuContext.Provider>
    )
}


export function useMenu() {
    return useContext(menuContext)
}