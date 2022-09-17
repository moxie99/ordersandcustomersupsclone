
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';



// declaring types for the different screen groups based on the data that will be passed into them when

export type ParentStackParamList = {
    Main: undefined,
    Modal: {userId: string, name: string},
    // Order: {order: Order}
}
const ParentStack = createNativeStackNavigator();
const ParentNavigator = () => {
  return (
    <ParentStack.Navigator>
        <ParentStack.Group>
            <ParentStack.Screen name="Main" component={TabNavigator}/>
        </ParentStack.Group>
    </ParentStack.Navigator>
  )
}

export default ParentNavigator

