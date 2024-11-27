import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const MusicScreen = ({
  track,
  onPress,
}: {
  track?: {
    title: string;
    artist: string;
    artwork: string;
  } | null;
  onPress: () => void;
}) => {
  if (!track) return null; // Ensure the component doesn't render without track data

  const [playStop, setPlayStop] = useState(false);

  const togglePlayStop = () => {
    setPlayStop(!playStop);
  };

  return (
    <View className="absolute top-0 bottom-0 left-0 right-0 flex-col justify-center items-center gap-5 bg-[#f9f6ef] px-9">
      <View className="w-full flex-row items-center justify-between">
        {/* Item 1 */}
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <FontAwesome name="chevron-down" size={30} color="#282828" />
        </TouchableOpacity>
        {/* Item 2 */}
        <Text className="text-xl font-semibold text-[#282828]">
          Now Playing
        </Text>
        {/* Item 3 */}
        <MaterialIcons name="library-music" size={30} color="#282828" />
      </View>

      <View className="bg-[#282828] w-20 rounded-full p-1"></View>

      <Image
        source={{ uri: track.artwork }}
        className="w-[350px] h-[350px] rounded-xl"
        resizeMode="cover"
      />

      <View className="flex-row items-center justify-between w-full">
        <View>
          <Text className="text-[#193497] text-xl font-bold">
            {track.title}
          </Text>
          <Text className="text-[#282828] text-xl font-medium">
            {track.artist}
          </Text>
        </View>

        <FontAwesome name="heart" size={28} color="#eda398" />
      </View>

      <View className="flex-row items-center justify-evenly w-full gap-8">
        <Entypo name="controller-fast-backward" size={55} color="#282828" />

        <TouchableOpacity onPress={togglePlayStop}>
          {playStop ? (
            <MaterialIcons
              name="play-circle-filled"
              size={80}
              color="#eda398"
            />
          ) : (
            <MaterialIcons
              name="pause-circle-filled"
              size={80}
              color="#eda398"
            />
          )}
        </TouchableOpacity>
        <Entypo name="controller-fast-forward" size={55} color="#282828" />
      </View>
    </View>
  );
};

export default MusicScreen;
