'use server'
import Link from "next/link";
import { User } from "@/app/lib/userModel";
import { connectToDB } from "@/app/lib/utils";
import Image from 'next/image'
import styles from "@/app/ui/dashboard/users/users.module.css"
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
                        <Link href={"/"}>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                        </Link>
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