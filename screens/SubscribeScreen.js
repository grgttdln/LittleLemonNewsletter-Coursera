import * as React from "react";
import { View, Text, Image, StyleSheet, TextInput, Alert } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { ValidateEmail } from "../utils";

const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");

  const handlePress = () => {
    if (!ValidateEmail(email)) {
      Alert.alert("Please enter a valid email address");
      return;
    } else {
      Alert.alert("Thank you for subscribing, stay tuned!");
      setEmail("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={require("../assets/little-lemon-logo-grey.png")}
        />
        <Text style={styles.title}>
          Subscribe to our newsletter to get the latest delicious recipes!
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          placeholder="Type your email"
          value={email}
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Subscribe</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    padding: 20,
    fontSize: 20,
    textAlign: "center",
  },
  textInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#3e524b",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default SubscribeScreen;
