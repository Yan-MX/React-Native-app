import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("./2.png")} />
      <View>
        <Text style={styles.text}>The Game is Over</Text>
        <Text style={styles.text2}>Numbers of Rounds: {props.round}</Text>
        <Text style={styles.text2}>Number was: {props.number}</Text>
        <Button title="New Game" onPress={props.restart}></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    padding: 10,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "orange",
  },
  text2: {
    textAlign: "center",
  },
  image: {
    width: 80,
    height: 120,
  },
});
export default GameOver;
