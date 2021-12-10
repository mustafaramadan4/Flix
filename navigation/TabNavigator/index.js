import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeFeedScreen from '../../screens/HomeFeedScreen';
import ExploreScreen from '../../screens/ExploreScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const homeSelectedIcon = require('../../assets/icons/navbar/home_selected_icon.png');
    const homeUnselectedIcon = require('../../assets/icons/navbar/home_icon.png');
    const exploreSelectedIcon = require('../../assets/icons/navbar/explore_selected_icon.png');
    const exploreUnselectedIcon = require('../../assets/icons/navbar/explore_icon.png');
    const profileSelectedIcon = require('../../assets/icons/navbar/profile_selected_icon.png');
    const profileUnselectedIcon = require('../../assets/icons/navbar/profile_icon.png');

    return (
        <Tab.Navigator 
            screenOptions={() => ({
                headerShown: false,
                tabBarStyle: { position: 'absolute' },
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: '#FFDF85',
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeFeedScreen} 
                options={{
                    tabBarIcon: ({ focused }) => { 
                        return <TabBarIcon 
                                    name="Home"
                                    focused={focused} 
                                    selectedIcon={homeSelectedIcon} 
                                    unselectedIcon={homeUnselectedIcon} 
                                />; 
                    }
                }} 
                />
            <Tab.Screen 
                name="Explore" 
                component={ExploreScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabBarIcon 
                                    name="Explore" 
                                    focused={focused} 
                                    selectedIcon={exploreSelectedIcon} 
                                    unselectedIcon={exploreUnselectedIcon} 
                                />;
                    }
                }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{ 
                    tabBarIcon: ({ focused }) => { 
                        return <TabBarIcon 
                                    name="Profile" 
                                    focused={focused} 
                                    selectedIcon={profileSelectedIcon} 
                                    unselectedIcon={profileUnselectedIcon} 
                                />;
                    }
                }} 
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'black',
        height: 100,
    },
});

export default TabNavigator;