import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.card}>{props.chilren}</View>;
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
  },
});
export default Card;
