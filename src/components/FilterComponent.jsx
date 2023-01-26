
const FilterComponent = ({onSort,onSearch,sort,searchValue}) => {

    return ( <div>
        <div class="flex items-center justify-between mb-6">
        <label htmlFor="search-input" class="text-slate-500 text-lg">search</label>
        <input type="text" name="search-input" id="search-input" value={searchValue}
        onChange={onSearch}
          class="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
      </div>
      <div class="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" class="text-slate-500 text-lg">sort</label>
        <select name="sort-products" id="sort-products" class="bg-transparent text-slate-400 rounded-xl "value={sort} onChange={onSort}>
          <option class="bg-slate-500 text-slate-300" value="">select a category</option>
          <option class="bg-slate-500 text-slate-300" selected value="latest">latest</option>
          <option class="bg-slate-500 text-slate-300" value="earliest">earliest</option>
        </select>
      </div>
    </div> );
}
 
export default FilterComponent;