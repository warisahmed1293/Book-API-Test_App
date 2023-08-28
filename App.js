import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Books from './src/component/Books'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BookDetails from './src/component/BookDetails'
import SplashScreen from './src/screen/Splash'

const Stack = createStackNavigator();

const App = () => {

  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 2000);
  }, []);

  if (!isAppReady) {
    return <SplashScreen />;
  }


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