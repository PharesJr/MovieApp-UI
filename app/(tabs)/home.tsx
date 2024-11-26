import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SearchInput from "@/components/SearchInput";
import PlayAndShuffle from "@/components/PlayAndShuffle";
import Track from "@/components/Track";
import data from "../../assets/data/library.json";

const HomePage = () => {
  return (
    <SafeAreaView className="bg-[#fbedd6] flex-1 px-4">
      <View className="pt-4">
        <Text className="text-3xl font-bold py-2">Songs</Text>
        <SearchInput />
      </View>

      <View className="pt-2">
        <PlayAndShuffle />
      </View>

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
            image={item.artwork || "https://f4.bcbits.com/img/a3736661212_65"}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar backgroundColor="#fbedd6" style="dark" />
    </SafeAreaView>
  );
};

export default HomePage;
