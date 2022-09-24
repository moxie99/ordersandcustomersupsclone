import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { TabScreenParamList } from "../navigation/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParentStackParamList } from "../navigation/ParentNavigator";
import { Icon } from "@rneui/themed";
import DeliveryCard from "../components/DeliveryCard";

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabScreenParamList, "Orders">,
  NativeStackNavigationProp<ParentStackParamList>
>;

type ModalScreenRouteProp = RouteProp<ParentStackParamList, "Order">;
const OrderScreen = () => {
  const navigation = useNavigation<OrderScreenNavigationProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: "#045D5D",
      headerBackTitle: "Orders",
    });
  });

  const {
    params: { order },
  } = useRoute<ModalScreenRouteProp>();

  return (
    <View style={{ marginTop: -2 }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          zIndex: 10,
          top: 10,
          right: 10,
          backgroundColor: "#045d5D",
          borderRadius: 15,
        }}
        onPress={navigation.goBack}
      >
        <Icon name="closecircle" type="antdesign" color="white" />
      </TouchableOpacity>
      <DeliveryCard order={order} fullWidth />
    </View>
  );
};

export default OrderScreen;
