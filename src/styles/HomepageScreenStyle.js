import { StyleSheet } from "react-native";

const homepageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        paddingVertical: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    signUpText: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
    },
    userCard: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        width: "375", 
        alignSelf: "center", 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, 
    },
    userInfoHeader: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4CAF50",
        marginBottom: 5,
    },
    infoContainer: {
        borderTopWidth: 1,
        borderTopColor: "#E0E0E0",
        paddingTop: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 3,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 15,
        width: "90%", 
        alignSelf: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default homepageStyles;
