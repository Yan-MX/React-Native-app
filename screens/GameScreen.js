import React, { useState, useRef, useEffect } from "react";
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
  const [currentGuess, setGuess] = useState(
    RandomNum(1, 100, props.userChoice)
  );
  const [round, setRound] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(round);
    }
  }),
    [currentGuess, userChoice, onGameOver];
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
      currentHigh.current = currentGuess - 1;
    } else {
      currentLow.current = currentGuess + 1;
    }
    setRound((rou) => rou + 1);
    const next = RandomNum(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setGuess(next);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Computer's Guess</Text>
        <Text style={styles.border}>{currentGuess}</Text>
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
  border: {
    borderWidth: 2,
    borderColor: "orange",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
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
