import { Component } from "react";

class ActionProvider extends Component {
  constructor(createChatBotMessage, setStateFunc) {
    super();

    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  antwort = () => {
    const message = this.createChatBotMessage("Mir gehts gut und dir?");
    this.addMessageToState(message);
  };

  chooseGenre = () => {
    const message = this.createChatBotMessage(
      "Von welchem Autor soll das Buch sein?",
      {
        widget: "author"
      }
    );
    this.addMessageToState(message);
  };

  async fetchBooksHandler() {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:Tom Clancy`
    );
    const data = await response.json();
    const transformedData = data.items.map((bookData) => {
      return {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        author: bookData.volumeInfo.authors
      };
    });
    console.log(transformedData[0]);
  }

  chooseAuthor = () => {
    //evtl. Internet
    this.fetchBooksHandler();
    const message = this.createChatBotMessage("Mein Vorschlag für dich:", {
      widget: "choices"
    });
    this.addMessageToState(message);
  };

  buyBook = () => {
    const message = this.createChatBotMessage(
      "Alles klar, ich habe das Buch in deinen Warenkorb gelegt.",
      {
        widget: "newChoices"
      }
    );
    this.addMessageToState(message);
  };

  endConv = () => {
    const message = this.createChatBotMessage(
      "Du kannst das Browserfenster nun schließen. Bis bald!"
    );
    this.addMessageToState(message);
  };

  criticizeRec = () => {
    const message = this.createChatBotMessage("Was gefällt dir nicht?", {
      widget: "checkbox"
    });
    this.addMessageToState(message);
  };

  askRec = () => {
    const message = this.createChatBotMessage(
      "Ich habe dir das Buch empfohlen, da...",
      {
        widget: "choices"
      }
    );
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz"
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  };
}

export default ActionProvider;
