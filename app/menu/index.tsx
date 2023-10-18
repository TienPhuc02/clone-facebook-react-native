import { useEffect, useState } from "react";
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import NavBar from "../../src/components/NavBar";
import Header from "../../src/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Avatar from "../../src/components/Avatar";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import { router } from "expo-router";
const styles = StyleSheet.create({
  containerMenuScreen: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#f8f8f8",
    marginBottom: 20,
  },
  headerMenuScreenContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  iconsHeaderMenuScreen: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  iconItemHeaderMenuScreen: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4E6EB",
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 5,
  },
  containerProfileMenuScreen: {
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.8)", // Specify shadow color
    shadowOffset: { width: 10, height: 10 }, // Specify shadow offset
    shadowRadius: 3, // Specify shadow radius
    elevation: 5,
    paddingTop: 10,
    borderRadius: 10,
    paddingRight: 15,
    marginBottom: 30,
    paddingLeft: 10,
  },
  containerYourProfile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#E4E6EB",
    paddingBottom: 20,
  },
  yourProfileView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  nameUser: {
    fontSize: 20,
    fontWeight: "500",
  },
  iconDropDownWrap: {
    backgroundColor: "#E4E6EB",
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconDropDown: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },
  containerCreateProfileOther: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 15,
    paddingTop: 15,
  },
  iconCreateProfileOtherWrap: {
    backgroundColor: "#E4E6EB",
    width: 30,
    height: 30,
    borderRadius: 100,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  textCreateProfileOther: {
    fontSize: 20,
    fontWeight: "500",
    color: "#aca9a9",
  },
  containerGridColumnMenuContent: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 30,
  },
  containerGridRowMenuContent: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  ItemsRowMenuContent: {
    width: "50%",
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.8)", // Specify shadow color
    shadowOffset: { width: 10, height: 10 }, // Specify shadow offset
    shadowRadius: 3, // Specify shadow radius
    elevation: 5,
    paddingLeft: 15,
    borderRadius: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  TexItemsRowMenuContent: {
    fontWeight: "500",
    fontSize: 15,
  },
  buttonViewOther: {
    backgroundColor: "#E4E6EB",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textViewOther: {
    fontSize: 15,
    fontWeight: "600",
  },
  divReport: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#E4E6EB",
    paddingTop: 20,
    paddingBottom: 20,
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
  textModalConfirm: {
    fontSize: 20,
  },
});
const MenuScreen = () => {
  const [translateYAnim] = useState(new Animated.Value(0));
  const [headerOpacityAnim] = useState(new Animated.Value(1)); // Độ trong suốt của Header
  const [displayHeader, setDisplayHeader] = useState(true);
  const [visible, setVisible] = React.useState(false);

  const handlePressButtonLogout = () => {
    router.replace("/loading");
  };
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  useEffect(() => {
    if (displayHeader) {
      // Dịch chuyển cả `Header` và các phần còn lại
      Animated.timing(translateYAnim, {
        toValue: -50,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start(() => {
        // Khi hoàn thành hiệu ứng dịch chuyển, ẩn Header
        Animated.timing(headerOpacityAnim, {
          toValue: 0,
          duration: 0, // Không cần thời gian
          useNativeDriver: false,
        }).start();
      });
    }
  }, [displayHeader]);

  return (
    <PaperProvider>
      <ScrollView>
        <Animated.View
          style={{
            transform: [
              {
                translateY: translateYAnim,
              },
            ],
          }}
        >
          <Animated.View style={{ opacity: headerOpacityAnim }}>
            <Header />
          </Animated.View>
          <View>
            <NavBar />
          </View>
          <View style={styles.containerMenuScreen}>
            <View style={styles.headerMenuScreenContainer}>
              <View>
                <Text style={{ fontSize: 25, fontWeight: "700" }}>Menu</Text>
              </View>
              <View style={styles.iconsHeaderMenuScreen}>
                <View style={styles.iconItemHeaderMenuScreen}>
                  <Ionicons name="settings-sharp" size={24} color="black" />
                </View>
                <View style={styles.iconItemHeaderMenuScreen}>
                  <Entypo name="magnifying-glass" size={24} color="black" />
                </View>
              </View>
            </View>
            <View style={styles.containerProfileMenuScreen}>
              <View style={styles.containerYourProfile}>
                <View style={styles.yourProfileView}>
                  <Avatar
                    width={40}
                    height={40}
                    borderRadius={100}
                    shadowColor={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                  />
                  <Text style={styles.nameUser}>Gumayusi</Text>
                </View>
                <View style={styles.iconDropDownWrap}>
                  <AntDesign style={styles.iconDropDown} name="down" />
                </View>
              </View>
              <View style={styles.containerCreateProfileOther}>
                <View style={styles.iconCreateProfileOtherWrap}>
                  <Feather name="plus" size={24} color="black" />
                </View>
                <View>
                  <Text style={styles.textCreateProfileOther}>
                    Tạo trang cá nhân khác
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.containerGridColumnMenuContent}>
              <View style={styles.containerGridRowMenuContent}>
                <View style={styles.ItemsRowMenuContent}>
                  <FontAwesome name="group" size={24} color="black" />
                  <Text style={styles.TexItemsRowMenuContent}>Nhóm</Text>
                </View>
                <View style={styles.ItemsRowMenuContent}>
                  <FontAwesome5 name="clock" size={24} color="black" />
                  <Text style={styles.TexItemsRowMenuContent}>Kỷ niệm</Text>
                </View>
              </View>
              <View style={styles.containerGridRowMenuContent}>
                <View style={styles.ItemsRowMenuContent}>
                  <FontAwesome name="group" size={24} color="black" />
                  <Text style={styles.TexItemsRowMenuContent}>Nhóm</Text>
                </View>
                <View style={styles.ItemsRowMenuContent}>
                  <FontAwesome5 name="clock" size={24} color="black" />
                  <Text style={styles.TexItemsRowMenuContent}>Kỷ niệm</Text>
                </View>
              </View>
              <View style={styles.containerGridRowMenuContent}>
                <View style={styles.ItemsRowMenuContent}>
                  <FontAwesome name="group" size={24} color="black" />
                  <Text style={styles.TexItemsRowMenuContent}>Nhóm</Text>
                </View>
                <View style={styles.ItemsRowMenuContent}>
                  <FontAwesome5 name="clock" size={24} color="black" />
                  <Text style={styles.TexItemsRowMenuContent}>Kỷ niệm</Text>
                </View>
              </View>
              <View style={styles.containerGridRowMenuContent}>
                <View style={styles.ItemsRowMenuContent}>
                  <FontAwesome name="group" size={24} color="black" />
                  <Text style={styles.TexItemsRowMenuContent}>Nhóm</Text>
                </View>
                <View style={styles.ItemsRowMenuContent}>
                  <FontAwesome5 name="clock" size={24} color="black" />
                  <Text style={styles.TexItemsRowMenuContent}>Kỷ niệm</Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonViewOther}>
              <Text style={styles.textViewOther}>Xem thêm</Text>
            </View>
          </View>
          <View style={styles.divReport}>
            <View style={styles.yourProfileView}>
              <Entypo name="help-with-circle" size={40} color="black" />
              <Text style={styles.nameUser}>Trợ giúp & hỗ trợ</Text>
            </View>
            <View style={styles.iconDropDownWrap}>
              <AntDesign style={styles.iconDropDown} name="down" />
            </View>
          </View>
          <View style={styles.divReport}>
            <View style={styles.yourProfileView}>
              <Ionicons name="settings" size={40} color="black" />
              <Text style={styles.nameUser}>Cài đặt và quyền riêng tư</Text>
            </View>
            <View style={styles.iconDropDownWrap}>
              <AntDesign style={styles.iconDropDown} name="down" />
            </View>
          </View>
          <TouchableOpacity onPress={showModal}>
            <View style={styles.buttonViewOther}>
              <Text style={styles.textViewOther}>Đăng xuất</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Portal>
              <Modal
                visible={visible}
                contentContainerStyle={styles.modalConfirmLogout}
              >
                <Text style={styles.textModalConfirm}>
                  Đăng xuất khỏi tài khoản của bạn?
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "auto",
                  }}
                >
                  <Text onPress={hideModal} style={{ marginRight: 10 }}>
                    HỦY
                  </Text>
                  <Text
                    onPress={handlePressButtonLogout}
                    style={{ color: "red" }}
                  >
                    ĐĂNG XUẤT
                  </Text>
                </View>
              </Modal>
            </Portal>
          </View>
        </Animated.View>
      </ScrollView>
    </PaperProvider>
  );
};

export default MenuScreen;
