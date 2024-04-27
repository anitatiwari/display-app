import {useState,useEffect} from 'react'
import Header from "./components/Header";
import ProductList from './components/ProductList';



function App() {

const [products,setProducts]=useState([]);

useEffect(()=>{
  async function getProducts(){
    const res =await fetch ("https://kea-alt-del.dk/t7/api/products");
    const data =await res.json();
    setProducts(data);
  }
getProducts();
},[])


  return (
    <div className="App">
     <Header />
     <div className='product grid-cols-1 md:flex gap-5 '>
     <ProductList className="shrink " products={products} />
     </div>
    </div>
  );
}

export default App;
