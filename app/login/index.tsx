import React from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "../../src/components/Avatar";
import { router } from "expo-router";
let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  loginPageContainer: {
    height: ScreenHeight,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  iconManageLoginWrap: {
    alignSelf: "flex-end",
    marginBottom: 80,
  },
  iconManageLogin: {
    fontSize: 41,
  },
  logoLoginFacebookWrap: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  logoLoginFacebookBackground: {
    backgroundColor: "white",
    width: 50, // Điều chỉnh kích thước để tạo nền trắng lớn hơn icon
    height: 48,
    borderRadius: 35, // Sử dụng borderRadius để tạo vòng tròn
    alignItems: "center",
    justifyContent: "center",
  },
  logoLoginFacebook: {
    position: "absolute",
    top: -5,
    right: 0,
    color: "#1677ff",
    fontSize: 51,
  },
  itemsAccountLogin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderRadius: 15,
    marginBottom: 25,
    backgroundColor: "#1C2932",
  },
  nameAccountUserLogin: {
    color: "white",
    fontSize: 20,
  },
  buttonLoginWithOtherAccount: {
    borderWidth: 1,
    borderColor: "#2C424E",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 200,
  },
  textInputLoginWithOtherAccount: {
    color: "white",
    fontWeight: "400",
    fontSize: 20,
  },
  buttonSignUpAccount: {
    borderWidth: 1,
    borderColor: "#365D82",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  textButtonSignUpAccount: {
    color: "#365D82",
    fontWeight: "400",
    fontSize: 20,
  },
  textMetaBottom: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
const LoginPage = () => {
  const handleClickButtonLoginWithOtherAccount = () => {
    router.replace("/login/other-account-skeleton");
  };
  return (
    <LinearGradient
      colors={["#141615", "#112A26"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.loginPageContainer}>
        <View style={styles.iconManageLoginWrap}>
          <AntDesign
            style={styles.iconManageLogin}
            name="setting"
            size={24}
            color="white"
          />
        </View>
        <View style={styles.logoLoginFacebookWrap}>
          <View style={styles.logoLoginFacebookBackground}>
            <FontAwesome5
              style={styles.logoLoginFacebook}
              name="facebook"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View>
          <View style={styles.itemsAccountLogin}>
            <Avatar height={70} width={70} borderRadius={50} />
            <Text style={styles.nameAccountUserLogin}>Gumayusi</Text>
          </View>
          <View style={styles.itemsAccountLogin}>
            <Avatar height={70} width={70} borderRadius={50} />
            <Text style={styles.nameAccountUserLogin}>Gumayusi</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleClickButtonLoginWithOtherAccount}
          style={styles.buttonLoginWithOtherAccount}
        >
          <Text style={styles.textInputLoginWithOtherAccount}>
            Đăng nhập bằng tài khoản khác
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonSignUpAccount}>
          <Text style={styles.textButtonSignUpAccount}>Tạo tài khoản mới</Text>
        </View>
        <Text style={styles.textMetaBottom}>Meta</Text>
      </View>
    </LinearGradient>
  );
};

export default LoginPage;
