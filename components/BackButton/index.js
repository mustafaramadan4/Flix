import React  from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';


const BackButton = ({ navigateDest }) => {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(navigateDest)}>
                <Image 
                    source={require('../../assets/icons/back_button.png')}
                    style={styles.backButton}
                />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    backButton: {
        marginTop: 30,
    }
});

export default BackButton;