import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
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
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Image source={require('../assets/icons/menu_icon.png')} style={styles.menuIcon} />
                <Text style={styles.heading}>Flix</Text>
                <Image source={require('../assets/icons/settings_icon.png')} style={styles.settingsIcon} />
            </View>
            <View>
                <FeedCarousel images={images} title='Trending' />
                <FeedCarousel images={images} title='Popular with Friends' />
                <FeedCarousel images={images} title='Top Shows in the US' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    headerBar: {
        flexDirection: 'row',
        marginTop: 35,
        marginBottom: 35,
        justifyContent: 'space-between',
    },
    menuIcon: {
    },
    heading: {
        fontSize: 20,
    },
    settingsIcon: {
    },
});

export default HomeFeedScreen;