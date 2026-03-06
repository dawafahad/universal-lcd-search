import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "LCD_STORAGE";

const initialData = [
  {
    lcdName: "Samsung 6.5 inch OLED",
    models: ["Samsung A52", "Samsung A72"],
    brand: "Samsung",
    supplier: "TechSupplier",
    purchasePrice: 1200,
    sellingPrice: 1500
  },
  {
    lcdName: "Apple 6.1 inch OLED",
    models: ["iPhone 13", "iPhone 14"],
    brand: "Apple",
    supplier: "iSupplies",
    purchasePrice: 2500,
    sellingPrice: 3000
  }
];

export const loadLCDs = async () => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  if (data) return JSON.parse(data);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  return initialData;
};

export const saveLCDs = async (lcdArray) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lcdArray));
};
