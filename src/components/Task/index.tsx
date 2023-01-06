import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface TaskProps {
  description: string;
  done: boolean;
  taskId: number;
  doneFunction: (taskId: number) => void;
}

const trashIcon = require("../../../assets/trash.png");
const windowWidth = Dimensions.get("window").width;

const Task = ({ description, taskId, done, doneFunction }: TaskProps) => {
  function handleTaskDone(taskId: number) {
    doneFunction(taskId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cehck_box_wrapper}>
        <TouchableOpacity onPress={() => handleTaskDone(taskId)}>
          {done ? (
            <Text style={styles.check_box_text_done}>☒</Text>
          ) : (
            <Text style={styles.check_box_text}>☐</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.task_wrapper}>
        <Text style={styles.task_text}>{description}</Text>
      </View>
      <View style={styles.delete_wrapper}>
        <Image
          source={trashIcon}
          style={{
            width: 17,
            height: 17,
          }}
        />
      </View>
    </View>
  );
};

export default Task;
