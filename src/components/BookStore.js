import React, { useState } from "react";
import ActionProvider from "../chatbot/ActionProvider";

function BookStore() {
  const [books, setBooks] = useState([]);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  async function fetchBooksHandler() {
    const response = await fetch(`${API_URL}?q=inauthor:Tom Clancy`);
    const data = await response.json();
    const transformedData = data.items.map((bookData) => {
      return {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        author: bookData.volumeInfo.authors
      };
    });
    console.log(transformedData);
    setBooks(transformedData);
    console.log(books);
  }

  return (
    <div>
      <ActionProvider onFetchBooks={fetchBooksHandler} />
    </div>
  );
}

export default BookStore;
