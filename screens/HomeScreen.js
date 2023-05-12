import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/00/55/55/17/1000_F_55551760_YYsS1oHT2PnzCjBvJucTPqttj0tkHCcf.jpg",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
