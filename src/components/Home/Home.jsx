import React from 'react'
import SignUp from "../SignUp/SignUp";
import styles from "./Home.module.css";
import reactlogo from "./reactlogo.jpg";

const Home = () => {
    return (
        <div>
            <h1 className={styles.title}>Full Stack 101</h1>
            <img className={styles.logo} src={reactlogo} alt="react logo"></img>
            <SignUp />
            
        </div>


    )
}

export default Home
