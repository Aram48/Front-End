import { BasketItem } from "./BasketItem"

export const Basket = ({ items, onDelete, onIncrement, onDecrement, onSale, onApplied }) => {
    return <div>
        <h3>Basket</h3>
        {!onApplied && <button onClick={onSale}>Sale</button>}
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(elm =>
                        <BasketItem
                            key={elm.id}
                            {...elm}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                        />
                    )
                }
            </tbody>
        </table>
    </div>
}
