import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: null };
    setInterval(() => {
      this.setState({ timer: this.state.timer });
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/img/logo.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  txt: {
    fontSize: 20,
    color: "#000"
  }
});
