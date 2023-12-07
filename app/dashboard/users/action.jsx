'use server'
import Link from "next/link";
import { User } from "@/app/lib/userModel";
import { connectToDB } from "@/app/lib/utils";
import Image from 'next/image'
import styles from "@/app/ui/dashboard/users/users.module.css"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
    try {
        connectToDB()
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        const data = users.map((user) => (
            <tr key={user.username}>
                <td>
                    <div className={styles.user}><Image alt='avatar' src={`${user.img ? user.img : '/noavatar.png'}`} width={40} height={40} className={styles.userImage} />{user.username}</div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
                <td>{user.isActive ? "Active" : "Not Active"}</td>
                <td>
                    <div className={styles.buttons}>
                        <Link href={`/dashboard/users/${user.id}`}>
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                        </Link>
                        <form action={deleteUser}>
                            <input type="hidden" value={user.id} name="id" />
                            <button className={`${styles.button} ${styles.delete}`} type="submit">Delete</button>
                        </form>

                    </div>
                </td>
            </tr>
        ));
        return { count, data };
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetchUsers")
    }
}

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    try {
        connectToDB()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            username, email, password: hashedPassword, phone, address, isAdmin, isActive
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
        throw new Error("failed create user")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectToDB()
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error("anjay")
    }
    revalidatePath("/dashboard/users")
}