import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  const [isFocused, setIsFocused] = useState(false); // Manage focus state
  const [query, setQuery] = useState("");
  return (
    <View
      className={`w-full h-14 p-1 gap-2 text-base bg-[#282828] rounded-2xl flex-row items-center space-x-4 ${
        isFocused ? "border-2 border-[#fbdfa2]" : "border-2 border-[#452216]"
      }`}
    >
      <FontAwesome name="search" size={24} color="#eda398" className="pl-4" />
      <TextInput
        className="flex-1 text-[#f9f6ef] font-semibold text-base mt-0.5"
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#eda398"
        onChangeText={(e) => setQuery(e)}
        onFocus={() => setIsFocused(true)} // Set focus state
        onBlur={() => setIsFocused(false)} // Reset focus state
      />
    </View>
  );
};

export default SearchInput;
