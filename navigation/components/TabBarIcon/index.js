import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const TabBarIcon = ({ focused, selectedIcon, unselectedIcon, name }) => {
    const tabIndicatorBar = require('../../../assets/icons/navbar/tab_indicator.png');

    return (
        <View style={styles.tabIconContainer}>
            <Image source={tabIndicatorBar} style={{ marginBottom: 15, opacity: focused ? 1.0 : 0.0 }} /> 
            <Image 
                source={focused ? selectedIcon : unselectedIcon} 
            />
            <Text>{ name }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    tabIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
    },
});

export default TabBarIcon;