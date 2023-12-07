import mongoose from "mongoose"

export const connectToDB = async () => {

    const connection = {}
    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.URL_MONGODB_DEV)
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error)
    }
}