import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ArtistScreen = ({
  artist,
  onPress,
}: {
  artist?: {
    title: string;
    artist: string;
    artwork: string;
  } | null;
  onPress: () => void;
}) => {
  if (!artist) return null; // Ensure the component doesn't render without track data

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
        <Text className="text-xl font-semibold text-[#282828]">Artist</Text>
        {/* Item 3 */}
        <MaterialIcons name="library-music" size={30} color="#282828" />
      </View>

      <View className="bg-[#282828] w-20 rounded-full p-1"></View>

      <Image
        source={{ uri: artist.artwork }}
        className="w-[350px] h-[350px] rounded-xl"
        resizeMode="cover"
      />

      <View className="flex-row items-center justify-between w-full">
        <View>
          <Text className="text-[#193497] text-xl font-bold">
            {artist.artist}
          </Text>
        </View>

        <FontAwesome name="heart" size={28} color="#193497" />
      </View>

      <View className="flex-row items-center justify-evenly w-full gap-8">
        <Text className="text-lg font-medium text-[#282828] text-justify">
          "The artist is a talented music genius known for their unique sound
          and captivating performances. Their music blends with heartfelt
          lyrics, creating a connection with audiences worldwide. He continues
          to push creative boundaries and inspire fans with their passion for
          music."
        </Text>
      </View>
    </View>
  );
};

export default ArtistScreen;
