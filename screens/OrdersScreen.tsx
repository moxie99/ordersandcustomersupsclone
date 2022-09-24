import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabScreenParamList } from "../navigation/TabNavigator";
import { ParentStackParamList } from "../navigation/ParentNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useOrders from "../hooks/useOrders";
import { Button, Icon, Image } from "@rneui/themed";
import OrderCard from "../components/OrderCard";

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabScreenParamList, "Orders">,
  NativeStackNavigationProp<ParentStackParamList>
>;

const OrdersScreen = () => {
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? "#045D5D" : color, fontSize: 14 }}>
          Orders
        </Text>
      ),
    });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "#367D7D" }}>
      <Image
        source={{ uri: "https://i.ytimg.com/vi/Usn8qJuesrU/maxresdefault.jpg" }}
        containerStyle={{ width: "100%", height: 300 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={{ marginBottom: 100 }}>
        <Button
          color="#B4CECE"
          titleStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
          style={{ paddingVertical: 10, paddingHorizontal: 15 }}
          onPress={() => {
            setAscending(!ascending);
          }}
        >
          <Icon name="sort" type="MaterialIcons" color="white" size={20} />
          {ascending ? "Showing oldest first" : "Showing recents first"}
        </Button>

        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
          .map((order) => (
            <OrderCard item={order} key={order.trackingId} />
          ))}
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
