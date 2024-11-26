import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import Track from "./Track";
import data from "../assets/data/library.json";

const Tracks = () => {
  return (
    <View>
      <ScrollView>
        <FlatList
          className=""
          data={data}
          ListEmptyComponent={() => (
            <View className="flex-1 items-center justify-center">
              <Text className="text-md text-[#2b211b] font-semibold">
                No songs found.
              </Text>
            </View>
          )}
          renderItem={({item}) => <Track />}
        />
      </ScrollView>
    </View>
  );
};

export default Tracks;
