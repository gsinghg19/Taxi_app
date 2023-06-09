import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";
import OrderCard from "../components/OrderCard";
import RestaurantCard from "../components/RestaurantCard";
import Map from "../components/Map";

const OrderScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={tw`h-1/2`}>
      <Stack.Navigator>
        <Stack.Screen
          name="OrderCard"
          component={OrderCard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RestaurantCard"
          component={RestaurantCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default OrderScreen;
