import React, { act } from "react";

export const ProductContext = React.createContext();

export const initialState = {
    products: [
        { id: 101, title: "Psychology", price: 40, photo: "https://m.media-amazon.com/images/I/81c6E2VdT3L._AC_UF1000,1000_QL80_.jpg" },
        { id: 102, title: "Sociology", price: 50, photo: "https://images.booksense.com/images/568/458/9781465458568.jpg" },
        { id: 103, title: "Anthropology", price: 30, photo: "https://images.booksense.com/images/551/458/9781465458551.jpg" },
        { id: 104, title: "Economics", price: 70, photo: "https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/9/7/9780241566237.jpg" },
        { id: 105, title: "Biology", price: 80, photo: "https://m.media-amazon.com/images/I/71DeE5ksYEL._UX250_.jpg" },
        { id: 106, title: "Chemistry", price: 90, photo: "https://images.booksense.com/images/146/042/9780744042146.jpg" },
        { id: 107, title: "Physics", price: 45, photo: "https://libreriaelcandil.com/cdn/shop/products/The_Business_Book_Big_Ideas_Simply_Explained_512x.jpg?v=1558126512" },
        { id: 108, title: "Mathematics", price: 85, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhn8Al9egw51OI5HtpEtSRnwQWeuyHLr2eg&s" },
        { id: 109, title: "Engineering", price: 90, photo: "https://www.rif.org/sites/default/files/images/2022/06/14/Book_Covers/DKbigideasbox.jpg" },
        { id: 110, title: "Medicine", price: 110, photo: "https://m.media-amazon.com/images/I/51Qy+HaIP-L._SL500_.jpg" },
        { id: 111, title: "Linguistics", price: 120, photo: "https://educationalbookshop.com/cdn/shop/products/polbook2_1024x1024@2x.jpg?v=1664452905" },
        { id: 112, title: "History", price: 150, photo: "https://s3.antoineonline.com/catalog/product/9/7/9780241347119_1_01_4.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" },
        { id: 113, title: "Law", price: 200, photo: "https://m.media-amazon.com/images/I/41NVrgF8IuL._SL350_.jpg" },
        { id: 114, title: "Philosophy", price: 180, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwEQwxri0hBsdGvUQ5MM9BwtZfbB6eyWTUg&s" },
    ],
    basket: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const found = state.products.find(prod => prod.id === action.payload);
            const inBasket = state.basket.find(item => item.id === action.payload);
            return {
                ...state,
                basket: inBasket ? state.basket.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + 1 } : item
                ) : [...state.basket, { ...found, count: 1 }]
            };
        case "COUNT_UP":
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + 1 } : item
                )
            };
        case "COUNT_DOWN":
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload && item.count > 1 ? { ...item, count: item.count - 1 } : item
                )
            };
        case "DELETE":
            return {
                ...state,
                basket: state.basket.filter(x => x.id !== action.payload),
            };
        default:
            return state;
    }
}