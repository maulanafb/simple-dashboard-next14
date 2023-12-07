'use server'

import { Product } from "@/app/lib/productModel";
import { connectToDB } from "@/app/lib/utils";
import styles from '@/app/ui/dashboard/products/products.module.css'
import Image from "next/image";
import Link from "next/link";

export const fetchProducts = async (q, page) => {

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
    try {
        connectToDB()
        const count = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        const data = products.map((product) => (
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
        throw new Error("failed to fetch Product")
    }
}