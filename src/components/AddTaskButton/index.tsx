import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface AddTaskButtonProps {
  onClick: () => void;
  isActive: boolean;
}

const AddTaskButton = ({ onClick, isActive }: AddTaskButtonProps) => {
  // function handleAddTask() {
  //   onClick("teste");
  // }

  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.button_text}>+</Text>
    </TouchableOpacity>
  );
};

export default AddTaskButton;
