 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS, GET_ORDERS } from '../graphql/queries';
 
 const useCustomerOrders = (userId: string) => {
    const {loading, error, data} = useQuery(GET_ORDERS);
    const [orders, setOrders] = React.useState<Order[]>([]);
   
    React.useEffect(() => {
      const orders: Order[] = data?.getOrders.map(({value}: OrderResponse)=> ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Address: value.Address,
            City: value.City,
            Latitude: value.Lat,
            Lng: value.Lng,
        }));

        const customerOrders = orders?.filter((order) => order?.trackingItems.customer_id === userId );

        setOrders(customerOrders);
    }, [data, userId])

    return {loading, error, orders};
   
 }
 
 export default useCustomerOrders
 
  