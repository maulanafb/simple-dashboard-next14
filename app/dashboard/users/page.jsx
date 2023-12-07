import React from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchUsers } from '@/app/lib/data'
const UsersPage = async () => {
    const users = await fetchUsers()
    console.log(users)
    return (

        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search fro a users..."} />
                <Link href={'/dashboard/users/add'} >
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>
                                <div className={styles.user}><Image src={`${user.img ? user.img : '/noavatar.png'}`} width={40} height={40} className={styles.userImage} />{user.username}</div>
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
                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UsersPage