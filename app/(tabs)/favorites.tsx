import { Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorites = () => {
  return (
    <SafeAreaView className="bg-[#fbedd6] flex-1">
      <Text>Favorites</Text>

      <StatusBar backgroundColor="#fbedd6" style="dark" />
    </SafeAreaView>
  );
};

export default Favorites;
