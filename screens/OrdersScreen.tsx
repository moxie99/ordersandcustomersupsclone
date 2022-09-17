import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const OrdersScreen = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown: false,
      })
    }, [])
  return (
    <View>
      <Text>OrdersScreen</Text>
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})