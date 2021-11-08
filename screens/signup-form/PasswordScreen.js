import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import BackButton from '../../components/BackButton';
import FormHeading from '../../components/FormHeading';
import FormInput from '../../components/FormInput';
import GradientView from '../../components/GradientView';
import NextButton from '../../components/NextButton';
import SignupProgressBar from '../../components/SignupProgressBar';


const PasswordScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <GradientView>
            <SignupProgressBar progressBarFile={require('../../assets/icons/progress_bar3.png')} />
            <BackButton navigateDest='Name' />
            <FormHeading title="Last thing." question="Set a password." />
            <FormInput 
                placeholderText='password' 
                secureTextEntry={true} 
                value={password}
                onValueChange={setPassword}
                autoFocus={true}
            />
            <Image source={require('../../assets/icons/name_input_bar.png')} style={styles.nameBar} />
            { password.length > 5 && <NextButton marginTop={50} navigateDest='Signup' /> }
        </GradientView>
    );
};

const styles = StyleSheet.create({
    nameBar: {
        marginTop: 10,
    },
});

export default PasswordScreen;