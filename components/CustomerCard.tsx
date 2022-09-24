import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../screens/CustomersScreen";
import { Card } from "@rneui/themed";
import { Icon } from "@rneui/base";

type Props = {
  name: string;
  email: string;
  userId: string;
};
const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Modal", {
          name: name,
          userId: userId,
        })
      }
    >
      <Card containerStyle={{ padding: 5, borderRadius: 15 }}>
        <View>
          <View>
            <Text
              style={[{ color: "#510400", fontWeight: "bold", fontSize: 20 }]}
            >
              {name}
            </Text>
            {/* <Text>ID: {userId}</Text> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>
              {loading
                ? "Loading"
                : `You have ${orders?.length} items to be delivered`}
            </Text>
            <Icon
              name="box"
              type="entypo"
              style={{ marginBottom: 5, marginLeft: "auto" }}
              color="#510400"
            />
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
