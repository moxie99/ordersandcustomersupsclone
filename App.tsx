import { NavigationContainer } from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';

import utilities from './tailwind.json';
import ParentNavigator from './navigation/ParentNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5001/api/utana',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore 
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <ParentNavigator/>
        </NavigationContainer>
        </ApolloProvider>
    </TailwindProvider>
  );
}

