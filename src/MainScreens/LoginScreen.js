import React, { useState } from "react";
import { 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ToastAndroid, 
  ScrollView 
} from "react-native";
import { registerstyle as styles } from "../styles/MainStyle"; 
import api from "../api";  

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginPress = async () => {
        if (!username || !password) {
            ToastAndroid.show("Please fill in all fields!", ToastAndroid.SHORT);
            return;
        }

        try {
            const response = await api.post("/auth/login", {
                username: username,
                password: password,
            });

            const token = response.data.token;
            console.log("Token:", token);
            ToastAndroid.show("Login Successful! 🎉", ToastAndroid.SHORT);
            
   
            navigation.replace("HomePageScreen", { username, token });

        } catch (error) {
            console.error("Login Error:", error.response?.data || error);
            ToastAndroid.show("Invalid Username or Password", ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
         
            <Image
                style={styles.logo}
                source={require("../assets/duolingo.png")} 
            />

            <View style={styles.signUpContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.signUpText}>Log In</Text>
                    
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                   
                    <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen", { role: "User" })}>
                        <Text style={styles.switchText}>
                            Don't have an account? <Text style={{ fontWeight: "bold", color: "#4CAF50" }}>Sign up Here</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

export default LoginScreen;
