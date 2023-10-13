import React, { useEffect, useState } from "react";
import { Animated, Easing, View } from "react-native";
import * as Animatable from "react-native-animatable";
import NavBar from "../src/components/NavBar";
import Header from "../src/components/Header";
import Post from "../src/components/Post";

const index = () => {
  const [translateYAnim] = useState(new Animated.Value(-50));
  const [headerOpacityAnim] = useState(new Animated.Value(0)); // Độ trong suốt của Header
  const [displayHeader, setDisplayHeader] = useState(true);

  useEffect(() => {
    if (displayHeader) {
      // Dịch chuyển cả `Header` và các phần còn lại
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start(() => {
        // Khi hoàn thành hiệu ứng dịch chuyển, ẩn Header
        Animated.timing(headerOpacityAnim, {
          toValue: 1,
          duration: 0, // Không cần thời gian
          useNativeDriver: false,
        }).start();
      });
    }
  }, [displayHeader]);
  return (
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
      <View>
        <Post />
      </View>
    </Animated.View>
  );
};

export default index;
