import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login/Login";
import AddBook from "./src/components/AddBook/AddBook";
import ViewBooks from "./src/components/ViewBooks/ViewBooks";

export default function App() {
  return (
    <View style={styles.container}>
      <ViewBooks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
