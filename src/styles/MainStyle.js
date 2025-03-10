import { StyleSheet } from "react-native";

export const registerstyle = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", 
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  signUpContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    alignSelf: "center",
    alignItems: "center", 
    justifyContent: "center", 
  },

  signUpText: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    paddingVertical: 10,
    marginBottom: 10,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: "#ccc",  
    width: "100%",        
    fontSize: 16,
    marginBottom: 15,
    height: 45,         
    paddingHorizontal: 15,
    borderRadius: 8,    
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",  
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.1,  
    shadowRadius: 4,  
    elevation: 2,     
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  switchText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
  },

  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
});
