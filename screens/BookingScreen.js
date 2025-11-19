import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function BookingScreen({ route, navigation }) {
  const { flight } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Confirmed! 🎉</Text>

      <View style={styles.box}>
        <Text style={styles.label}>Airline: {flight.name}</Text>
        <Text style={styles.label}>Time: {flight.time}</Text>
        <Text style={styles.label}>Price: {flight.price}</Text>
        <Text style={styles.pnr}>PNR: {Math.floor(Math.random() * 900000 + 100000)}</Text>
      </View>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.homeText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#1E90FF" },
  box: {
    padding: 20,
    width: "90%",
    backgroundColor: "#f1f8ff",
    borderRadius: 15,
    marginBottom: 40,
  },
  label: { fontSize: 18, marginBottom: 10 },
  pnr: { fontSize: 20, marginTop: 10, color: "#1E90FF", fontWeight: "bold" },
  homeButton: { backgroundColor: "#1E90FF", padding: 14, borderRadius: 20, width: "60%" },
  homeText: { color: "white", textAlign: "center", fontSize: 18, fontWeight: "bold" },
});
