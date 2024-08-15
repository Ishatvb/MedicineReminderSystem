import * as React from 'react';
import UploadScreen from './Screens/UploadScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './Screens/DetailsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Main App Component
export default function App(){
    const TabNav = createBottomTabNavigator();

    const tabConfig = [
        {
            name: "Upload",
            component: UploadScreen,
            focusedIcon: "file-upload",
            unfocusedIcon: "file-upload-outline",
            iconComponent: MaterialCommunityIcons
        },
        {
            name: "Details",
            component: DetailsScreen,
            focusedIcon: "file-text",
            unfocusedIcon: "file-text-o",
            iconComponent: FontAwesome // Use FontAwesome for Details icons
        },
        {
            name: "Profile",
            component: ProfileScreen,
            focusedIcon: "user",
            unfocusedIcon: "user-o",
            iconComponent: FontAwesome
        }
    ];

    const screenOptions = ({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            const routeConfig = tabConfig.find(config => config.name === route.name);
            const iconName = focused
                ? routeConfig.focusedIcon
                : routeConfig.unfocusedIcon;
            const IconComponent = routeConfig.iconComponent;

            return <IconComponent name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
            fontSize: 14,
            paddingBottom: 5,
            fontWeight: '600'
        },
        tabBarStyle: {
            height: 60,
            paddingTop: 0
        }
    });

    return(
        <NavigationContainer>
            <TabNav.Navigator screenOptions={screenOptions}>
                {tabConfig.map(routeConfig => (
                    <TabNav.Screen
                        key ={routeConfig.name}
                        name={routeConfig.name}
                        component={routeConfig.component}
                    />
                ))}
            </TabNav.Navigator>
        </NavigationContainer>
    );
}
