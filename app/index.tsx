import React from "react";
import { View } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function index() {
  return(
    <View>
      <ToDoForm/>
      <ToDoList/>
    </View>
  )
}