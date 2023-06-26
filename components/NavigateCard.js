import {
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Google_Map_Api_Key } from "@env";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import NavFavourites from "./NavFavourites";
import { Icon } from "@rneui/themed";
import RideOptionsCard from "./RideOptionsCard";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello, where too today?</Text>
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
      {/* <NavFavourites /> */}

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row bg-black w-22 px-4 py-3 rounded-full ml-4`}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon
            name="car"
            type="font-awesome"
            size={16}
            color="white"
            style={tw`mr-2`}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row bg-white rounded-full ml-4 px-4 py-3`}
        >
          <Icon
            name="fast-food-sharp"
            type="ionicon"
            size={16}
            color="black"
            style={tw`mr-2`}
          />
          <Text style={tw`text-black text-center`}>Eat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
