import React from "react";

const CheckBox = (props) => {
  const choices = [
    {
      text: "Autor",
      handler: () => {},
      id: 1
    },
    { text: "Genre", handler: () => {}, id: 2 },
    { text: "Jahrgang", handler: () => {}, id: 3 },
    { text: "Kenne ich bereits", handler: () => {}, id: 4 }
  ];

  const checkboxMarkup = choices.map((choice) => (
    <form key={choice.id}>
      <input type="checkbox" onClick={choice.handler} />
      <label>{choice.text}</label>
    </form>
  ));

  return <div>{checkboxMarkup}</div>;
};

export default CheckBox;
