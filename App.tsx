import { NavigationContainer } from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';

import utilities from './tailwind.json';
import ParentNavigator from './navigation/ParentNavigator';

export default function App() {
  return (
    // @ts-ignore 
    <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <ParentNavigator/>
        </NavigationContainer>
    </TailwindProvider>
  );
}

