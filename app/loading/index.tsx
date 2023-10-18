import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blackBackground: {
    backgroundColor: "#050705", // Dark green background color
  },
  blueActivityIndicator: {
    color: "white", // Water blue color
  },
});

const LoadingLogout = () => {
  const [backgroundColorStyle, setBackgroundColorStyle] = useState({});
  const [activityIndicatorColor, setActivityIndicatorColor] =
    useState("#0000ff");
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setBackgroundColorStyle(styles.blackBackground); // Change background to dark green
      setActivityIndicatorColor("white"); // Change ActivityIndicator color to water blue
      setShowText(false); // Hide the text
      setTimeout(() => {
        router.replace("login"); 
      }, 2000);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <View style={[styles.container, backgroundColorStyle]}>
      <View>
        <ActivityIndicator size="large" color={activityIndicatorColor} />
        {showText && <Text>Đang đăng xuất....</Text>}
      </View>
    </View>
  );
};

export default LoadingLogout;
