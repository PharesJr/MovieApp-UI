import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const PlayListsList = ({ name, image }: { name: string; image: string }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-row items-center justify-between gap-2 py-2"
    >
      {/* Item 1 */}
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        className="h-12 w-12 rounded-lg"
      />

      {/* Item 2 */}

      <View className="flex-1 py-3">
        <Text className="text-md text-[#282828] font-semibold">{name}</Text>
      </View>

      <FontAwesome5 name="ellipsis-h" size={20} color="#282828" />
    </TouchableOpacity>
  );
};

export default PlayListsList;
