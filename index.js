/**
 * @format
 */
import "./src/configs/statusBarConfig";
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/screens/Login";
import Splash from "./src/components/Splash";
import { name as appName } from "./app.json";
import Login from "./src/screens/Login";

console.disableYellowBox = true;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: "Splash" };
    console.log("Mudar após 3 segundos");
    setTimeout(() => {
      console.log("3 segundos");
      this.setState({ currentScreen: "Login" });
    }, 3000);
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === "Splash" ? <Splash /> : <Login />;
    return mainScreen;
  }
}

AppRegistry.registerComponent(appName, () => Main);
