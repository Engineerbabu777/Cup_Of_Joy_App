import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import Tabs from './src/navigators/TabNavigator'
import DetailsScreen from './src/screens/DetailsScreen'
import PaymentScreen from './src/screens/PaymentScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
          <Stack.Screen
          name='Payment'
          component={PaymentScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
