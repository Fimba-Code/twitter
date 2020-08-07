import * as React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    side: {
        width: 40,
        paddingHorizontal: 5
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    title: {
        fontSize: 20,
        fontWeight: "400",
    }
})

function HomeHeader(props) {
    console.log('rendered')
    return (
        <View style={styles.container}>
            <View style={styles.side}>
                <Image 
                    style={styles.image} 
                    source={{uri: 'https://pbs.twimg.com/profile_images/1290018978765647878/dgZ8DslL_bigger.jpg'}}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Pagina Inicial</Text>
            </View>
            <View style={styles.side} />
        </View>
    )
}

export default HomeHeader;