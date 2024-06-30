import { BasketItem } from "./BasketItem"

export const Basket = ({ items, onDelete, onIncrement, onDecrement, total }) => {
    return (
        <div className="basket">
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
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                            <td>
                                <button onClick={() => onIncrement(item.id)}>+</button>
                                <button onClick={() => onDecrement(item.id)}>-</button>
                                <button onClick={() => onDelete(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
