import React from 'react'
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'
const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='title' name='title' required />
                <select name="cat" id="cat">
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder='price' name='price' />
                <input type="number" placeholder='stock' name='stock' />
                <input type="text" placeholder='color' name='color' />
                <input type="text" placeholder='size' name='size' />
                <textarea name="description" id="" rows="16" placeholder='description'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage