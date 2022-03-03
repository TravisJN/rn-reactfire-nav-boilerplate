import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Authentication from "../components/Authentication";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  authenticationContainer: {
    width: "30%",
    minWidth: 500,
    height: "25%",
    marginBottom: 100,
  },
  titleText: {
    fontSize: 28,
    color: "#363636",
    paddingBottom: 10,
  },
});

export default function Login({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.titleText}>Welcome</Text>
      <View style={styles.authenticationContainer}>
        <Authentication />
      </View>
    </ScrollView>
  );
}
