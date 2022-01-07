import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
    <Head>
      <title>The List | Home</title>
      <meta name="keywords" content="The list" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis optio, rem est placeat dignissimos nihil omnis quidem consequatur deleniti, impedit iure? Cumque, ab omnis eveniet officia accusantium sint a voluptas.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis optio, rem est placeat dignissimos nihil omnis quidem consequatur deleniti, impedit iure? Cumque, ab omnis eveniet officia accusantium sint a voluptas.</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
    </>
  )
}
