import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/theme";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray500,
  },

  content: {
    flex: windowWidth,
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
