
import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
const SingleUserPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/noavatar.png' fill />
                </div>
                <span className={styles.title}>John dic</span>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Username</label>
                    <input type="text" name='username' placeholder='John dic' />
                    <label htmlFor="">Email</label>
                    <input type="email" name='Email' placeholder='Johndic@gmail.com' />
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='John dic' />
                    <label htmlFor="">Phone</label>
                    <input type="number" name='phone' placeholder='John dic' />
                    <label htmlFor="">Address</label>
                    <textarea name="address" id="" cols="30" rows="10" placeholder='Pontianak' />
                    <label htmlFor="">Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label htmlFor="">Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage