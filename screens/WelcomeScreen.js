import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" }}
      style={styles.bg}
      blurRadius={2}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>AIRLINE RESERVATION</Text>
        <Text style={styles.subtitle}>Book your flights easily</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Get Started ✈️</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center" },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: { fontSize: 20, color: "white", fontWeight: "bold" },
});
