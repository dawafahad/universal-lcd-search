import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LCDCard({ lcd }) {
  return (
    <View style={styles.card}>
      <Text style={styles.lcdName}>{lcd.lcdName}</Text>
      <Text>Brand: {lcd.brand}</Text>
      <Text>Supplier: {lcd.supplier}</Text>
      <Text>Purchase Price: {lcd.purchasePrice}</Text>
      <Text>Selling Price: {lcd.sellingPrice}</Text>
      <Text>Models: {lcd.models.join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 10
  },
  lcdName: { fontWeight: "bold", fontSize: 16 }
});
