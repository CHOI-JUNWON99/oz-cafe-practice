import { createContext, useState, useContext } from "react";

const cartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (options, quantity, id) => {
        setCart([...cart, { options, quantity, id }])
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((el) => id !== el.id));
    }

    return (
        <cartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {/*왜 value를 객체형태로 받을까*/}
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    return useContext(cartContext) //[cart, setCart] 배열로 반환해줌
    //const [cart, setCart] = useCart()  이런식으로 사용하고자 하는 컴포넌트에 넣어주면 됨 ++import 잊지말기
}
