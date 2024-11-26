import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import images from "../constants/images";

const Splash = () => {
  return (
    <SafeAreaView className="bg-[#f7f3e3] flex-1 items-center justify-center">
      <Image
        source={images.logoDark}
        resizeMode="contain"
        className="w-[400px] h-[400px]"
      />
      <StatusBar backgroundColor="#f7f3e3" style="dark" />
    </SafeAreaView>
  );
};

export default Splash;
