import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Card, Icon } from "@rneui/themed";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ParentStackParamList } from "../navigation/ParentNavigator";
import { TabScreenParamList } from "../navigation/TabNavigator";

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabScreenParamList, "Orders">,
  NativeStackNavigationProp<ParentStackParamList>
>;

type Props = {
  item: Order;
};
function OrderCard({ item }: Props) {
  const navigation = useNavigation<OrderScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: item })}
    >
      <Card
        containerStyle={{
          paddingHorizontal: 5,
          borderRadius: 15,
          backgroundColor: "#B4CECE",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Icon
              name="truck-delivery"
              color="#367D7D"
              type="material-community"
            />
            <Text style={{ fontSize: 14, color: "#367D7D" }}>
              {new Date(item.createdAt).toLocaleDateString()}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 12, color: "gray" }}>
              {item.carrier}-{item.trackingId}
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>
              {item.trackingItems.customer.name}
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>
              {item.trackingItems.customer.email}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#367D7D" }}>
              {item.trackingItems.items.length} units
            </Text>
            <Icon
              style={{ marginLeft: 10 }}
              name="box"
              type="feather"
              color="#367D7D"
            />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export default OrderCard;
