import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>LOGIN</Text>

          <View style={styles.formCard}>
            <TextInput placeholder="Username" style={styles.txtInput} />
            <TextInput placeholder="Password" style={styles.txtInput} />

            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.btnLoginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.social}>
            <TouchableOpacity style={styles.btnSocialG}>
              <Text style={styles.btnSocialText}>G</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSocialF}>
              <Text style={styles.btnSocialText}>F</Text>
              <FontAwesomeIcon icon={"faLock"} size={40} color={"blue"} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSocialT}>
              <Text style={styles.btnSocialText}>T</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 50,
  },
  formCard: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLogin: {
    backgroundColor: "red",
    width: 300,
    alignItems: "center",
    height: 30,
    justifyContent: "center",
    borderRadius: 5,
  },
  txtInput: {
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  btnLoginText: {
    color: "#fff",
  },
  social: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnSocialG: {
    borderRadius: 100,
    backgroundColor: "#34A853",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },

  btnSocialF: {
    borderRadius: 100,
    backgroundColor: "#0574E7",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },

  btnSocialT: {
    borderRadius: 100,
    backgroundColor: "#1DA1F2",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },

  btnSocialText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
