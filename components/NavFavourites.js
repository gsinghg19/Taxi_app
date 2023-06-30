import { Text, TouchableOpacity, FlatList, View } from "react-native";
import { Icon } from "@rneui/themed";
import React from "react";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";

const NavFavData = [
  {
    id: "1",
    title: "Work",
    description: "Lets go Home",
    icon: "briefcase",
    location: "4242 workington road",
  },
  {
    id: "2",
    title: "Home",
    description: "Lets go to work",
    icon: "home",
    location: "4242 Testing Road",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={NavFavData}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={tw`bg-gray-100 h-0.3`} />}
      renderItem={({ item: { id, title, description, icon, location } }) => (
        <TouchableOpacity style={tw`p-3 items-center flex-row`}>
          <Icon
            style={tw`bg-gray-300 p-5 rounded-full`}
            name={icon}
            type="ionicon"
            color="white"
            size={15}
          />
          <View style={tw`ml-5 mt-1`}>
            <Text style={tw`font-semibold text-lg`}>{title}</Text>
            <Text style={tw`text-gray-500`}>{location}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
