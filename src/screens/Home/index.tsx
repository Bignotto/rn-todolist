import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import AddTaskButton from "../../components/AddTaskButton";
import Header from "../../components/Header";
import TaskInput from "../../components/TaskInput";
import { styles } from "./styles";

interface Task {
  id: number;
  isComplete: Boolean;
  description: String;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(task: string) {
    console.log(`function add task on home screen -> ${task}`);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TaskInput addTaskFunction={handleAddTask} />
      </View>
      <Text style={styles.text}>This is home screen</Text>
    </View>
  );
}
