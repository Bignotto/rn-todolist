import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container_inactive: {
    flex: 1,
    backgroundColor: theme.colors.gray500,
    borderColor: theme.colors.gray700,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  container_active: {
    flex: 1,
    backgroundColor: theme.colors.gray500,
    borderColor: theme.colors.purple_dark,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  text_input: {
    color: theme.colors.gray100,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
  },
});
