import React, { useRef, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import BackButton from '../../components/BackButton';
import FormHeading from '../../components/FormHeading';
import FormInput from '../../components/FormInput';
import GradientView from '../../components/GradientView';
import NextButton from '../../components/NextButton';
import SignupProgressBar from '../../components/SignupProgressBar';


const NameScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const lastNameRef = useRef();

    return (
        <>
            <GradientView>
                <SignupProgressBar progressBarFile={require('../../assets/icons/progress_bar2.png')} />
                <BackButton navigateDest='Email' />
                <FormHeading title="Excuse our manners." question="What's your name?" />
                <FormInput 
                    value={firstName} 
                    onValueChange={setFirstName} 
                    placeholderText='First' 
                    autoFocus={true} 
                    autoCapitalize='words' 
                    autoComplete='name'
                    textContentType='givenName'
                    onSubmitEditing={() => lastNameRef.current.focus()}
                /> 
                <Image source={require('../../assets/icons/name_input_bar.png')} style={styles.nameBar} />
                <FormInput 
                    value={lastName} 
                    onValueChange={setLastName} 
                    placeholderText='Last' 
                    autoFocus={false} 
                    autoCapitalize='words' 
                    autoComplete='name-family'
                    textContentType='familyName'
                    refInner={lastNameRef}   
                    onSubmitEditing={() => lastName.length > 0 && navigation.navigate('Password')}
                /> 
                <Image source={require('../../assets/icons/name_input_bar.png')} style={styles.nameBar} />
                { firstName.length > 0 && lastName.length > 0 && <NextButton marginTop={25} navigateDest='Password' /> }
            </GradientView>
        </>
    );
};

const styles = StyleSheet.create({
    nameBar: {
        marginTop: 10,
    },
});

export default NameScreen;