import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, TabStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="My Home" component={MainStackNavigator} />
            <Tab.Screen name="My About" component={TabStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;