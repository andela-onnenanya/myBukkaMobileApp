import React from "react";
import store from "./data_Container/store";
import { Font } from "expo";
import Start from "./components/navigator/Navigation";
import { WebView } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
      "Comfortaa-Light": require("./assets/fonts/Comfortaa-Light.ttf"),
      "Comfortaa-Regular": require("./assets/fonts/Comfortaa-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <Start store={store} /> : null;
  }
}
