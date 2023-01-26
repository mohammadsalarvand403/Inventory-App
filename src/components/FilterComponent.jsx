import { useState } from "react";

const FilterComponent = ({products,setFilterProducts}) => {
  const [sort,setSort]=useState("latest");
  const [searchValue,setSearchValue]=useState('');
  const searchHandler=(e)=>{
    const value=e.target.value.trim().toLowerCase()
   const filteredProducts=products.filter((p)=> p.title.toLowerCase().includes(value));
    setFilterProducts(filteredProducts)
  }
  const sortHandler=(e)=>{
  }
    return ( <div>
        <div class="flex items-center justify-between mb-6">
        <label htmlFor="search-input" class="text-slate-500 text-lg">search</label>
        <input type="text" name="search-input" id="search-input" value={searchValue}
        onChange={searchHandler}
          class="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
      </div>
      <div class="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" class="text-slate-500 text-lg">sort</label>
        <select name="sort-products" id="sort-products" class="bg-transparent text-slate-400 rounded-xl "value={sort} onChange={sortHandler}>
          <option class="bg-slate-500 text-slate-300" value="">select a category</option>
          <option class="bg-slate-500 text-slate-300" selected value="latest">latest</option>
          <option class="bg-slate-500 text-slate-300" value="earlist">earlist</option>
        </select>
      </div>
    </div> );
}
 
export default FilterComponent;