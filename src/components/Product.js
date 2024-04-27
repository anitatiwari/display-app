export default function Product (props){

    function buy(){
        props.setBasket((oldState)=>[...oldState,props.product])
    }
    
    
        return (
           
        <article className="rounded-xl   pb-4   w-56 shadow-2xl  m-5"> 
       <section className=" grid w-48  ">
            <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`} alt="" className="w-64 justify-self-center" />
    
            <h2 className="text-base font-semibold m-1 text-slate-800">
             {props.product.productdisplayname}
            </h2>
            <div className="flex justify-between p-2">
            <p className="text-md font-bold text-yellow-700 p-1 rounded-lg">
               ${
                    props.product.price
                }
            </p>
            <p className="font-bold ">{props.product.brandname}</p>
            </div>
            <span className=" justify-self-center inline-block align-middle">
            <button onClick={buy} className="rounded-md p-2  font-sans transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white ">
           
    Add to Cart
            </button>
            </span>
            </section>
        </article>
     
        )
        }