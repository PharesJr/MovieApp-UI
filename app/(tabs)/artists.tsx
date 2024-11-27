import { FlatList, Text, View, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ArtistList from "@/components/ArtistList";
import data from "../../assets/data/library.json";
import SearchInput from "@/components/SearchInput";
import ArtistScreen from "@/components/ArtistScreen";

const Artists = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const toggleClose = () => {
    setPopupVisible(false);
    setSelectedArtist(null); // Clear selected track when closing
  };

  const togglePopup = (artist: any) => {
    setSelectedArtist(artist); // Set the selected track data
    setPopupVisible(true); // Show the popup
  };

  return (
    <SafeAreaView className="bg-[#f9f6ef] flex-1 px-4">
      <View className="pt-4">
        <Text className="text-[#282828] text-4xl font-bold py-2">Artists</Text>

        {/* Search Input */}
        <SearchInput placeholder="Search for an artist" />
      </View>

      {/* Artists List */}
      <FlatList
        className="mt-2"
        data={data}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            <Text className="text-md text-[#2b211b] font-semibold">
              No artists found.
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <ArtistList
            name={item.artist || "Unknown Artist"}
            image={
              item.artwork ||
              "https://i.ytimg.com/vi/JhUFfaArYk8/maxresdefault.jpg"
            }
            onPress={() => togglePopup(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Music Screen with Track Data */}
      {popupVisible && (
        <ArtistScreen artist={selectedArtist} onPress={toggleClose} />
      )}

      <StatusBar backgroundColor="#f9f6ef" style="dark" />
    </SafeAreaView>
  );
};

export default Artists;
