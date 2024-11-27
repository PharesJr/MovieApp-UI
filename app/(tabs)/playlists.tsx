import { FlatList, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import data from "../../assets/data/library.json";
import SearchInput from "@/components/SearchInput";
import PlayListsList from "@/components/PlayListsList";

const Playlists = () => {
  return (
    <SafeAreaView className="bg-[#f9f6ef] flex-1 px-4">
      <View className="pt-4">
        <Text className="text-[#282828] text-4xl font-bold py-2">Playlists</Text>

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
              No playlists found.
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <PlayListsList
            name={
              Array.isArray(item.playlist)
                ? item.playlist.join(", ") // Convert array to a comma-separated string
                : item.playlist || "Unknown Playlist" // Handle missing or invalid data
            }
            image={
              item.artwork ||
              "https://i.ytimg.com/vi/JhUFfaArYk8/maxresdefault.jpg"
            }
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar backgroundColor="#f9f6ef" style="dark" />
    </SafeAreaView>
  );
};

export default Playlists;
