import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import OrderScreen from "./screens/OrderScreen";
import RideOptionsCard from "./components/RideOptionsCard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-toast-message";
import tw from "twrnc";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [isConnected, setIsConnected] = useState("");

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        Toast.show({
          type: "error",
          text1: "No Internet Connection",
          visibilityTime: 3000,
          autoHide: false,
        });
      } else if (state.isConnected) {
        Toast.show({
          type: "success",
          text1: "Connected",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
              style={{ flex: 1 }}
            >
              <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OrderScreen"
                  component={OrderScreen}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="RideOptionsCard"
                  component={RideOptionsCard}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
          <Toast
            position="top"
            topOffset={60}
            ref={(ref) => Toast.setRef(ref)}
          />
        </NavigationContainer>
      </Provider>
    </>
  );
}
