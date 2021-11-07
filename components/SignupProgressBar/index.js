import React from 'react';
import { Image, StyleSheet, Platform } from 'react-native';

const SignupProgressBar = () => {

    return (
        <>
            <Image 
                source={require('../../assets/icons/progress_bar1.png')} 
                style={styles.progressBar}
            /> 
        </>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        marginTop: Platform.OS === 'ios' ? 10 : 0,
    },
});

export default SignupProgressBar;