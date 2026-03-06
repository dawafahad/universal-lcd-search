import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({ value, onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search Model..."
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    margin: 10
  }
});
