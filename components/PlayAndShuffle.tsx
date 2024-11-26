import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const PlayAndShuffle = () => {
  return (
    <View className="flex-row items-center justify-between gap-3">
      {/* Left */}
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row flex-1 justify-center items-center bg-[#2b211b] rounded-xl p-3 gap-1 "
      >
        <Entypo name="controller-play" size={24} color="#b78456" />
        <Text className="text-[#b78456] font-semibold text-lg">Play</Text>
      </TouchableOpacity>

      {/* Right */}

      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row flex-1 justify-center items-center bg-[#2b211b] rounded-xl p-3 gap-3"
      >
        <Entypo name="controller-play" size={24} color="#b78456" />
        <Text className="text-[#b78456] font-semibold text-lg">Shuffle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayAndShuffle;
