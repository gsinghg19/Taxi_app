import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://stock.adobe.com/uk/images/berlin-colored-vector-map/124270591",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
