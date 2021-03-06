import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ViewBooks from "../ViewBooks/ViewBooks";
import AddBook from "../AddBook/AddBook";

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ViewBooks" component={ViewBooks} />
      <Tab.Screen name="AddBook" component={AddBook} />
    </Tab.Navigator>
  );
}
