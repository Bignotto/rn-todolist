import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Header from "../../components/Header";
import Task from "../../components/Task";
import TaskInput from "../../components/TaskInput";
import { styles } from "./styles";

interface Task {
  id: number;
  done: boolean;
  description: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(task: string) {
    console.log(tasks.length);

    const newTask: Task = {
      id: Date.now(),
      done: false,
      description: task,
    };

    setTasks((t) => [...t, newTask]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TaskInput addTaskFunction={handleAddTask} />
        <ScrollView>
          {tasks.map((t) => (
            <Task description={t.description} done={t.done} key={t.id} />
          ))}
        </ScrollView>
      </View>

      <Text style={styles.text}>This is home screen</Text>
    </View>
  );
}
