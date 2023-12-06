import Link from "next/link"

const Homepage = () => {
  return (
    <div>
      <Link href={'/dashboard'}>
        Goto dashboard
      </Link>
    </div>
  )
}

export default Homepage