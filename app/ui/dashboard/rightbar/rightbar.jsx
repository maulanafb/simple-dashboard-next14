import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'
const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src='/astronaut.png' fill className={styles.bg} />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Avaiable Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam,
                    </p>
                    <button className={styles.button}><MdPlayCircleFilled />Watch</button>
                </div>
            </div>
            <div className={styles.item}>

                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Avaiable Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam,
                    </p>
                    <button className={styles.button}><MdPlayCircleFilled />Watch</button>
                </div>
            </div>
        </div>
    )
}

export default RightBar