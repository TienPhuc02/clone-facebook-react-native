import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import Header from "../src/components/Header";
import NavBar from "../src/components/NavBar";
import Post from "../src/components/Post";

const index = () => {
  return (
    <View>
      <View>
        <Header />
      </View>
      <View>
        <NavBar />
      </View>
      <View>
        <Post />
      </View>
    </View>
  );
};

export default index;
