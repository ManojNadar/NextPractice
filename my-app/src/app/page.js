"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };
  return (
    <main className={styles.main}>
      <h1>Hello World Next.Js</h1>
      <button onClick={() => alert("hello")}>Click Me</button> <br />
      <button onClick={() => navigate("/login")}>navigate to login</button>
    </main>
  );
}
