import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer, useRoute, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function TestScreen() {
  const params = useRoute().params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test Screen</Text>
      <Text>The id is: {JSON.stringify(params.id)}</Text>
    </View>
  )
}

function HomeScreen() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Conduct Test' onPress={() => navigation.navigate('Test', { id: 'test=' })} />
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer linking={{ config: { screens: { Test: { path: 'test/:id' } } } }}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
