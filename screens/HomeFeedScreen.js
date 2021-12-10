import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import FeedCarousel from '../components/FeedCarousel';

const HomeFeedScreen = () => {
    const images = [
        { file: require('../assets/images/carousel/money_heist.png')},
        { file: require('../assets/images/carousel/squid_game.png')},
        { file: require('../assets/images/carousel/billions.png')},
        { file: require('../assets/images/carousel/psych.png')},
        { file: require('../assets/images/carousel/money_heist2.png')},
        { file: require('../assets/images/carousel/squid_game2.png')},
        { file: require('../assets/images/carousel/billions2.png')},
        { file: require('../assets/images/carousel/psych2.png')},
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerBar}>
                    <Text style={styles.heading}>Flix</Text>
                </View>
                <View>
                    <FeedCarousel images={[...images].sort(() => 0.5 - Math.random())} title='Trending' />
                    <FeedCarousel images={[...images].sort(() => 0.5 - Math.random())} title='Popular with Friends' />
                    <FeedCarousel images={[...images].sort(() => 0.5 - Math.random())} title='Top Shows in the US' />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1
    },
    headerBar: {
        flexDirection: 'row',
        marginTop: 35,
        marginBottom: 35,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
    },
    bottomNavBar: {
        backgroundColor: '#242632',
        paddingTop: 20,
        width: '100%',
        height: 200,
        flexDirection: 'row',
        zIndex: 5,
        position: 'absolute',
        top: '90%',
        left: 0,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
});

export default HomeFeedScreen;