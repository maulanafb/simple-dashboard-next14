import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { fetchProducts } from './action'

const ProductPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, data } = await fetchProducts(q, page);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search fro a products..."} />
                <Link href={'/dashboard/products/add'} >
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default ProductPage