import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { loadLCDs, saveLCDs } from "../utils/storage";

export default function AddScreen({ navigation }) {
  const [lcdName, setLcdName] = useState("");
  const [models, setModels] = useState("");
  const [brand, setBrand] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const addLCD = async () => {
    const data = await loadLCDs();
    data.push({
      lcdName,
      models: models.split(",").map(m => m.trim()),
      brand,
      supplier,
      purchasePrice: parseFloat(purchasePrice),
      sellingPrice: parseFloat(sellingPrice)
    });
    await saveLCDs(data);
    Alert.alert("Added Successfully");
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="LCD Name" value={lcdName} onChangeText={setLcdName} style={{borderWidth:1,padding:8,marginBottom:8}}/>
      <TextInput placeholder="Models (comma separated)" value={models} onChangeText={setModels} style={{borderWidth:1,padding:8,marginBottom:8}}/>
      <TextInput placeholder="Brand" value={brand} onChangeText={setBrand} style={{borderWidth:1,padding:8,marginBottom:8}}/>
      <TextInput placeholder="Supplier" value={supplier} onChangeText={setSupplier} style={{borderWidth:1,padding:8,marginBottom:8}}/>
      <TextInput placeholder="Purchase Price" value={purchasePrice} onChangeText={setPurchasePrice} keyboardType="numeric" style={{borderWidth:1,padding:8,marginBottom:8}}/>
      <TextInput placeholder="Selling Price" value={sellingPrice} onChangeText={setSellingPrice} keyboardType="numeric" style={{borderWidth:1,padding:8,marginBottom:8}}/>
      <Button title="Add LCD" onPress={addLCD} />
    </View>
  );
}
