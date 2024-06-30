export const BasketItem = ({ title, id, price, count, onDelete, onIncrement, onDecrement }) => {
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{price * count}</td>
        <td>
            <button onClick={() => onIncrement(id)}>+</button>
            <button onClick={() => onDecrement(id)}>-</button>
            <button onClick={() => onDelete(id)}>x</button>
        </td>
    </tr>
}