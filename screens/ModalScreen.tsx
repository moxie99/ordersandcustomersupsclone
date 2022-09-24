import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Icon } from "@rneui/base";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabScreenParamList } from "../navigation/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParentStackParamList } from "../navigation/ParentNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabScreenParamList>,
  NativeStackNavigationProp<ParentStackParamList, "Modal">
>;

type ModalScreenRouteProp = RouteProp<ParentStackParamList, "Modal">;

const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();

  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <TouchableOpacity
        style={{
          position: "absolute",
          zIndex: 10,
          top: 10,
          right: 10,
          backgroundColor: "#510400",
          borderRadius: 15,
          padding: 5,
        }}
        onPress={navigation.goBack}
      >
        <Icon name="closecircle" type="antdesign" color="white" />
      </TouchableOpacity>
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            paddingVertical: 5,
            borderBottomWidth: 1,
            borderBottomColor: "#510400",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontStyle: "italic",
              color: "#510400",
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: " #045D5D",
              textAlign: "center",
            }}
          >
            Deliveries
          </Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={orders}
        keyExtractor={(item) => item.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
