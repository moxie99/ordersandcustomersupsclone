import { View, Text } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";
import { Divider } from "@rneui/base";
import MapView, { Marker } from "react-native-maps";
import Currency from "react-currency-formatter";

type Props = {
  order: Order;
  fullWidth?: boolean;
};

const DeliveryCard = ({ order, fullWidth }: Props) => {
  return (
    <View style={fullWidth && { height: "100%" }}>
      <Card
        containerStyle={{
          backgroundColor: fullWidth ? "#82AEAE" : "#045D5D",
          borderRadius: fullWidth ? 0 : 15,
          marginVertical: 5,
          padding: 0,
          paddingTop: 15,
          shadowColor: "#510400",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 7,
          margin: fullWidth ? 0 : 5,
        }}
      >
        <Icon name="box" type="entypo" color="white" size={50} />
        <View>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              textTransform: "uppercase",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {order.carrier} - {order.trackingId}
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 7,
              marginBottom: 7,
            }}
          >
            Expected Delivery : {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>
        <View style={{ marginHorizontal: "auto" }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              marginTop: 5,
              fontSize: 14,
            }}
          >
            Address
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              fontStyle: "italic",
              color: "white",
              marginTop: 5,
            }}
          >
            {order.Address}, {order.City}
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              fontStyle: "italic",
              color: "white",
              marginVertical: 5,
            }}
          >
            Shipping Cost:{" "}
            <Currency quantity={order.shippingCost} currency="USD" />
          </Text>
        </View>

        <Divider color="white" />
        <View style={{ padding: 10 }}>
          {order.trackingItems.items.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  fontStyle: "italic",
                  paddingVertical: 2.5,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{ fontSize: 16, color: "white", paddingVertical: 2.5 }}
              >
                {item.quantity} units
              </Text>
            </View>
          ))}
        </View>

        <MapView
          initialRegion={{
            latitude: order.Lat ? order.Lat : 37.78825,
            longitude: order.Lng ? order.Lng : -122.4324,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={{
            width: "100%",
            flexGrow: 1,
            height: fullWidth ? 500 : 200,
          }}
        >
          {/* {order.Lat && order.Lng && ( */}
          <Marker
            key={order.trackingId}
            coordinate={{
              latitude: order.Lat ? order.Lat : 37.78825,
              longitude: order.Lng ? order.Lng : -122.4324,
            }}
            title={"Delivery Location"}
            description={order.Address}
            identifier="destination"
          />
          {/* )} */}
        </MapView>
      </Card>
    </View>
  );
};

export default DeliveryCard;
