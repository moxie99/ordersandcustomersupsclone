import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabScreenParamList } from "../navigation/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParentStackParamList } from "../navigation/ParentNavigator";
import { Input, Image } from "@rneui/base";
import { GET_CUSTOMERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import CustomerCard from "../components/CustomerCard";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabScreenParamList, "Customers">,
  NativeStackNavigationProp<ParentStackParamList>
>;

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const [input, setInput] = React.useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "#510400" }}>
      <View style={{ height: 400 }}>
        <Image
          source={require("../assets/bg2.png")}
          containerStyle={{ height: "100%", width: "100%" }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <Input
        placeholder="Search From Customers List"
        value={input}
        onChangeText={setInput}
        containerStyle={{
          backgroundColor: "pink",
          paddingTop: 5,
          paddingBottom: 5,
          paddingHorizontal: 10,
        }}
      />

      {data?.getCustomers
        ?.filter((customer: CustomerList) =>
          customer.value.name.toLowerCase().includes(input.toLowerCase())
        )
        .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} name={name} email={email} userId={ID} />
        ))}
    </ScrollView>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({});
