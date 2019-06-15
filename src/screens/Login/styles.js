import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5"
  },
  logoContainer: {
    marginTop: 120,
    marginBottom: 60,
    alignSelf: "center"
  },
  input: {
    width: WIDTH - 55,
    height: 40,
    fontSize: 16,
    paddingLeft: 45,
    color: "#000",
    marginTop: 10,
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 15,
    left: 37
  },
  btnEye: {
    position: "absolute",
    top: 15,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 60,
    fontSize: 16,
    backgroundColor: "#8C0000",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 8,
    alignSelf: "center"
  },
  txt: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700"
  },
  cadastrese: {
    color: "#8C0000",
    marginTop: 15,
    marginRight: 15,
    fontSize: 16
  },
  orcamento: {
    color: "#8C0000",
    marginTop: 15,
    marginLeft: 15,
    fontSize: 16
  },
  containerAdicionais: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16
  },
  linha: {
    width: WIDTH - 55,
    alignSelf: "center"
  },
  recuperarsenha: {
    fontSize: 16,
    color: "#8C0000",
    marginTop: 15,
    alignSelf: "flex-end",
    marginRight: 32
  },
  txtReserved: {
    marginTop: 25,
    alignSelf: "center",
    color: "#999999"
  }
});

export default styles;
