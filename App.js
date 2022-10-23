import { Component } from "react";

import AddItem from "./components/AddItem";

class App extends Component {
  state = {
    activeItem: "Select Users"
  };

  changeItem = (activeItem) => {
    this.setState({ activeItem });
  };

  render() {
    const { activeItem, changeItem } = this.state;

    return <AddItem activeItem={activeItem} changeItem={changeItem} />;
  }
}

export default App;
