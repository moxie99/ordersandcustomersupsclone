import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CustomersScreen from "../screens/CustomersScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { Icon } from "@rneui/themed";

export type TabScreenParamList = {
  Customers: undefined;
  Orders: undefined;
};
const Tab = createBottomTabNavigator<TabScreenParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#510400",
        tabBarInactiveTintColor: "#D3D3D3",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Orders") {
            return (
              <Icon
                name="box"
                color={focused ? "#045D5D" : "#D3D3D3"}
                type="entypo"
              />
            );
          } else if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                color={focused ? "#510400" : "#D3D3D3"}
                type="entypo"
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
