import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

function Messages() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Hello from messages</Text>
            </View>
        </SafeAreaView>
    )
}

export default Messages;