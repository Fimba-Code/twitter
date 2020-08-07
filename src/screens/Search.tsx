import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

function Search() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Search</Text>
            </View>
        </SafeAreaView>
    )
}

export default Search;