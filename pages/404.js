// file ka name 404.js hona jaruri hai error page create karne ke liye 

// example - 1
// Link Error Page with Home Page
// import Link from 'next/link';
// const errorPage = () => {
//   return (
//     <>
//         <div>
//         <div>
//             <h1>404</h1>
//         </div>
//         <h2>We are sorry, Page not found!</h2>
//         <p>
//             The page you are looking for might have been removed had its name 
//             change or is temporarily unavailable.
//         </p>
//         {/* first way */}
//         <Link href="/"> Back to Homepage </Link>
//         </div>
//     </>
//   )
// }

// export default errorPage


// Example - 2
// Redirect to Home Page onClick | Events In Next.JS

// import {useRouter} from 'next/router';

// const errorPage = () => {
//   const router = useRouter(); // useRouter se ham router object create kar rhe hai 
  
//   function handleInput(){
//     return router.push("/");
//   }
  
//   return (
//     <>
//         <div>
//         <div>
//             <h1>404</h1>
//         </div>
//         <h2>We are sorry, Page not found!</h2>
//         <p>
//             The page you are looking for might have been removed had its name 
//             change or is temporarily unavailable.
//         </p>
//         {/* seconnd way */}
//         <button>
//             <a onClick={() => router.push("/")}> Back to Homepage </a>
//         </button>
//         {/* third way */}
//         <button>
//             <a onClick={handleInput}> Back to Homepage </a>
//         </button>
//         </div>
//     </>
//   )
// }

// export default errorPage


// Example - 3
//  Redirect 404 Page after 5 Sec | Hooks | Next.JS

import {useEffect} from 'react';
import { useRouter } from "next/router";

const errorPage = () => {
    const router = useRouter();

    // jaise hi hamara page load hoga useEffect chal jayega
    // useEffect(() => {
    //     router.push("/");
    // },[]);
    
    useEffect(() => {
        setTimeout(()=> {
            router.push("/");
        },5000)
    },[]);

  return (
    <>
        <div>
        <div>
            <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found!</h2>
        <p>
            The page you are looking for might have been removed had its name 
            change or is temporarily unavailable.
        </p>
        </div>
    </>
  )
}

export default errorPage