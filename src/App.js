
import { useState } from 'react';
import './App.css';
import CategoryForm from './components/CategoryForm';
import FilterComponent from './components/FilterComponent';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList';
import ProductsForm from './components/ProductsForm';


function App() {
  const [products,setProducts]=useState([])
  const [categories,setCategories]=useState([]);
  const [filterProducts,setFilterProducts]=useState([]);
  return (
    <div className="">
       <div className='bg-slate-800 min-h-screen'>
        <Navbar/>
        <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategories={setCategories}/>
        <ProductsForm categories={categories} setProducts={setProducts}/>
        <FilterComponent products={products} setFilterProducts={setFilterProducts}/>
        <ProductList products={filterProducts} setProducts={setProducts}/>
        </div>
       </div>
    </div>
  );
}

export default App;
