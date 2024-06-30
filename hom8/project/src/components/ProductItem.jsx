export const ProductItem = ({ id, title, price, photo, onMove }) => {
    return <>
        <div>
            <img src={photo} />
            <p>{title}</p>
            <p><strong>{price} USD</strong></p>
            <button onClick={() => onMove(id)}>Add to Cart</button>
        </div>
    </>
};
