import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabScreenParamList} from "../navigation/TabNavigator"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParentStackParamList } from '../navigation/ParentNavigator';

export type CustomersNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabScreenParamList, "Customers">, NativeStackNavigationProp<ParentStackParamList>>
;


const CustomersScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation();

    React.useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown: false,
      })
    }, [])
  return (
    <ScrollView style={{backgroundColor:"#510400"}}>
      <Image source={require("../assets/bg2.png")} 
      style={tw("w-full h-64") } 
      />
    </ScrollView>
  )
}

export default CustomersScreen

const styles = StyleSheet.create({})