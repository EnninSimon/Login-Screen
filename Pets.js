import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Pets({ name, type, year, location }) {

    return (

        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('./assets/Cat1.jpg')} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.descriptionContainer}>
                    <Text numberOfLines={1} style={styles.name}>{name}</Text>
                    <Text>{type}</Text>
                    <Text>{year}</Text>
                    <Text><Ionicons name="ios-location-outline" size={13} color="red" /> {location}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 15,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        flex: 1
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 10
    },
    infoContainer: {
        justifyContent: 'center',
        marginLeft: 0,
        marginVertical: 10,
        backgroundColor: '#fafafa',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        flex: 1
    },
    descriptionContainer: {
        marginHorizontal: 8
    }
})
