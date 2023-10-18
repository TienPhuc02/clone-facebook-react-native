import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Avatar = ({
  width,
  height,
  borderRadius,
  shadowColor,
}: {
  width: number;
  height: number;
  borderRadius: number;
  shadowColor?: string;
}) => {
  const styles = StyleSheet.create({
    image: {
      width: width,
      height: height,
      borderRadius: borderRadius,
      shadowColor: shadowColor,
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
