// for dynamic route we have to use a special file 
// convention that is to use [](square brackets) => [pageNo].js

// Note -> issi blog folder me [contactNumber].js name se file bnane par mera project start nhi ho rha tha 
// or usse delete karne par mera project localhost:3000 par start ho gya tha

// Route => http://localhost:3000/blog/50
// Route => http://localhost:3000/blog/thapa technical

// Example - 1
// const [pageNo] = () => {
//   return (
//     <div></div>
//   )
// }

// export default [pageNo]

// Example - 2 (useRouter() Hook)

// import { useRouter } from 'next/router'
// const pageNo = () => {
//     const router = useRouter();
//     const pageNumber = router.query.pageNo;
//   return (
//     <>
//         <h1>my page no {pageNumber} content</h1>
//     </>
//   )
// }
// export default pageNo;


// Example - 3

import Navbar from "../../components/Navbar";

export const getStaticPaths = async () => {   // // getStaticPaths() ek in-built function hai next js ka 
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageno: curElem.id.toString(), // id integer value hai to usse hame tostring me convert karna padega
      },
    };
  });

  return {
    paths,
    // paths:paths,
    // paths : { // it looks something like that
    //   params : {
    //     pageno: 2
    //   }
    // },
    fallback: false,
  };
};

export const getStaticProps = async (context) => {  // context=paths // getStaticPaths ke data ko get karne ke liye hame bydefault ek object milta hai  
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

// pageNo ya myData kuch bhi name provide kar sakte hai isko 
const myData = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};

export default myData;

// What will happend if the file is already exist in our folder and we tried to call the pages dynamic route ?

// Which page will be serve by the next.js app?

// getStaticPaths defines which pages next.js has to render when exporting.
// It is used to generate all available dynamic routes.