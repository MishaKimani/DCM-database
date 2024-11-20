import React, { useState } from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";

import Logo from '../../assets/LogoDCM.png'

function Navbar() {

     return (
      
        <nav className={styles.navbar}>

          <div className={styles.logosearch}>

            <img className={styles.logo} src={Logo}></img>
                       
          </div>

          <div className={styles.pages}>

            <span>Home</span>
            <span>Reports</span>
            <span>Departments</span>
           </div>
       
          
          <div>
            <button className={styles.register}>
            Register
            </button>
          </div>

        </nav>
          )}

export default Navbar