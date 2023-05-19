import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { Google_Map_Api_Key } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50,
      },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      loadingEnabled="true"
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
          title="Starting point"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          draggable
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Drestination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
