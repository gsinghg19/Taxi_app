import { useDispatch } from "react-redux";
import React from "react";
import { Google_Map_Api_Key } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";

const GoogleAutoComplete = () => {
  const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      placeholder="Where too?"
      minLength={2}
      autoFocus={false}
      returnKeyType={"search"}
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
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
        );
        dispatch(setDestination(null));
        // console.log(data);
        console.log(details);
      }}
      query={{
        key: Google_Map_Api_Key,
        language: "en",
      }}
      debounce={400}
      enablePoweredByContainer={false}
    />
  );
};
export default GoogleAutoComplete;
