import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

import { styles } from "./styles";

interface TaskProps {
  description: string;
  done: boolean;
}

const trashIcon = require("../../../assets/trash.png");
const windowWidth = Dimensions.get("window").width;

const Task = ({ description, done }: TaskProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cehck_box_wrapper}>
        {done ? (
          <Text style={styles.check_box_text_done}>☒</Text>
        ) : (
          <Text style={styles.check_box_text}>☐</Text>
        )}
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
