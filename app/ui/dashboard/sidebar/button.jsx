'use client'
import React from 'react'
import { MdLogout } from 'react-icons/md'
import styles from "./sidebar.module.css"

const Button = ({ title }) => {
    return (
        <button className={styles.logout} onClick={() => alert("Button CLicked")}><MdLogout />Logout</button>
    )
}

export default Button