import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


const NextButton = ({ navigateDest }) => {

    return (
        <>
            <TouchableOpacity style={styles.nextButton} activeOpacity={0.5} onPress={navigateDest}>
                <Image source={require('../../assets/icons/next_button.png')}/>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    nextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
});

export default NextButton;