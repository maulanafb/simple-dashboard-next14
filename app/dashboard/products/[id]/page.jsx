import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
const SingleProductPage = () => {

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
                    <label htmlFor="">Title</label>
                    <input type="text" name='title' placeholder='John dic' />
                    <label htmlFor="">Price</label>
                    <input type="number" name='price' placeholder='Johndic@gmail.com' />
                    <label htmlFor="">Stock</label>
                    <input type="number" name='stock' placeholder='John dic' />
                    <label htmlFor="">Color</label>
                    <input type="number" name='phone' placeholder='John dic' />
                    <label htmlFor="">size</label>
                    <input type="number" name='size' placeholder='size' />
                    <label htmlFor="">Category</label>
                    <select name="category" id="category">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label htmlFor="">Description</label>
                    <textarea name="description" id="description" rows="10" placeholder='description' />
                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage