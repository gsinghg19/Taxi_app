import { View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import GoogleAutoComplete from "../components/GoogleAutoComplete";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://as1.ftcdn.net/v2/jpg/03/51/17/28/1000_F_351172814_sX7DmvFaLYnj6E2iCXhH8aj51rAxJKS2.jpg",
          }}
        />
        <GoogleAutoComplete />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
