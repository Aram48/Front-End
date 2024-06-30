import { useReducer } from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { Basket } from './components/Basket';
import { ProductContext, initialState, reducer } from './Context';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return <>
    <div className="row">
      <ProductContext.Provider value={{ state, dispatch }}>
        <ProductList />
        <Basket />
      </ProductContext.Provider>
    </div>
  </>
}

export default App;