import { View, Text } from "react-native";
import React, { useState } from "react";
import Geolocation from "@react-native-community/geolocation";

const CurrentPosition = () => {
  const [position, setPosition] = useState(null);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setPosition(JSON.stringify(position));
      },
      (error) =>
        Alert.alert("getCurrentPosition error occurred!", JSON.stringify(error))
    );
  };

  return (
    <View>
      <Text>
        <Text>{position}</Text>
      </Text>
      <Button title="Get current Position" onPress={getCurrentPosition} />
    </View>
  );
};

export default CurrentPosition;
