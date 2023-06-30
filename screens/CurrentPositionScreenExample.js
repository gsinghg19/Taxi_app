import { View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import GoogleAutoComplete from "../components/GoogleAutoComplete";
import NavFavourites from "../components/NavFavourites";
import CurrentPosition from "../components/CurrentPosition";

const CurrentPositionScreenExample = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <CurrentPosition />
      </View>
    </SafeAreaView>
  );
};

export default CurrentPositionScreenExample;
