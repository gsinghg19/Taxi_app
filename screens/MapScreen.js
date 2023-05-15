import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={{
          uri: "https://stock.adobe.com/uk/images/berlin-colored-vector-map/124270591",
        }}
      />
    </View>
  );
};

export default MapScreen;
