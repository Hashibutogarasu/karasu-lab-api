"use client";

import { Blog } from "@karasu-lab/karasu-lab-api-types";
import React from "react";
import { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogId({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<Blog | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getData() {
      fetch(`https://api.karasu256.com/blog/${params.id}`).then(async (res) => {
        const data = await res.json() as Blog;
        setBlog(data);
        setLoading(false);
      });
    }
    getData();
  }, [loading]);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {
        loading ? (
          <h1 className="text-3xl font-bold">Loading...</h1>
        ) : (
          <>
            <h1 className="text-3xl font-bold">{blog?.title}</h1>
            <ReactMarkDown remarkPlugins={[remarkGfm]}>{blog?.content.toString()}</ReactMarkDown>
          </>
        )
      }
    </section>
  );
}
