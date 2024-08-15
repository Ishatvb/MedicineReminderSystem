import * as React from 'react';
import UploadScreen from './Screens/UploadScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


// Main App Component
export default function App(){
    const TabNav=createBottomTabNavigator()
    return(
        <NavigationContainer>
            <TabNav.Navigator>
                <TabNav.Screen name='Upload' component={UploadScreen}/>
            </TabNav.Navigator>
        </NavigationContainer>
    )
}