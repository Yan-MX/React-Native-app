import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Color from "../components/Colors";
const Input2 = (props) => (
  <TextInput {...props} style={{ ...styles.inp, ...props.style }} />
);
const styles = StyleSheet.create({
  inp: {
    height: 30,
    borderColor: Color.primary,
    borderWidth: 1,
    marginVertical: 10,
    width: "60%",
  },
});
export default Input2;
