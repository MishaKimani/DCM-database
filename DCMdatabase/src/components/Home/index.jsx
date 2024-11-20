import React from 'react'
import styles from "./home.module.css"
import { Link } from 'react-router-dom';
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

import Navbar from '../Navbar';
import report1 from "../../assets/reportpage.jpg";
import report2 from '../../assets/reportpage2.jpg'
import report3 from '../../assets/reportpage3.jpg'

function Home() {
  return (
    <>
        <section className={styles.home}>

          
            <Navbar/>

            <div className={styles.homechild}>
              
              <MdArrowDropDownCircle />
            </div>
        </section>

        <section className={styles.sectiontwo}>

          <div className={styles.header}>Weekly Reports</div>
            
          <div className={styles.reportpg}>
            
          <div><img src={report1} alt='img' className={styles.reportpgchild1}></img>
          <img src={report2} alt='img' className={styles.reportpgchild2}></img>
          <img src={report3} alt='img' className={styles.reportpgchild3}></img>
          </div>

            <div className={styles.reporttext}>
              <span>Remember to share your service experience this week</span>

              <button className={styles.reportbutton}>
                <Link to='/report'></Link>
                Submit your report here
                <IoIosArrowDropright />
              </button>
            </div>

          </div>
          

        </section>

    </>
  )
}

export default Home
