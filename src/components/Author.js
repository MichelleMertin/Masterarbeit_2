import React from "react";

import "./Knopf.css";

const Author = (props) => {
  const authors = [
    {
      text: "Tom Clancy",
      handler: props.actionProvider.chooseAuthor,
      id: 1
    },
    {
      text: "Joy Fielding",
      handler: props.actionProvider.chooseAuthor,
      id: 2
    },
    {
      text: "J.K. Rowling",
      handler: props.actionProvider.chooseAuthor,
      id: 3
    }
  ];

  const buttonsMarkup = authors.map((author) => (
    <button key={author.id} onClick={author.handler} className="knopf-button">
      {author.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Author;
