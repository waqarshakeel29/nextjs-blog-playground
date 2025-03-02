import Link from "next/link";
import styles from "./page.module.css";
import { GET as getBlogsHandler } from "@/app/api/get-blogs/route";

async function getBlogs() {
  try {
    const response = await getBlogsHandler();
    const res = await response.json();
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}


export default async function Home() {
  const response = await getBlogs();

  return (
    <main className={styles.main}>
      <p className={styles.heading}>Browse our blog collection</p>
      <div className={styles.description}>
        <p>
          <Link href={"/blogs"}>Explore Blogs</Link>
        </p>
      </div>
      <div className={styles.heading}>Blog List Below:</div>
      {response?.map(d => <div key={d.title}>{d.title} - {d.description}</div>)}
    </main>
  );
}
