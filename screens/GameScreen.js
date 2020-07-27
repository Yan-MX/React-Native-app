import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

const RandomNum = (min, max, exclude) => {
  const Rand = Math.floor(Math.random() * (max - min)) + min;
  if (Rand === exclude) {
    return RandomNum(min, max, exclude);
  } else {
    return Rand;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setGuess] = useState(RandomNum(1, 99, props.userChoice));
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Opponent's Guess</Text>
        <Text>{currentGuess}</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.b}
            title="Lower"
            onPress={() => nextGuessHandler("lower")}
          ></Button>
          <Button
            style={styles.b}
            title="Higher"
            onPress={() => nextGuessHandler("higher")}
          ></Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 50,
  },
  b: {
    borderWidth: 1,
    borderColor: "orange",
  },
});
export default GameScreen;
