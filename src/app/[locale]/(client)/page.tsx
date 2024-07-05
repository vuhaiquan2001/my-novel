"use client";
import { Link } from "@/navigation";
import Image from "next/image";

import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    // console.log(prefersDarkScheme);
    return () => {};
  }, []);

  return (
    <main className="">
      <Link href="/map">Read</Link>
    </main>
  );
}
