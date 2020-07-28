import React, { useState } from "react";
import Card from "../components/Card";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Color from "../components/Colors";
import Input2 from "./Input";
export default StartScreen = (props) => {
  const [value, setValue] = useState("");
  const numberHandler = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };
  const [confirm, setConfirm] = useState(false);
  const [selectedNum, setSelected] = useState("");
  const resetInputHandler = () => {
    setValue("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirm(true);
    setSelected(chosenNumber);
    setValue("");
    Keyboard.dismiss();
  };
  let confirmOutput = (
    <View style={styles.card}>
      <Text>Select a number:</Text>
      <Input2
        autoCorrect={false}
        blurOnSubmit
        keyboardType="number-pad"
        maxLength={2}
        value={value}
        onChangeText={numberHandler}
      />
      <View style={styles.button}>
        <Button
          title="Reset"
          color={Color.primary}
          onPress={resetInputHandler}
        ></Button>
        <Button title="Confirm" onPress={confirmInputHandler}></Button>
      </View>
    </View>
  );
  if (confirm) {
    confirmOutput = (
      <View style={styles.card}>
        <Text>Chosen Number: </Text>
        <View style={styles.confirmN}>
          <Text>{selectedNum}</Text>
        </View>
        <Button
          title="Start Game"
          color={Color.primary}
          onPress={() => props.onStartGame(selectedNum)}
        ></Button>
      </View>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>START A NEW GAME</Text>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
  },
  button: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  confirmN: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Color.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
