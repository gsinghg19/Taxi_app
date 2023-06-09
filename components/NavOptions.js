import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

//create data array with 1 object for a ride and one object for food orders.Just like in the uber app.

const data = [
  {
    id: "1",
    title: "Get a taxi",
    screen: "MapScreen",
    image:
      "https://as1.ftcdn.net/v2/jpg/04/54/73/40/1000_F_454734046_ijTRRWborejWdaV7mACqp6e4BSTFXWY7.jpg",
  },
  {
    id: "2",
    title: "Order food",
    screen: "OrderScreen",
    image:
      "https://as2.ftcdn.net/v2/jpg/02/16/63/01/1000_F_216630195_EQnqevb5CWdHLYFX3cqtqNkoQhsDZrRe.jpg",
  },
];

//implement above array in a flatlist.
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-4 pb-8 pt-5 bg-gray-100 m-2 w-40`}
          title="MapScreen"
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-10"}`}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              name="arrowright"
              type="antdesign"
              style={tw`mt-2 p-2 w-10 `}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
