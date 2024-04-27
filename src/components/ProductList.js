import Product from "./Product";

export default function ProductList({products, setBasket}){
    return (
    //     <div className=" ">
    // <img src="/YScnOtK.jpg" alt="somegraphics"  className="max-w-screen-md"/> 
        <section className="grid  m-5 md:grid-cols-3">
       {products.map(p=>(
<Product key={p.id}setBasket={setBasket} product={p} />
       ))}
    </section>
 
    )
}