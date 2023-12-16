import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'
import { Entypo } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function Tabs () {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyles
          //   tabBarBackground: () => (
          //     <BlurView
          //       overlayColor=''
          //       blurAmount={10}
          //       style={styles.blueViewStyles}
          //     />
          //   )
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Entypo
                name='home'
                size={30}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            )
          }}
        />
        <Tab.Screen name='Cart' component={CartScreen}  options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Entypo
                name='shopping-cart'
                size={30}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            )
          }}/>
        <Tab.Screen name='Favorite' component={FavouriteScreen}  options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name='favorite'
                size={30}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            )
          }}/>
        <Tab.Screen name='History' component={OrderHistoryScreen}  options={{
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome
                name='bell'
                size={30}
                color={
                  focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                }
              />
            )
          }}/>
      </Tab.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
  tabBarStyles: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    elevation: 0,
    blurRadius: 5,
  },

  blueViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})
