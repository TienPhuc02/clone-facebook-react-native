import React from "react";
import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  loginPageContainer: {
    backgroundColor: "black",
  },
});
const LoginPage = () => {
  return (
    <View style={styles.loginPageContainer}>
      <Text>LoginPage</Text>
    </View>
  );
};

export default LoginPage;
