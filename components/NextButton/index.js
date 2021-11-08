import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


const NextButton = ({ navigateDest, marginTop }) => {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity style={[styles.nextButton, { marginTop: marginTop }]} activeOpacity={0.5} onPress={() => navigation.navigate(navigateDest)}>
                <Image source={require('../../assets/icons/next_button.png')}/>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    nextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 25,
    },
});

export default NextButton;