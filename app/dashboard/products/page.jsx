import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Link from 'next/link'
import Image from 'next/image'
const ProductPage = () => {
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
                    <tr>
                        <td>
                            <div className={styles.product}><Image src='/noproduct.jpg' width={40} height={40} className={styles.productImage} />Iphong</div>
                        </td>
                        <td>desc</td>
                        <td>Rp 20.000</td>
                        <td>21.4.2024</td>
                        <td>20</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={"/"}>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <Link href={"/"}>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductPage