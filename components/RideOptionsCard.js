import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const priceData = [
  {
    id: "1",
    title: "standard fare",
    Additional_Information: "",
    screen: "PaymentScreen",
    price: "$11",
  },
  {
    id: "2",
    title: "premium fare",
    Additional_Information: "",
    screen: "PaymentScreen",
    price: "$16",
  },
  {
    id: "3",
    title: "Large groups fare. ",
    Additional_Information: "Maximum 10 per vehicle.",
    screen: "PaymentScreen",
    prie: "$23",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`pl-5 pt-2 font-600 bg-gray-400`}>
      <View>
        <FlatList
          data={priceData}
          keyExtractor={(item) => item.id}
          vertical
          rednerItem={({ item }) => (
            <TouchableOpacity
              style={tw`p-2 pl-4 pb-8 pt-5 bg-gray-100 m-2 w-40`}
              title="PaymentScreen"
              onPress={() => navigation.navigate(item.screen)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
