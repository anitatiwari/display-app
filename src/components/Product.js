export default function Product (props){

    function buy(){
        props.setBasket((oldState)=>[...oldState,props.product])
    }
    
    
        return (
           
        <article className="rounded-xl   pb-4   w-56 shadow-2xl  m-5"> 
       <section className=" grid w-48  ">
     
            <h2 className="text-base font-semibold m-1 text-slate-800">
             {props.product.title}
            </h2>
            <div className="flex justify-between p-2">
            <p className="text-md font-bold text-yellow-700 p-1 rounded-lg">
               {
                    props.product.description
                }
            </p>
            <p className="font-bold ">{props.product.category}</p>
            </div>
            
            </section>
        </article>
     
        )
        }