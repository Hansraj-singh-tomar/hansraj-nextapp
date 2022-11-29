// Two ways to add Images - internal and external
// internal - public folder ke ander image file ko add kar ke 


import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page </title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainHeading}>Hello World my about </h1>
        {/* <Image src="/20220926_153423.jpg" layout="fill"></Image>  */}
        {/* <Image src="/20220926_153423.jpg" width={500} height={300}></Image>  */}
        <Image src="https://pixabay.com/images/id-7408393/" alt="Image/horses" width={500} height={300}></Image>
      </div>
    </>
  );
};

export default about;