import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Switch, Image } from "react-native";
import { registerstyle as styles } from "../styles/MainStyle";

const SignupScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handlepress = () => {
    if (!name || !email || !password || !confirmpassword) {
      alert("Please fill in all fields before signing up!");
      return;
    }

    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!isChecked) {
      alert("You must agree to the terms and conditions before signing up.");
      return;
    }

    alert("Sign Up Successful!");


    navigation.navigate("LoginScreen", { userType: "newUser", userEmail: email });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsChecked(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/duolingo.png")} style={{ width: 150, height: 150, alignSelf: "center", marginBottom: 20 }} />

      <View style={styles.signUpContainer}>
        <TextInput value={name} style={styles.TextInput} onChangeText={setName} placeholder="Name" />
        <TextInput value={email} style={styles.TextInput} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
        <TextInput value={password} style={styles.TextInput} onChangeText={setPassword} placeholder="Password" secureTextEntry={true} />
        <TextInput value={confirmpassword} style={styles.TextInput} onChangeText={setConfirmPassword} placeholder="Confirm Password" secureTextEntry={true} />

        <View style={styles.switchContainer}>
          <Switch value={isChecked} onValueChange={setIsChecked} />
          <Text style={styles.switchText}>I agree to the terms and conditions</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlepress}>
          <Text style={styles.text}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
