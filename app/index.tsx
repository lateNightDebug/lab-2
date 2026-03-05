import React from "react";
import { View } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState } from "react";

export default function index() {
  const [tasks,setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog'
])
const addTask = (task:string)=>{setTasks([...tasks,task])}

  return(
    <View>
      <ToDoForm/>
      <ToDoList tasks={tasks}/>
    </View>
  )
}