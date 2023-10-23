import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
type PropsBottomDrawer = {
  isVisible: boolean;
  onClose: () => void;
};
const BottomDrawer = ({ isVisible, onClose }: PropsBottomDrawer) => {
  const languages = [
    { id: 1, name: "English" },
    { id: 2, name: "Español" },
    { id: 3, name: "Français" },
    { id: 4, name: "Tiếng Việt" },
    { id: 5, name: "Trung" },
    { id: 6, name: "Nhật" },
    { id: 7, name: "Hàn" },
    { id: 8, name: "Mỹ" },
    { id: 9, name: "Nga" },
    { id: 10, name: "Thái" },
    { id: 11, name: "Ấn" },
  ];
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View
        style={{
          backgroundColor: "#122231",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 15,
          borderRadius: 12,
        }}
      >
        <TouchableOpacity onPress={onClose}>
          <AntDesign
            style={{ fontSize: 16, fontWeight: "bold", margin: 16 }}
            name="close"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: "white",
              marginBottom: 20,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Chọn ngôn ngữ
          </Text>
        </View>
        <ScrollView style={{ maxHeight: 200 }}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language.id}
              style={{
                padding: 16,
                backgroundColor: "#1C2932",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>
                {language.name}
              </Text>
              <AntDesign name="checkcircle" size={24} color="#1677ff" />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ borderTopWidth: 1, borderTopColor: "#ccc" }}>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default BottomDrawer;
