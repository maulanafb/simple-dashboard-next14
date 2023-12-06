import Link from "next/link"
import styles from "./home.module.css"
const Homepage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "row", height: "100vh", borderRadius: "100px" }}>
      <div style={{ padding: "5px 10px", backgroundColor: "teal", borderRadius: "50px" }} className={styles.button}>
        <Link href={'/dashboard'}>
          <h1>Goto dashboard</h1>
        </Link>
      </div>
    </div>
  )
}

export default Homepage