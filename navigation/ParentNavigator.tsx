import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ModalScreen from "../screens/ModalScreen";
import OrderScreen from "../screens/OrderScreen";

// declaring types for the different screen groups based on the data that will be passed into them when

export type ParentStackParamList = {
  Main: undefined;
  Modal: { userId: string; name: string };
  Order: { order: Order };
};
const ParentStack = createNativeStackNavigator<ParentStackParamList>();
const ParentNavigator = () => {
  return (
    <ParentStack.Navigator>
      {/* bottom tab Navogation */}
      <ParentStack.Group>
        <ParentStack.Screen name="Main" component={TabNavigator} />
      </ParentStack.Group>

      {/* Modal screen for the customers  */}
      <ParentStack.Group screenOptions={{ presentation: "modal" }}>
        <ParentStack.Screen
          options={{ headerShown: false }}
          name="Modal"
          component={ModalScreen}
        />
      </ParentStack.Group>

      {/* Modal Screen for the orders */}
      <ParentStack.Group
        screenOptions={{ presentation: "containedTransparentModal" }}
      >
        <ParentStack.Screen
          // options={{ headerShown: false }}
          name="Order"
          component={OrderScreen}
        />
      </ParentStack.Group>
    </ParentStack.Navigator>
  );
};

export default ParentNavigator;
