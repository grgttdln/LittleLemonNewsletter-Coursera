import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Newsletter</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    padding: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "85%",
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#3e524b",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default WelcomeScreen;
