import React, { useEffect, useState } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import NavBar from "../../src/components/NavBar";
import Header from "../../src/components/Header";
import { useRoute } from "@react-navigation/native";

const MenuScreen = () => {
  const [translateYAnim] = useState(new Animated.Value(0));
  const [headerOpacityAnim] = useState(new Animated.Value(1)); // Độ trong suốt của Header
  const [displayHeader, setDisplayHeader] = useState(true);

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
    <View>
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
        <View style={{ paddingTop: 20, paddingLeft: 15, paddingRight: 15 }}>
          <View>
            <Text>
              Menu
            </Text>
          </View>
          <View></View>
        </View>
      </Animated.View>
    </View>
  );
};

export default MenuScreen;
