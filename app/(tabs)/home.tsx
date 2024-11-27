import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SearchInput from "@/components/SearchInput";
import PlayAndShuffle from "@/components/PlayAndShuffle";
import Track from "@/components/Track";
import data from "../../assets/data/library.json";
import MusicScreen from "@/components/MusicScreen";

const HomePage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const toggleClose = () => {
    setPopupVisible(false);
    setSelectedTrack(null); // Clear selected track when closing
  };

  const togglePopup = (track: any) => {
    setSelectedTrack(track); // Set the selected track data
    setPopupVisible(true); // Show the popup
  };

  return (
    <SafeAreaView className="bg-[#f9f6ef] flex-1 px-4">
      <View className="pt-4">
        <Text className="text-[#282828] text-4xl font-bold py-2">Songs</Text>

        {/* Search Input */}
        <SearchInput placeholder="Search for a song" />
      </View>

      <View className="pt-2">
        {/* Play and Shuffle Buttons */}
        <PlayAndShuffle />
      </View>

      {/* Music List */}
      <FlatList
        className="mt-2"
        data={data}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            <Text className="text-md text-[#2b211b] font-semibold">
              No songs found.
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Track
            name={item.artist || "Unknown Artist"}
            title={item.title || "Untitled"}
            image={
              item.artwork ||
              "https://i.ytimg.com/vi/JhUFfaArYk8/maxresdefault.jpg"
            }
            onPress={() => togglePopup(item)} // Pass track data
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Music Screen with Track Data */}
      {popupVisible && (
        <MusicScreen track={selectedTrack} onPress={toggleClose} />
      )}

      {/* Status Bar Properties */}
      <StatusBar backgroundColor="#f9f6ef" style="dark" />
    </SafeAreaView>
  );
};

export default HomePage;
