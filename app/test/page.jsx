import React from 'react'

const Page = async () => {
    const handleForm = async () => {
        'use server'
        console.log("Hello World")
    }
    return (
        <div>
            <form action={handleForm}>
                <input type="text" name='username' />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Page