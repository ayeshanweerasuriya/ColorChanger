import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const YourApp = () => {
  // State to store the background color
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  // Function to change the background color
  const changeColor = () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity style={styles.button} onPress={changeColor}>
        <Text style={styles.buttonText}>Press This</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  button: {
    alignSelf: "center",
    width: 200,
    padding: 10,
    margin: 20,
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    // Shadow
    shadowColor: "black", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android elevation
  },

  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default YourApp;
