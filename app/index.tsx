import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>page</Text>
      <Link href="/home">home</Link>
    </View>
  );
};

export default index;
