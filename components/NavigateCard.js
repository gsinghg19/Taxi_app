import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-10 text-xl`}>NavigateCard</Text>
      <View style={tw`flex-shrink border-t border-gray-200`}></View>
    </SafeAreaView>
  );
};

export default NavigateCard;
