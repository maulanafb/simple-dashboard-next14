import React from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'

import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchUsers } from './action'

const UsersPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, data } = await fetchUsers(q, page);
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
                    {count > 0 ? data : (
                        <tr>
                            <td colSpan={6} style={{ textAlign: 'center' }}>
                                Data pencarian "{q}" tidak ditemukan
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default UsersPage