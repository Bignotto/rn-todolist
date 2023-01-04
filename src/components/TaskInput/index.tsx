import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { theme } from "../../global/theme";

import { styles } from "./styles";

const TaskInput = () => {
  const [isFocus, setIsFocus] = useState(false);

  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  return (
    <View style={isFocus ? styles.container_active : styles.container_inactive}>
      <TextInput
        style={styles.text_input}
        placeholder="Nova tarefa"
        placeholderTextColor={theme.colors.gray300}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </View>
  );
};

export default TaskInput;
