//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Task = () => {
  return (
    <View style={styles.container}>
      <View>check box</View>
      <View>
        <Text>Task</Text>
      </View>
      <View>delete btn</View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Task;