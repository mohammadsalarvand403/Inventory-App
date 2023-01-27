import { useState } from "react";

const ProductsForm = ({categories,setProducts}) => {
 
const [productFormData,setProductFormData]=useState({
  title:"",
  quantity:0,
  categoryId:""
})
const changeHandler=(e)=>{
  const{ name ,value}=e.target;
   setProductFormData({...productFormData,[name]:value})

}
const addNewProduct=(e)=>{
  e.preventDefault();
  const newProduct={...productFormData, createdAt:new Date().toISOString(),
  id: new Date().getTime()
  }
  setProducts((prevState)=>[...prevState,newProduct])
  setProductFormData({title:"", categoryId:"",quantity:0})
}

    return (
    <section>
         <div className="mb-6">
        <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="product-title" className="block mb-1 text-slate-400">title</label>
            <input type="text" name="title" id="product-title" value={productFormData.title} onChange={changeHandler}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"/>
          </div>
          <div>
            <label htmlFor="product-quantity" className="block mb-1 text-slate-400">quantity</label>
            <input className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
              type="number" name="quantity" id="product-quantity"
               value={productFormData.quantity} 
               onChange={changeHandler}/>
          </div>
          <div>
            <label htmlFor="product-category" className="block mb-1 text-slate-400">category</label>
            <select name="categoryId" id="product-category" 
            value={productFormData.categoryId}
             onChange={changeHandler}
              className="bg-transparent text-slate-400 rounded-xl w-full">
                 <option  value="" className="bg-slate-500 text-slate-300">
                  select a category
                </option>
                {categories.map((Category)=>{
                  return(
                    <option key={Category.id} 
                    value={Category.id} className="bg-slate-500 text-slate-300">
                  {Category.title}
                </option>
                  );
                })}
            </select>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button 
            onClick={addNewProduct}
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
            Add newProduct
            </button>
          </div>
        </form>
      </div>
    </section> 
    );}
export default ProductsForm;