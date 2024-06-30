import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ProductList } from './components/ProductList';
import { Basket } from './components/Basket';

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const moveToCart = id => {
    let found = products.find(product => product.id === id);
    if (found) {
      setBasket(prevBasket => {
        const itemInBasket = prevBasket.find(item => item.id === id);
        if (itemInBasket) {
          return prevBasket.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
          );
        } else {
          return [...prevBasket, { ...found, count: 1 }];
        }
      });
    }
  }

  const onDelete = id => {
    setBasket(basket.filter(bas => bas.id !== id));
  }

  const incrementCount = id => {
    setBasket(basket.map(product =>
      product.id === id ? { ...product, count: product.count + 1 } : product
    ));
  }

  const decrementCount = id => {
    setBasket(basket.map(product =>
      product.id === id && product.count > 1 ? { ...product, count: product.count - 1 } : product
    ));
  }

  const calculateTotal = () => {
    return basket.reduce((acc, item) => acc + item.price * item.count, 0);
  }

  return (
    <>
      <div className="row">
        <ProductList
          items={products}
          onMove={moveToCart}
        />
        <Basket
          items={basket}
          onDelete={onDelete}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          total={calculateTotal()}
        />
      </div>
    </>
  );
}

export default App;
