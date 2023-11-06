"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h2>Linking</h2>
      <Link href="/about">Go to About Page</Link> <br />
      <button onClick={() => router.push("/")}>navigate to HOme</button>
    </div>
  );
};
export default Login;
