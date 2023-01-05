import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray500,
  },

  content: {
    flex: 1,
    padding: 24,
    marginTop: -50,
  },

  task_input_wrapper: {
    height: 54,
    flexDirection: "row",
  },

  text: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray100,
  },
});
