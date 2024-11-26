import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabsLayout = () => {
  return (
    <>
      {/* Tabs */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#fbdfa2",
          tabBarInactiveTintColor: "#b78456",
          tabBarPosition: "bottom",
          tabBarStyle: {
            justifyContent: "space-evenly",
            backgroundColor: "#2b211b",
            borderTopColor: "#2b211b",
            borderWidth: 0,
            padding: 10,
            height: 55,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="playlists"
          options={{
            title: "Playlists",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="playlist-add" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="artists"
          options={{
            title: "Artists",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-music"
                size={28}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
