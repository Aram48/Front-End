import { useContext } from "react";
import { BasketItem } from "./BasketItem";
import { ProductContext } from "../Context";

export const Basket = () => {
    const { state: { basket }, dispatch } = useContext(ProductContext);

    const calculateTotal = () => {
        return basket.reduce((acc, item) => acc + item.price * item.count, 0);
    };

    return (
        <div>
            <h2>Basket</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basket.map(item => (
                            <BasketItem
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>{calculateTotal()} USD</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};