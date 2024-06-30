import { useContext } from "react";
import { ProductItem } from "./ProductItem";
import { ProductContext } from "../Context";

export const ProductList = () => {
    const { state: { products }, dispatch } = useContext(ProductContext);

    const moveToCart = id => {
        dispatch({ type: "ADD_TO_CART", payload: id });
    };

    return (
        <div className="list">
            {
                products.map(product => (
                    <ProductItem
                        key={product.id}
                        {...product}
                        onMove={moveToCart}
                    />
                ))
            }
        </div>
    );
};