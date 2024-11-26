import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView className="bg-[#f7f3e3] flex-1">
      <View className="flex-1 items-center justify-center">
        <Text
          className="font-bold text-center"
          onPress={() => router.push("/(tabs)/home")}
        >
          Come
        </Text>
      </View>
      <StatusBar backgroundColor="#f7f3e3" style="dark" />
    </SafeAreaView>
  );
}
