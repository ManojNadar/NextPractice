"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname !== "/about/aboutus" ? (
        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "green",
            }}
            href="/about"
          >
            About
          </Link>
          <Link
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "green",
            }}
            href="/about/aboutme"
          >
            About me
          </Link>
          <Link
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "green",
            }}
            href="/about/aboutus"
          >
            About us
          </Link>
        </div>
      ) : (
        <Link href="/about">Go back to about</Link>
      )}
      {children}
    </div>
  );
}
