import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { registerstyle as styles } from "../styles/MainStyle"; 

const RegisterAdminScreen = ({ navigation, route }) => {
  const { role } = route.params || { role: "Admin" };

  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('');

  const handleAdminRegister = () => {
    if (!adminName || !adminEmail || !adminPassword || !confirmAdminPassword) {
      alert("Please fill in all fields before signing up!");
      return;
    }

    if (adminPassword !== confirmAdminPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Admin Details:");
    console.log("Name:", adminName);
    console.log("Email:", adminEmail);
    
    alert("Admin Registration Successful!");


    navigation.navigate("LoginScreen", { userType: role, userEmail: adminEmail });


    setAdminName('');
    setAdminEmail('');
    setAdminPassword('');
    setConfirmAdminPassword('');
  };

  return (
    <View style={styles.container}>
 
      <TouchableOpacity onPress={() => alert("Welcome to the Admin Panel!")}>
        <Image
          source={require("../assets/duolingo.png")} 
          style={{ width: 150, height: 150, alignSelf: 'center', marginBottom: 20 }} 
        />
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.signUpText}>{role} Registration</Text>
        </View>

        <TextInput
          value={adminName}
          style={styles.TextInput}
          onChangeText={setAdminName}
          placeholder="Admin Name"
        />

        <TextInput
          value={adminEmail}
          style={styles.TextInput}
          onChangeText={setAdminEmail}
          placeholder="Admin Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          value={adminPassword}
          style={styles.TextInput}
          onChangeText={setAdminPassword}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          value={confirmAdminPassword}
          style={styles.TextInput}
          onChangeText={setConfirmAdminPassword}
          placeholder="Confirm Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

       
        <TouchableOpacity style={styles.button} onPress={handleAdminRegister}>
          <Text style={styles.text}>REGISTER AS {role.toUpperCase()}</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
};

export default RegisterAdminScreen;
