import React, { Component } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> SignUp </Text>

        <View>
          <TextInput style={styles.txtInput} placeholder="Username" />
          <TextInput style={styles.txtInput} placeholder="Name" />
          <TextInput style={styles.txtInput} placeholder="email" />
          <TextInput style={styles.txtInput} placeholder="Password" />
          <TextInput style={styles.txtInput} placeholder="Repeat Password" />

          <Button title="Register" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
  },

  txtInput: {
    borderWidth: 1,
    marginBottom: 10,
  },
});
