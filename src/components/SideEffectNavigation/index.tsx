import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SideEffect from './SideEffect';
import Etc from './Etc';

const Tab = createMaterialTopTabNavigator();

const SideEffectNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="부작용" component={SideEffect} />
            <Tab.Screen name="그 외" component={Etc} />
        </Tab.Navigator>
    );
}
export default SideEffectNavigator;
