import React from "react";

import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps{
  buttonTitle:string;
}

export function Button({buttonTitle, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
