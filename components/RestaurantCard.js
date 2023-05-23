import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Card } from "@rneui/base";

const RestaurantCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("https://api.sampleapis.com/recipes/recipes");
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return (
      <Card>
        <Text>{item.title}</Text>
        <Image
          source={{ uri: item.photoUrl }}
          style={{ width: 120, height: 120, resizeMode: "contain" }}
        />
      </Card>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          vertical
          renderItem={renderItem}
        />
      )}
    </>
  );
};

export default RestaurantCard;
