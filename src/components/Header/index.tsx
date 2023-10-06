import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontisto from "react-native-vector-icons/Fontisto";
const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textLogoFacebook: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#0866ff",
  },
  listIcons: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 10,
    columnGap: 10,
  },
  backgroundIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#E4E6EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconHeader: {
    color: "black",
    fontSize: 20,
  },
});
const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textLogoFacebook}>facebook</Text>
      <View style={styles.listIcons}>
        <TouchableOpacity style={styles.backgroundIcon}>
          <IconAntDesign style={styles.iconHeader} name="plus" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backgroundIcon}>
          <IconEntypo style={styles.iconHeader} name="magnifying-glass" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backgroundIcon}>
          <IconFontisto style={styles.iconHeader} name="messenger" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
