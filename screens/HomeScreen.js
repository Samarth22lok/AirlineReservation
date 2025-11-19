import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Flights</Text>

      <TextInput
        placeholder="From"
        style={styles.input}
        value={from}
        onChangeText={setFrom}
      />

      <TextInput
        placeholder="To"
        style={styles.input}
        value={to}
        onChangeText={setTo}
      />

      <TextInput
        placeholder="Travel Date (DD-MM-YYYY)"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Flights", { from, to, date })}
      >
        <Text style={styles.buttonText}>Search ✈️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: "white" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30, color: "#1E90FF" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: { textAlign: "center", color: "white", fontSize: 20, fontWeight: "bold" },
});
