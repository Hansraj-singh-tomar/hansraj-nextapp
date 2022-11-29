// Route - http://localhost:3000/blog
// blog folder ke andar me index.js ki jagah koi or file ka name use karta to mujhe 404 error dekhne ko milti 
// jo ki shi nhi hai isliye agar me koi contact name se filder create kar rha hu to mujhe uske andar index.js file create kar

// import Navbar from "../../components/Navbar";

// // ke uska code likhna padega 
// const index = () => {
//     // const blog = () => {
//       return (
//         <>
//           <Navbar/>
//           <h1>hello world this is blog.js/index file</h1>
//         </>
//       )
//     }
    
//     export default index;
//     // export default blog;



// Example - 2
import Navbar from "../../components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {  // getStaticProps() ek in-built function hai next js ka 
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data, 
      // data : data, // isse esa bhi likh sakte hai 
      // hansrajData : data, // issa bhi likh sakte hai
    }, // ab yha probs me array of object ke formate me data hai 
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.slice(0, 5).map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}> 
              <h2>{curElem.title}</h2> 
            </Link>
          </div>
        );
      })}
    </>
  );
};
// localhost:3000/blog/5
export default blog;