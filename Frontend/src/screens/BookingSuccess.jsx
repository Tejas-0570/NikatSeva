import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function BookingSuccess({ navigation }) {
    const handleDone = () => {
        navigation.navigate("MainTabs");
    }
  return (
    <View style={styles.container}>
      <MaterialIcons name="check-circle" size={90} color="#16A34A" />
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.subtitle}>
        Your service has been successfully booked.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleDone}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginVertical: 10,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#192D3C",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
