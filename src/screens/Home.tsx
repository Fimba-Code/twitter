import * as React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
// import {SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
import TweetPost, {createPosts} from '../components/Tweet';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    header: {
        height: 60,
        width: '100%',
    },
    tweet: {
        width: '100%',
    },
    text: {
        fontSize: 20
    }
});

function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={createPosts()}
                renderItem={({item}) => {
                    return <TweetPost {...item}/>
                }}
                ListHeaderComponent={() => {
                    return (
                        <View style={styles.header}>
                            <HomeHeader />
                        </View>
                    )
                }}
                contentContainerStyle={styles.container}
            />

        </SafeAreaView>
    )
}

export default Home;