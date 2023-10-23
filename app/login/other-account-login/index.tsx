import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import BottomDrawer from "../../../src/components/DrawerChangLanguage";
import { Button } from "react-native";
import { Modal, PaperProvider, Portal } from "react-native-paper";
import { TextInput } from "react-native-paper";
const styles = StyleSheet.create({
  loginPageContainer: {
    padding: 15,
  },
  iconArrowLeft: {
    color: "white",
    marginBottom: 30,
  },
  changeLanguageLogin: {
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  selectLanguage: {
    color: "#94A2A9",
    fontSize: 20,
  },
  iconChangeLanguage: {
    color: "white",
    fontSize: 20,
  },
  logoLoginFacebookWrap: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    marginTop: 60,
  },
  logoLoginFacebookBackground: {
    backgroundColor: "white",
    width: 68, // Điều chỉnh kích thước để tạo nền trắng lớn hơn icon
    height: 68,
    borderRadius: 35, // Sử dụng borderRadius để tạo vòng tròn
    alignItems: "center",
    justifyContent: "center",
  },
  logoLoginFacebook: {
    position: "absolute",
    top: -5,
    right: 1,
    color: "#1677ff",
    fontSize: 70,
  },
  textInputForm: {
    backgroundColor: "#1C2932",
    color: "#b6b9bc",
    marginBottom: 20,
  },
  buttonLoginWithOtherAccount: {
    borderWidth: 1,
    borderColor: "#2C424E",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    borderRadius: 25,
    marginBottom: 50,
    alignItems: "center",
    backgroundColor: "#1677ff",
  },
  textInputLoginWithOtherAccount: {
    color: "white",
    fontWeight: "400",
    fontSize: 20,
  },
  textForgotPassword: {
    color: "white",
    marginBottom: 200,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
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
  modalConfirmLogout: {
    backgroundColor: "white",
    maxWidth: 300,
    padding: 20,
    position: "absolute", // Use absolute positioning to center it
    left: "50%",
    top: "50%",
    transform: [{ translateX: -150 }, { translateY: -50 }],
  },
  textButtonSignUpAccount: {
    color: "#365D82",
    fontWeight: "400",
    fontSize: 20,
  },
  noAccountInModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginTop: 20,
  },
  textMetaBottom: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
const LoginOtherAccountLogin = () => {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const handleOnPressBackRouteLogin = () => {
    router.replace("login");
  };
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };
  useEffect(() => {
    // Show the modal after 1 second
    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, 1000);

    // Hide the modal after 3 seconds
    // const hideTimeout = setTimeout(() => {
    //   setVisible(false);
    // }, 5000);

    return () => {
      // Clear the timeouts to avoid memory leaks
      clearTimeout(showTimeout);
      // clearTimeout(hideTimeout);
    };
  }, []);
  const handlePressNoAccount = () => {
    setVisible(false);
  };
  return (
    <LinearGradient
      colors={["#141615", "#112A26"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <PaperProvider>
        <View style={styles.loginPageContainer}>
          <TouchableOpacity onPress={handleOnPressBackRouteLogin}>
            <AntDesign
              style={styles.iconArrowLeft}
              name="arrowleft"
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleDrawer}
            style={styles.changeLanguageLogin}
          >
            <Text style={styles.selectLanguage}>Tiếng Việt </Text>
            <AntDesign
              style={styles.iconChangeLanguage}
              name="arrowdown"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <View>
            <BottomDrawer
              isVisible={isDrawerVisible}
              onClose={() => setDrawerVisible(false)}
            />
          </View>
          <View>
            <Portal>
              <Modal
                visible={visible}
                contentContainerStyle={styles.modalConfirmLogout}
              >
                <Text>
                  Chọn tài khoản FacceBook đã lưu với Google Smart Lock
                </Text>
                <TouchableOpacity
                  onPress={handlePressNoAccount}
                  style={styles.noAccountInModal}
                >
                  <Text style={{ color: "#1677ff" }}>
                    KHÔNG CÓ TÀI KHOẢN NÀO TRONG SỐ CÁC TÀI KHOẢN TRÊN
                  </Text>
                </TouchableOpacity>
              </Modal>
            </Portal>
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
            <TextInput
              label="Số di động hoặc email"
              value={text}
              onChangeText={(text) => setText(text)}
              style={styles.textInputForm}
            />
          </View>
          <View>
            <TextInput
              label="Mật khẩu"
              value={text}
              onChangeText={(text) => setText(text)}
              style={styles.textInputForm}
            />
          </View>
          <TouchableOpacity style={styles.buttonLoginWithOtherAccount}>
            <Text style={styles.textInputLoginWithOtherAccount}>Đăng nhập</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.textForgotPassword}>Bạn quên mật khẩu ư?</Text>
          </View>
          <View style={styles.buttonSignUpAccount}>
            <Text style={styles.textButtonSignUpAccount}>
              Tạo tài khoản mới
            </Text>
          </View>
          <Text style={styles.textMetaBottom}>Meta</Text>
        </View>
      </PaperProvider>
    </LinearGradient>
  );
};

export default LoginOtherAccountLogin;
