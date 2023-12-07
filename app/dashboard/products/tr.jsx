import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { deleteProduct } from './action'
const Tr = ({ product }) => {
    return (
        <tr key={product.title}>
            <td>
                <div className={styles.product}><Image alt='logo' src={`${product.img ? product.img : '/noproduct.jpg'}`} width={40} height={40} className={styles.productImage} />{product.title}</div>
            </td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td>{product.createdAt.toString().slice(4, 16)}</td>
            <td>{product.price}</td>
            <td>
                <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <form action={deleteProduct}>
                        <input type="hidden" value={product.id} name="id" />
                        <button className={`${styles.button} ${styles.delete}`} type="submit">Delete</button>
                    </form>
                </div>
            </td>
        </tr>
    )
}

export default Tr