import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Playlists = () => {
  return (
    <SafeAreaView className="bg-[#fbedd6] flex-1">
      <Text>Playlists</Text>

      <StatusBar backgroundColor="#fbedd6" style="dark" />
    </SafeAreaView>
  );
};

export default Playlists;
