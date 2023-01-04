import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
  },

  content: {
    flex: 1,
    padding: 24,
  },

  task_input_wrapper: {
    height: 54,
  },

  text: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray100,
  },
});
