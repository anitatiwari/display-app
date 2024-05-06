import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch('http://localhost:8000/posts');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='product grid-cols-1 md:flex gap-5 '>
        {error ? (
          <div className="error">{error}</div>
        ) : (
          <ProductList className="shrink " products={products} />
        )}
      </div>
    </div>
  );
}

export default App;
