import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import Avatar from "../Avatar";
const styles = StyleSheet.create({
  postContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 15,
    paddingLeft: 15,
  },
  avatarPost: {
    paddingRight: 10,
  },
});
const Post = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.avatarPost}>
        <Avatar width={40} height={40} borderRadius={100} />
      </View>
      <View>
        <Text>a</Text>
      </View>
      <View>
        <Text>a</Text>
      </View>
    </View>
  );
};

export default Post;
