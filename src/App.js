
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
  const [selectedCategory,setSelectedCategory]=useState('');

  useEffect(()=>{
  let result=products;
  result= filterSearchTitle(result);
  result=filterSelectedCategory(result);
  result=sortDate(result);
  setFilterProducts(result);
  },[products,sort,searchValue,selectedCategory]);  

    const searchHandler=(e)=>{
      setSearchValue(e.target.value.trim().toLowerCase())
    };
    const SelectedCategoryHandler=(e)=>{
    setSelectedCategory(e.target.value)
    }
    const sortHandler=(e)=>{
      setSort(e.target.value)
    };
  const filterSearchTitle=(array)=>{
  return array.filter((p)=> p.title.toLowerCase().includes(searchValue));
    };
    const filterSelectedCategory=(array)=>{
      if(!selectedCategory) return array;
      return array.filter((item)=> item.categoryId === selectedCategory)
    }
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
  useEffect(()=>{
    const savedProducts=JSON.parse(localStorage.getItem("products")) ||[];
    const savedCategories=JSON.parse(localStorage.getItem("categories"))||[];
    setCategories(savedCategories)
    setProducts(savedProducts)
  },[])

  useEffect(()=>{
  if(products.length){
    localStorage.setItem("products",JSON.stringify(products))
  }
  },[products]);


useEffect(()=>{
  if(categories.length){
    localStorage.setItem("categories",JSON.stringify(categories))
  }
},[categories])





  return (
    <div className="">
       <div className='bg-slate-800 min-h-screen'>
        <Navbar products={products}/>
        <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm setCategories={setCategories}/>
        <ProductsForm categories={categories} setProducts={setProducts}/>
        <FilterComponent onSelectedCategory={SelectedCategoryHandler} selectedCategory={selectedCategory} categories={categories} sort={sort} searchValue={searchValue} onSort={sortHandler} onSearch={searchHandler}/>
        <ProductList categories={categories} products={filterProducts} setProducts={setProducts}/>
        </div>
       </div>
    </div>
  );
}

export default App;
