import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./login.style";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "pengguna" && password === "masuk") {
      setLoggedIn(true);
    } else {
      setUsername("");
      setPassword("");
      alert("Username or Password is wrong. Please try again!");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginWrapper}>
        <TextInput
          style={styles.loginInput}
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
          placeholder="Username"
        />
        <TextInput
          style={styles.loginInput}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
