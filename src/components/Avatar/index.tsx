import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Avatar = ({
  width,
  height,
  borderRadius,
}: {
  width: number;
  height: number;
  borderRadius: number;
}) => {
  const styles = StyleSheet.create({
    image: {
      width: width,
      height: height,
      borderRadius: borderRadius,
    },
  });
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../../assets/108790360.jpg")}
      />
    </View>
  );
};

export default Avatar;
