import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

function Notifications() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Hello from Notifications</Text>
            </View>
        </SafeAreaView>
    )
}

export default Notifications;