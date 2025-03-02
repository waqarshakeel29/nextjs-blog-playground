"use client";

import { useEffect, useState } from "react";
import styles from "./blogs.module.css";

export default function Blog() {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const { title, description } = Object.fromEntries(formData.entries());
    setData({ title, description });
  }

  const fetchData = async (body) => {
    try {
      const response = await fetch("/api/add-blog", {
        method: "POST",
        body: JSON.stringify(body),
      });
      console.log(response.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data.title && data.description) {
      fetchData(data);
    }
  }, [data]);

  return (
    <main className={styles.main}>
      <p className={styles.heading}>Blogs Page</p>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="description" />
        <button type="submit">Submit form</button>
      </form>
    </main>
  );
}
