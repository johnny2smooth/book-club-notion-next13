"use client";
import Link from "next/link";
import { FormEvent } from "react";

export default function PostBookToNotion() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const data = {
      author: form.author.value,
      genre: form.genre.value,
      rating: form.rating.value,
      recommendation: form.recommendation.value,
      book: form.book.value,
      yourname: form.yourname.value,
    };

    const response = await fetch("/api/notion-form", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };

  return (
    <div>
      <h1>
        Add your favorite <Link href="/">Book</Link> .
      </h1>
      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="book">What is the Book&apos;s title</label>
        <input type="text" id="book" name="book" required />
        <label htmlFor="author">Who is the Author?</label>
        <input type="text" id="author" name="author" required />
        <label htmlFor="genre">Genre</label>
        <select name="genre" id="genre">
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="fantasy">Fantasy</option>
          <option value="romance">Romance</option>
          <option value="mystery">Mystery</option>
          <option value="horror">Horror</option>
          <option value="thriller">Thriller</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="biography">Biography</option>
        </select>
        <fieldset>
          <legend>Rating out of 5 stars</legend>
          <label htmlFor="1">⭐️☆☆☆☆</label>
          <input type="radio" id="1" name="rating" value="⭐️☆☆☆☆" />
          <label htmlFor="2">⭐️⭐️☆☆☆</label>
          <input type="radio" id="2" name="rating" value="⭐️⭐️☆☆☆" />
          <label htmlFor="3">⭐️⭐️⭐️☆☆</label>
          <input type="radio" id="3" name="rating" value="⭐️⭐️⭐️☆☆" />
          <label htmlFor="4">⭐️⭐️⭐️⭐️☆</label>
          <input type="radio" id="4" name="rating" value="⭐️⭐️⭐️⭐️☆" />
          <label htmlFor="5">⭐️⭐️⭐️⭐️⭐️</label>
          <input type="radio" id="5" name="rating" value="⭐️⭐️⭐️⭐️⭐️" />
        </fieldset>
        <label htmlFor="recommendation">Why did you like this book?</label>
        <textarea
          name="recommendation"
          id="recommendation"
          cols={30}
          rows={10}
          minLength={10}
        />
        <label htmlFor="yourname">Your Name</label>
        <input
          type="text"
          id="yourname"
          name="yourname"
          autoComplete="name"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
