import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import Stacks, { NotTabs } from './Stacks';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        
      }}
    >
    
      <Stack.Screen name='NotTabs' component={NotTabs} />
      <Stack.Screen name='Stacks' component={Stacks} />
      <Stack.Screen name='Tabs' component={Tabs} />
    </Stack.Navigator>
  );
}
