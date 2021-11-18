import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
        'Lato': require('../../assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Light': require('../../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin': require('../../assets/fonts/Lato/Lato-Thin.ttf'),
        'Lato-Bold': require('../../assets/fonts/Lato/Lato-Bold.ttf'),
    });
};

const FeedCarousel = ({ images, title }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={ console.warn } 
            />
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <FlatList 
                    style={styles.carousel}
                    data={images}
                    renderItem={({item}) => <Image source={item.file} style={styles.image} />}
                    horizontal
                    keyExtractor={item => item.file}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        fontFamily: 'Lato-Bold',
    },
    image: {
        marginRight: 15,
    },
    carousel: {
        marginTop: 10,
    },
});

export default FeedCarousel;