import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import MessagesScreen from '../screens/Messages';
import NotificationsScreen from '../screens/Notifications';
import SearchScreen from '../screens/Search';

import HomeIcon from '../assets/icons/Home';
import SearchIcon from '../assets/icons/Search';
import NotificationIcon from '../assets/icons/Notification';
import MessageIcon from '../assets/icons/Message';


const Stack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

function BottomStackNavigator() {
    return (
        <BottomStack.Navigator 
            initialRouteName="Home"
            // headerMode="screen"
            screenOptions={{
                title: 'Hey'
            }}
        >
            <BottomStack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: () => <HomeIcon width={20} height={20} color="red" />,
                }}
            />
            <BottomStack.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                    tabBarIcon: () => <SearchIcon width={20} height={20} color="red" />
                }}
            />
            <BottomStack.Screen 
                name="Notifications" 
                component={NotificationsScreen} 
                options={{
                    tabBarIcon: () => <NotificationIcon width={20} height={20} color="red" />
                }}
            />
            <BottomStack.Screen 
                name="Messages" 
                component={MessagesScreen} 
                options={{
                    tabBarIcon: () => <MessageIcon width={20} height={20} color="red" />
                }}
            />
        </BottomStack.Navigator>
    )
}

function MainStack() {
    return (
        <Stack.Navigator 
            initialRouteName="App" 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name="App" 
                component={BottomStackNavigator} 
            />
        </Stack.Navigator>
    )
}




export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}