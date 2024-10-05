"use client";

import { Blog } from "@karasu-lab/karasu-lab-api-types";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog[]>();

  useEffect(() => {
    fetch("https://api.karasu256.com/blog").then(async (res) => {
      const data = await res.json() as Blog[];
      setBlog(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div>
        <ul>
          {(blog ?? []).map((blog) => (
            <li key={blog._id}>
              <Link href={`/blog/${blog._id}`}>
                <h2>{blog.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
