import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [num, setNum] = useState("");
  const startGameHandler = (number) => {
    setNum(number);
  };
  let content = <StartScreen onStartGame={startGameHandler} />;
  if (num !== "") {
    content = <GameScreen userChoice={num} />;
  }
  return (
    <View style={styles.screen}>
      <Header title="GUESS A NUMBER" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
