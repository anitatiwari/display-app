export default function Header(){
    return ( 
       <nav >
     <ul className="flex flex-start gap-8 text-xl m-0 bg-black text-white p-5 border-2 shadow-2xl justify-center">
         <li className=" hover:text-yellow-300"><a href="index.html">Home</a></li>
         <li className="hover:text-yellow-300" ><a href="index.html">Products</a></li>
     </ul>
       </nav>
    )
    }