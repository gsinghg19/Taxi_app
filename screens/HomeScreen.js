import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { Google_Map_Api_Key } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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
        <GooglePlacesAutocomplete
          placeholder="Where are you?"
          minLength={2}
          autoFocus={false}
          returnKeyType={"default"}
          fetchDetails={true}
          styles={{
            container: {
              flex: 0,
              textInput: {
                fontSize: 18,
              },
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: Google_Map_Api_Key,
            language: "en",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
