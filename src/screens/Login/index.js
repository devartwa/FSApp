import React, { Component } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: true,
      press: false
    };
  }

  showPassword = () => {
    if (this.state.press == false) {
      this.setState({ showPassword: false, press: true });
    } else {
      this.setState({ showPassword: true, press: false });
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require("../../assets/img/logo.png")} />
          </View>
          <View>
            <Icon
              style={styles.inputIcon}
              name={"user"}
              size={25}
              color={"#8C0000"}
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder={"Usuário/E-mail"}
              returnKeyType="next"
              autoCorrect={false}
              placeholderTextColor={"#000"}
              underlineColorAndroid={"#8C0000"}
              onSubmitEditing={() => this.refs.txtPassword.focus()}
            />
          </View>
          <View>
            <Icon
              style={styles.inputIcon}
              name={"lock"}
              size={25}
              color={"#8C0000"}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.showPassword}
              placeholder={"Senha"}
              returnKeyType="go"
              autoCorrect={false}
              placeholderTextColor={"#000"}
              underlineColorAndroid={"#8C0000"}
              ref={"txtPassword"}
            />
            <TouchableOpacity
              onPress={this.showPassword.bind(this)}
              style={styles.btnEye}
            >
              <Icon
                name={this.state.press == false ? "eye" : "eye-slash"}
                size={25}
                color={"#8C0000"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.txt}>ENTRAR</Text>
          </TouchableOpacity>
          <View style={styles.containerAdicionais}>
            <TouchableOpacity>
              <Text style={styles.cadastrese}>Quero me cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.orcamento}>Solicitar Orçamento</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerSociais}>
            <TouchableOpacity
              style={styles.facebook}
              onPress={() => Linking.openURL("https://www.facebook.com")}
            >
              <Icon name={"facebook-square"} size={30} color={"#8C0000"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.instagram}
              onPress={() => Linking.openURL("https://www.instagram.com")}
            >
              <Icon name={"instagram"} size={30} color={"#8C0000"} />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 25 }}>©2019 All Right Reserved</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
