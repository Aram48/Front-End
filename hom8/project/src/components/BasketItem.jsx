import { useContext } from "react";
import { ProductContext } from "../Context";

export const BasketItem = ({ id, title, price, count }) => {

    const { dispatch } = useContext(ProductContext);

    return (
        <tr>
            <td>{title}</td>
            <td>{price} USD</td>
            <td>{count}</td>
            <td>
                <button onClick={() => dispatch({ type: "COUNT_UP", payload: id })}>+</button>
                <button onClick={() => dispatch({ type: "COUNT_DOWN", payload: id })}>-</button>
                <button onClick={() => dispatch({ type: "DELETE", payload: id })}>Remove</button>
            </td>
        </tr>
    );
};