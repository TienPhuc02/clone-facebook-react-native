import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import Header from "../src/components/Header";

const index = () => {
  return (
    <View>
      <View>
        <Header />
      </View>
      <Link href="/home">home</Link>
    </View>
  );
};

export default index;
