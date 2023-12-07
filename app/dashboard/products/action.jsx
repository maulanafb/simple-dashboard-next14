'use server'

import { Product } from "@/app/lib/productModel";
import { connectToDB } from "@/app/lib/utils";
import styles from '@/app/ui/dashboard/products/products.module.css'
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Tr from "./tr";

export const fetchProducts = async (q, page) => {

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
    try {
        connectToDB()
        const count = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        const data = products.map((product) => (
            <Tr product={product} />
        ));
        return { count, data };
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch Product")
    }
}

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData)

    try {
        connectToDB()
        const newProduct = new Product({
            title, desc, price, stock, color, size
        })
        await newProduct.save()
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectToDB()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error("anjay")
    }
    revalidatePath("/dashboard/products")
}