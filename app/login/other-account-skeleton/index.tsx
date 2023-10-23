import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Skeleton } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
const styles = StyleSheet.create({
  containerSkeleton: {
    padding: 15,
  },
  iconArrowLeft: {
    color: "white",
  },
  skeletonLogoFacebook: {
    paddingTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    color: "#293948",
  },
  skeletonFormLogin: {
    marginRight: 30,
  },
  fullScreenSkeleton: {
    width: "100%",
    margin: 20,
    borderRadius: 15,
    color: "#293948",
    paddingTop: 30,
    paddingBottom: 30,
  },
});
const LoginOtherAccountSkeleton = () => {
  const handleOnPressBackRouteLogin = () => {
    router.replace("login");
  };
  useEffect(()=>{
    setTimeout(()=>{
      router.replace("/login/other-account-login")
    },2000)
  },[])
  return (
    <LinearGradient
      colors={["#141615", "#112A26"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.containerSkeleton}>
        <TouchableOpacity onPress={handleOnPressBackRouteLogin}>
          <AntDesign
            style={styles.iconArrowLeft}
            name="arrowleft"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.skeletonLogoFacebook}>
          <Skeleton circle width={50} height={50} />
        </View>
        <View style={styles.skeletonFormLogin}>
          <Skeleton style={styles.fullScreenSkeleton} />
          <Skeleton style={styles.fullScreenSkeleton} />
          <Skeleton style={styles.fullScreenSkeleton} />
        </View>
      </View>
    </LinearGradient>
  );
};
export default LoginOtherAccountSkeleton;
