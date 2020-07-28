import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
export default function App() {
  const [num, setNum] = useState("");
  const [round, setRound] = useState(0);
  const restart = () => {
    setRound(0);
    setNum("");
  };
  const startGameHandler = (number) => {
    setNum(number);
    setRound(0);
  };
  const gameOverHandler = (r) => {
    setRound(r);
  };
  let content = <StartScreen onStartGame={startGameHandler} />;
  if (num !== "" && round === 0) {
    content = <GameScreen userChoice={num} onGameOver={gameOverHandler} />;
  } else if (round > 0) {
    content = <GameOver round={round} number={num} restart={restart} />;
  }
  return (
    <View style={styles.screen}>
      <Header title="Number Guessing Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "orange",
  },
});
