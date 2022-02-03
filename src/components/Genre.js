import React from "react";

import "./Knopf.css";

const Genre = (props) => {
  const genres = [
    {
      text: "Fantasy",
      handler: props.actionProvider.chooseGenre,
      id: 1
    },
    { text: "Krimi", handler: props.actionProvider.chooseGenre, id: 2 },
    { text: "Liebesroman", handler: props.actionProvider.chooseGenre, id: 3 },
    { text: "Sci-Fi", handler: props.actionProvider.chooseGenre, id: 4 }
  ];

  const buttonsMarkup = genres.map((genre) => (
    <button key={genre.id} onClick={genre.handler} className="knopf-button">
      {genre.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Genre;
