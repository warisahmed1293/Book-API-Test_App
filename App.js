import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavbar from './src/component/TopNavbar'
import Books from './src/component/Books'
import BookCard from './src/component/BookCard'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BookDetails from './src/component/BookDetails'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen options={{
          headerShown: false
        }} name="Books" component={Books} />
        <Stack.Screen options={{
          title: 'Book Details',
          headerStyle: {
            backgroundColor: '#004D6D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})