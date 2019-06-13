import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E5E5E5"
  },
  logoContainer: {
    marginTop: 120,
    marginBottom: 60
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
    top: 13,
    left: 37
  },
  btnEye: {
    position: "absolute",
    top: 13,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 60,
    fontSize: 16,
    backgroundColor: "#8C0000",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 8
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
    marginRight: 15
  },
  orcamento: {
    color: "#8C0000",
    marginTop: 15,
    marginLeft: 15
  },
  containerAdicionais: {
    flexDirection: "row"
  },
  containerSociais: {
    flexDirection: "row"
  },
  instagram: {
    marginTop: 50,
    marginLeft: 15
  },
  facebook: {
    marginTop: 50,
    marginRight: 15
  }
});

export default styles;
