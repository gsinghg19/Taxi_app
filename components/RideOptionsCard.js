import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Icon } from "@rneui/themed";
import NavigateCard from "./NavigateCard";

const priceData = [
  {
    id: "1",
    title: "standard fare",
    Additional_Information: "Maximum 4 per vehicle.",
    screen: "PaymentScreen",
    multiplier: 1,
    image:
      "https://www.shutterstock.com/image-illustration/white-modern-affordable-compact-car-600w-2165427043.jpg",
  },
  {
    id: "2",
    title: "premium fare",
    Additional_Information: "Maximum 4 per vehicle.",
    screen: "PaymentScreen",
    multiplier: 1.5,
    image:
      "https://www.shutterstock.com/image-illustration/berlin-germany-november-17-2022-600w-2267012947.jpg",
  },
  {
    id: "3",
    title: "Large groups fare ",
    Additional_Information: "Maximum 10 per vehicle.",
    screen: "PaymentScreen",
    multiplier: 2.4,
    image:
      "https://www.shutterstock.com/image-illustration/silver-suv-600w-703459780.jpg",
  },
];

const RideOptionsCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute bottom-1 left-5 rounded-full px-20`}
        >
          <Icon name="chevron-left" type="fontawesome" title="Go back" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={priceData}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={tw`bg-gray-100 h-0.3`} />}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-8 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{title}</Text>
              <Text>Travel time will go here...</Text>
            </View>

            <Text style={tw`text-xl`}>£0.00</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;
