
import { useEffect, useState } from 'react';
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
  const [sort,setSort]=useState("latest");
  const [searchValue,setSearchValue]=useState('');

useEffect(()=>{
 let result=products;
 result= filterSearchTitle(result);
 result=sortDate(result)
 setFilterProducts(result)
},[products,sort,searchValue]);  

  const searchHandler=(e)=>{
     setSearchValue(e.target.value.trim().toLowerCase())
  };
  const sortHandler=(e)=>{
    setSort(e.target.value)
  };
 const filterSearchTitle=(array)=>{
return array.filter((p)=> p.title.toLowerCase().includes(searchValue));
  };
  const sortDate=(array)=>{
    let sorttedProducts=[...array]
    return sorttedProducts.sort((a,b)=>{
      if(sort ==='latest'){
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1:1;
      } else if(sort==="earliest"){
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1:-1;
      }
    })
  }
  return (
    <div className="">
       <div className='bg-slate-800 min-h-screen'>
        <Navbar/>
        <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategories={setCategories}/>
        <ProductsForm categories={categories} setProducts={setProducts}/>
        <FilterComponent sort={sort} searchValue={searchValue} onSort={sortHandler} onSearch={searchHandler}/>
        <ProductList products={filterProducts} setProducts={setProducts}/>
        </div>
       </div>
    </div>
  );
}

export default App;
