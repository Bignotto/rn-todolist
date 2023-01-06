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
    const newTask: Task = {
      id: Date.now(),
      done: false,
      description: task,
    };

    const undoneTasks = tasks.filter((t) => t.done === false);
    undoneTasks.push(newTask);

    const doneTasks = tasks.filter((t) => t.done === true);

    setTasks(undoneTasks.concat(doneTasks));
  }

  function handleTaskDone(taskId: number) {
    const filteredTasks = tasks.filter((t) => t.id !== taskId);
    const [theTask] = tasks.filter((t) => t.id === taskId);

    filteredTasks.push({
      description: theTask.description,
      done: !theTask.done,
      id: theTask.id,
    });

    setTasks(
      filteredTasks
        .filter((t) => t.done === false)
        .concat(filteredTasks.filter((t) => t.done === true))
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TaskInput addTaskFunction={handleAddTask} />
        <ScrollView>
          {tasks.map((t) => (
            <Task
              description={t.description}
              done={t.done}
              key={t.id}
              taskId={t.id}
              doneFunction={handleTaskDone}
            />
          ))}
        </ScrollView>
      </View>

      <Text style={styles.text}>This is home screen</Text>
    </View>
  );
}
