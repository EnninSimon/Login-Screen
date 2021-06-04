import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Contact from './Contact';

export default function ContactScreen() {
    const contacts = [
        { name: "Sam Bob", number: "043-565-2456" },
        { name: "John Mike", number: "043-325-7665" },
        { name: "Eunice Anderson", number: "043-695-7665" },
        { name: "Joseph Soup", number: "043-565-7665" },
        { name: "Mom", number: "043-565-7855" },
        { name: "Daddy", number: "043-246-7665" },
        { name: "Sam Bob", number: "043-565-2456" },
        { name: "John Mike", number: "043-325-7665" },
        { name: "Eunice Anderson", number: "043-695-7665" },
        { name: "Joseph Soup", number: "043-565-7665" },
        { name: "Mom", number: "043-565-7855" },
        { name: "Daddy", number: "043-246-7665" },
        { name: "Sam Bob", number: "043-565-2456" },
        { name: "John Mike", number: "043-325-7665" },
        { name: "Eunice Anderson", number: "043-695-7665" },
        { name: "Joseph Soup", number: "043-565-7665" },
        { name: "Mom", number: "043-565-7855" },
        { name: "Daddy", number: "043-246-7665" },
    ]
    return (
        <View>
            <FlatList 
            data={contacts}
            renderItem = {({item})=>{
                return <Contact name={item.name} phone={item.number}/>
            }}
            keyExtractor={(item)=>item.number}
            />
        </View>
    );
}
