const ProductList = ({products}) => {
    return (  
        <section>
             <h2 className="text-xl text-slate-300 font-bold mb-2">Product list</h2>
                {
                products.map(product=>{
                return(
                <div key={product} className="flex items-center justify-between mb-2 w-full min-w-[400]">
                   <span className="text-slate-400 ">{product.title}</span>
                   <div className="flex items-center gap-x-3">
                    <span className="text-slate-400">
                        {new Date(product.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                    <span className="block px-3 py-0.5 text-slate-400 border border-slate-400
                    text-sm rounded-2xl"
                    >
                        {product.categoryId}
                    </span>
                    <span className="block px-3 py-0.5 text-slate-400 border border-slate-400
                    text-sm rounded-2xl"
                    >
                        {product.quantity}
                    </span>
                    <button className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400">
                        Delete
                    </button>
                   </div>
                  </div>
                );
                })}
        </section>
    );
}
 
export default ProductList;