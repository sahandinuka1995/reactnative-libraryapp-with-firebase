import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export default function ViewBooks({ navigation }) {
  const [data, setData] = useState({
    tableHead: ["ISBN", "Author", "Publisher", "Price"],
    tableData: [
      ["1", "2", "3", "4"],
      ["a", "b", "c", "d"],
      ["1", "2", "3", "456789"],
      ["a", "b", "c", "d"],
    ],
  });

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={data.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={data.tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
