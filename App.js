/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpences';
import AllExpenses from './screens/AllExpenses';
import {GlobalStyles} from './constants/styles';
import IconButton from './UI/IconButton';
import {StyleSheet} from 'react-native';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    //screenOptionsможе приймати і обєкт і функцію!!!!!!!!!!!!!!
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
          // headerTintColor: 'white',
          // tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
          // tabBarActiveTintColor: GlobalStyles.colors.primary500,
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerRight: () => (
          <IconButton
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
            icon="+"
            color={styles.addColor}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          // tabBarIcon: ({color, size}) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          // tabBarIcon: ({color, size}) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}

const styles = StyleSheet.create({
  addColor: {
    color: 'white',
  },
});

export default App;
