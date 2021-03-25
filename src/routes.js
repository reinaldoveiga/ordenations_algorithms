import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Congratulations from './screens/Congratulations';
import Level1 from './screens/Exercises/Level1';
import LevelSelection from './screens/LevelSelection';
//import LoginOrRegister from './screens/LoginOrRegister';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';
import {colors, fonts} from './styles';

const Stack = createStackNavigator();

function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: colors.colorPrimary,
          headerStyle: {
            backgroundColor: colors.textColorSecondary,
          },
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            color: colors.textColorPrimary,
            fontSize: fonts.input
          },
        }}>
        
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />

        <Stack.Screen
          name="LevelSelection"
          component={LevelSelection}
          options={{title: 'Escolha de níveis'}}
        />

        <Stack.Screen
          options={{
            title: 'Nível 1',
            headerStyle: {
              elevation: 0,
              backgroundColor: colors.colorPrimary,
            },
          }}
          name="Level1"
          component={Level1}
        />
        
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Congratulations"
          component={Congratulations}
        />
        
        <Stack.Screen
          options={{headerShown: false}}
          name="ScreenAbout"
          component={ScreenAbout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;