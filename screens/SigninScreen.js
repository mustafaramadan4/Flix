import React, { useRef, useState } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import FormHeading from '../components/FormHeading';
import FormInput from '../components/FormInput';
import GradientView from '../components/GradientView';
import NextButton from '../components/NextButton';

const loginFile = require('../src/auth/login');
const loginWithCredentials = loginFile.loginWithCredentials;

const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passwordRef = useRef();

    // regex validation for email to determine if we should enable the next button or not
    const emailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    let isEmailValid = emailRegex.test(String(email).toLowerCase());

    return (
        <GradientView>
            <BackButton navigateDest='Signup'/>
            <FormHeading title="Welcome back." question="We missed you." />
            <FormInput
                    value={email}
                    onValueChange={setEmail}
                    placeholderText='email'
                    autoFocus={true}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoComplete='email'
                    textContentType='emailAddress'
                    onSubmitEditing={() => passwordRef.current.focus()}
            />
            <Image source={require('../assets/icons/name_input_bar.png')} style={styles.nameBar} />
            <FormInput 
                placeholderText='password' 
                secureTextEntry={true} 
                value={password}
                onValueChange={setPassword}
                refInner={passwordRef}
                onSubmitEditing={() => loginWithCredentials()}
            />
            <Image source={require('../assets/icons/name_input_bar.png')} style={styles.nameBar} />
            <Text style={styles.forgotPassword}>forgot your password?</Text>
            {
                isEmailValid && password.length > 0 &&
                <NextButton
                    onPress={async () => {
                        try {
                            const response = await loginWithCredentials(email, password);
                            console.log('response = ' + response);
                            if (response) {
                                navigation.navigate('TabNav');
                            } else {
                                console.log('Auth request failed');
                            }
                        } catch (e) {
                            console.log('err happened: ' + e);
                        }
                    }}
                    marginTop={45}
                />
            }
        </GradientView>
    );
};

const styles = StyleSheet.create({
    forgotPassword: {
        color: '#FFFFFF',
        textAlign: 'right',
        textDecorationLine: 'underline',
        marginTop: 20,
    },
    nameBar: {
        marginTop: 10,
    },
});

export default SigninScreen;