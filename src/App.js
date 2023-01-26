
import { useState } from 'react';
import './App.css';
import CategoryForm from './components/CategoryForm';
import Navbar from './components/Navbar/Navbar';
import ProductsForm from './components/ProductsForm';


function App() {
  const [categories,setCategories]=useState([]);
  return (
    <div className="">
       <div className='bg-slate-800 min-h-screen'>
        <Navbar/>
        <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategories={setCategories}/>
        <ProductsForm categories={categories}/>
        </div>
       </div>
    </div>
  );
}

export default App;
