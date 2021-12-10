import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Explore Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        alignSelf: 'center'
    },
});

export default ExploreScreen;