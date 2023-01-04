import { Text, View } from "react-native";
import Header from "../../components/Header";
import TaskInput from "../../components/TaskInput";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.task_input_wrapper}>
          <TaskInput />
        </View>
      </View>
      <Text style={styles.text}>This is home screen</Text>
    </View>
  );
}
