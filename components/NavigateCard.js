import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Google_Map_Api_Key } from "@env";
import { KeyboardAvoidingView } from "react-native";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1`}
    >
      <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-10 text-xl`}>
          Hello, where too today?
        </Text>
        <View style={tw`flex-shrink border-t border-gray-200`}>
          <GooglePlacesAutocomplete
            styles={inputBoxStyles}
            placeholder="Where too?"
            nearbyPlacesAPI="GooglePlacesSearch"
            enablePoweredByContainer={false}
            debounce={400}
            query={{ key: Google_Map_Api_Key, language: "en" }}
            fetchDetails={true}
            returnKeytype={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NavigateCard;

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DCDCDC",
    borderRadius: 0,
    fontSize: 19,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
    flex: 0,
  },
});
