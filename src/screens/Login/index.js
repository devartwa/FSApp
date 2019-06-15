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
import Icon from "react-native-vector-icons/FontAwesome5";
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
              name={"envelope"}
              size={25}
              color={"#999999"}
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder={"E-mail"}
              returnKeyType="next"
              autoCorrect={false}
              placeholderTextColor={"#999999"}
              onSubmitEditing={() => this.refs.txtPassword.focus()}
            />
            <Image
              style={styles.linha}
              source={require("../../assets/img/linha.png")}
            />
          </View>
          <View>
            <Icon
              style={styles.inputIcon}
              name={"lock"}
              size={25}
              color={"#999999"}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.showPassword}
              placeholder={"Senha"}
              returnKeyType="go"
              autoCorrect={false}
              placeholderTextColor={"#999999"}
              ref={"txtPassword"}
            />
            <Image
              style={styles.linha}
              source={require("../../assets/img/linha.png")}
            />
            <TouchableOpacity
              onPress={this.showPassword.bind(this)}
              style={styles.btnEye}
            >
              <Icon
                name={this.state.press == false ? "eye" : "eye-slash"}
                size={25}
                color={"#999999"}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.recuperarsenha}>Esqueci minha senha</Text>
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
          <Text style={styles.txtReserved}>©2019 All Right Reserved</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
