import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMERS, GET_ORDERS } from '../graphql/queries'

const useOrders = () => {
    const {loading, error, data} = useQuery(GET_ORDERS);
    const [orders, setOrders] = React.useState<Order[]>([]);
  
    React.useEffect(()=> {
        if(!data) return;

        const orders: Order[] = data.getOrders.map(({value}: OrderResponse)=> ({
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
        setOrders(orders);
    }, [data])

    return {loading, error, orders};
 
}

export default useOrders

