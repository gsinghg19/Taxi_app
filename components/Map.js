import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { Google_Map_Api_Key } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <MapView
      mapType="mutedStandard"
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={Google_Map_Api_Key}
          strokeWidth={2}
          strokeColor="blue"
          onReady={(result) => {
            console.log(`Distance: ${result.distance} km.`);
            console.log(`Duration: ${result.duration} mins.`);
          }}
        />
      )}

      {origin?.location && (
        <Marker
          draggable
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Your starting point"
          description={origin.description}
          identifier="origin"
        />
      )}

      {/*================================================== UNDER CONSTRUCTION ========================= */}
      {/* TODO: fix destination pin. clikcing marker deosnt give destination details. it closes the app. */}
      {/* {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.location}
          identifier="destination"
        />
      )} */}
      {/*================================================== UNDER CONSTRUCTION ========================= */}
    </MapView>
  );
};

export default Map;
