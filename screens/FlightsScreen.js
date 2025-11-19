import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

export default function FlightsScreen({ route, navigation }) {
  const { from, to, date } = route.params;

  const flights = [
    { id: "1", name: "IndiGo 6E", time: "10:20 AM", price: "₹4,200" },
    { id: "2", name: "Air India AI", time: "1:50 PM", price: "₹5,400" },
    { id: "3", name: "Vistara UK", time: "7:15 PM", price: "₹6,100" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Flights from {from} → {to}
      </Text>
      <Text style={styles.subHeader}>Date: {date}</Text>

      <FlatList
        data={flights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.flightName}>{item.name}</Text>
            <Text style={styles.details}>{item.time}</Text>
            <Text style={styles.price}>{item.price}</Text>

            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => navigation.navigate("Booking", { flight: item })}
            >
              <Text style={styles.btnText}>Book</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 5, color: "#1E90FF" },
  subHeader: { marginBottom: 20, color: "#555" },
  card: {
    padding: 20,
    backgroundColor: "#f1f8ff",
    borderRadius: 15,
    marginBottom: 15,
  },
  flightName: { fontSize: 20, fontWeight: "bold" },
  details: { marginTop: 5, fontSize: 16 },
  price: { marginTop: 5, fontSize: 18, fontWeight: "bold", color: "#1E90FF" },
  bookButton: {
    backgroundColor: "#1E90FF",
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16, fontWeight: "bold" },
});
