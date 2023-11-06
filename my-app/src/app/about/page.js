import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <Link href="/login">Go to Login Page</Link> br
      <Link href="/about/aboutme">Go to about nested Page</Link>
    </div>
  );
};

export default About;
