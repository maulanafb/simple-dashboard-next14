import React from 'react'
import styles from '@/app/ui/dashboard/users/addUser/adduser.module.css'
import { addUser } from '../action'
const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder='username' name='username' required />
                <input type="email" placeholder='email' name='email' required />

                <input type="password" placeholder='password' name='password' required />
                <input type="number" placeholder='phone' name='phone' />
                <select name="isAdmin" id="isAdmin" required>
                    <option value="" >Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive" required>
                    <option value="" >Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <textarea name="address" id="" rows="16" placeholder='address'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage