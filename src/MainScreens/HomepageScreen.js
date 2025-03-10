import React, { useState, useEffect } from "react";
import { 
  Text, 
  View, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity, 
  Image 
} from "react-native";
import homepageStyles from "../styles/HomepageScreenStyle";
import api from "../api";

const HomePageScreen = ({ navigation, route }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { username, token } = route.params || { username: "Guest", token: "" };

    useEffect(() => {
        navigation.setOptions({ gestureEnabled: false }); 
        
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users'); 
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [navigation]);

    const handleLogout = () => {
        navigation.replace("LoginScreen");
    };

    const handleUserPress = (user) => {
        navigation.navigate("UserDetailScreen", { user });
    };

    if (loading) {
        return (
            <View style={homepageStyles.container}>
                <ActivityIndicator size="large" color="#4CAF50" />
                <Text style={homepageStyles.subtitle}>Loading Users...</Text>
            </View>
        );
    }

    return (
        <View style={homepageStyles.container}>
            <Image style={homepageStyles.logo} source={require("../assets/duolingo.png")} />
            <Text style={homepageStyles.signUpText}>Welcome, {username}!</Text>
            <Text style={homepageStyles.subtitle}>Users List</Text>

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleUserPress(item)}>
                        <View style={homepageStyles.userCard}>
                            <Text style={homepageStyles.userInfoHeader}>User Info</Text>
                            <View style={homepageStyles.infoContainer}>
                                <Text style={homepageStyles.title}>
                                    🧑 {item.name.firstname} {item.name.lastname}
                                </Text>
                                <Text style={homepageStyles.subtitle}>📧 {item.email}</Text>
                                <Text style={homepageStyles.subtitle}>📞 {item.phone}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 20 }}  
            />

            <TouchableOpacity style={homepageStyles.button} onPress={handleLogout}>
                <Text style={homepageStyles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomePageScreen;
