import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
var { width, height } = Dimensions.get("window");
// console.log("🚀 ~ file: index.tsx:4 ~ height:", height);
// console.log("🚀 ~ file: index.tsx:4 ~ width:", width);
const styles = StyleSheet.create({
  navBarContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    borderColor: "#E4E6EB",
  },
  itemsNavBar: {
    width: 80,
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderStyle: "solid",
  },
  itemsIcon: {
    color: "#65676B",
  },
  numberNotification: {
    backgroundColor: "red",
    position: "absolute",
    top: 5,
    right: 25,
    textAlign: "center",
    zIndex: 10,
    width: 15,
    fontSize: 10,
    height: 15,
    color: "white",
    borderRadius: 50,
  },
  activeItemsIcon: {
    color: "#0866ff",
  },
  activeItemsNavBar: {
    borderRadius: 10,
    borderColor: "#0866ff",
    borderBottomWidth: 3,
  },
});
const NavBar = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveItemIndex(index);
  };
  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity onPress={() => handleItemClick(0)}>
        <View
          style={[
            styles.itemsNavBar,
            activeItemIndex === 0 && styles.activeItemsNavBar,
          ]}
        >
          <Foundation
            style={[
              styles.itemsIcon,
              activeItemIndex === 0 && styles.activeItemsIcon,
            ]}
            name="home"
            size={24}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemClick(1)}>
        <View
          style={[
            styles.itemsNavBar,
            activeItemIndex === 1 && styles.activeItemsNavBar,
          ]}
        >
          <MaterialIcons
            style={[
              styles.itemsIcon,
              activeItemIndex === 1 && styles.activeItemsIcon,
            ]}
            name="ondemand-video"
            size={24}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemClick(2)}>
        <View
          style={[
            styles.itemsNavBar,
            activeItemIndex === 2 && styles.activeItemsNavBar,
          ]}
        >
          <Text style={styles.numberNotification}>2</Text>
          <FontAwesome5
            style={[
              styles.itemsIcon,
              activeItemIndex === 2 && styles.activeItemsIcon,
            ]}
            name="user-friends"
            size={24}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemClick(3)}>
        <View
          style={[
            styles.itemsNavBar,
            activeItemIndex === 3 && styles.activeItemsNavBar,
          ]}
        >
          <Text style={styles.numberNotification}>2</Text>
          <Ionicons
            style={[
              styles.itemsIcon,
              activeItemIndex === 3 && styles.activeItemsIcon,
            ]}
            name="notifications-outline"
            size={24}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemClick(4)}>
        <View
          style={[
            styles.itemsNavBar,
            activeItemIndex === 4 && styles.activeItemsNavBar,
          ]}
        >
          <FontAwesome
            style={[
              styles.itemsIcon,
              activeItemIndex === 4 && styles.activeItemsIcon,
            ]}
            name="bars"
            size={24}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
