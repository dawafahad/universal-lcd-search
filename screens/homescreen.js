import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import LCDCard from "../components/LCDCard";
import { loadLCDs } from "../utils/storage";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [lcds, setLcds] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchLCDs = async () => {
      const data = await loadLCDs();
      setLcds(data);
      setFiltered(data);
    };
    fetchLCDs();
  }, []);

  useEffect(() => {
    const f = lcds.filter(lcd =>
      lcd.models.some(model =>
        model.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFiltered(f);
  }, [search]);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar value={search} onChange={setSearch} />
      <FlatList
        data={filtered}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => <LCDCard lcd={item} />}
      />
    </View>
  );
}
