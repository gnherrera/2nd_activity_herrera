import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { registerstyle as styles } from "../styles/MainStyle";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ gestureEnabled: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/duolingo.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to Duolingo</Text>
      <Text style={styles.subtitle}>The free, fun, and effective way to learn a language!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginScreen", { userType: "regular" })}
      >
        <Text style={styles.buttonText}>Click to Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 10, backgroundColor: "#FF5733" }]}
        onPress={() => navigation.navigate("RegisterAdminScreen", { role: "admin" })}
      >
        <Text style={styles.buttonText}>Register as Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
