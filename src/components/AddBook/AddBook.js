import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class AddBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Add Book </Text>

        <View>
          <TextInput style={styles.txtInput} placeholder="ISBN Number" />
          <TextInput style={styles.txtInput} placeholder="Author" />
          <TextInput style={styles.txtInput} placeholder="Publisher" />
          <TextInput style={styles.txtInput} placeholder="Price" />

          <Button title="Save" />
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
