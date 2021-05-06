import React from 'react';
import { FlatList, View, StyleSheet, Image, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Pets from './Pets'
import Petss from './Petss'

export default function PetsScreen() {
    const pets = [
        { name: "Pastel", type: "Cat", year: "2 years", location: "Koforidua", num: "1" },
        { name: "Pas", type: "Dog", year: "1 year", location: "Accra", num: "2" },
        { name: "Raka", type: "Cat", year: "2 years", location: "Asafo", num: "3" },
        { name: "Jhony", type: "Dog", year: "4 years", location: "Suhum", num: "4" },
        { name: "Kirs", type: "Cat", year: "2 years", location: "Amantra", num: "5" },
        { name: "Pas", type: "Dog", year: "1 year", location: "Accra", num: "6" },
        { name: "Raka", type: "Cat", year: "2 years", location: "Asafo", num: "7" },
        { name: "Jhony", type: "Dog", year: "4 years", location: "Suhum", num: "8" },
        { name: "Kirs", type: "Cat", year: "2 years", location: "Amantra", num: "9" },
        { name: "Pas", type: "Dog", year: "1 year", location: "Accra", num: "10" },
        { name: "Raka", type: "Cat", year: "2 years", location: "Asafo", num: "11" },
        { name: "Jhony", type: "Dog", year: "4 years", location: "Suhum", num: "12" },
        { name: "Kirs", type: "Cat", year: "2 years", location: "Amantra", num: "13" },
    ]

    return (
        <View>
            <View style={styles.searchBar}>
                <SearchBar
                    placeholder="Type Here..."
                />
            </View>
            <FlatList
                data={pets}
                renderItem={({ item }) => {
                    return <View>
                         <Pets name={item.name} type={item.type} year={item.year} location={item.location} />
                            <Petss name={item.name} type={item.type} year={item.year} location={item.location} />
                    </View>
                }}
                keyExtractor={(item) => item.num}
            />

            

        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        marginBottom: 10,
    },
})
