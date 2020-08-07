import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Tweet = {
    username: string;
    handler: string;
    post: string;
    // img?: string;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 200,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'lightgrey'
    },
    titleContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    tweetContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 20,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        // marginHorizontal: 4
    },
    userHandler: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#A6B0BA',
        // paddingLeft: 4
    },
    date: {
        fontSize: 16,
        fontWeight: '200',
        color: '#A6B0BA',
        // paddingHorizontal: 4
    },
    tweet: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    userProfileImg: {
        width: 40,
        height: 40,
        borderRadius: 50
    }
})

const tweets = [
    'it to make a type specimen book. It has s',
    'specimen book. It has su',
    'publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    'it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software',
    'like Aldus PageMaker including versions of Lorem Ipsum'
];

const names = [
    {username: 'Faustino', handler: '@Fausto95'},
    {username: 'Bruno', handler: '@Kiafuka'},
    {username: 'Joselson', handler: '@Json'},
    {username: 'Vivaldo', handler: '@Viviod'}
];

export const createPosts = (): Tweet => {
    return Array.from({length: 40}, (_, i) => {
        const user: {name: string, handler: string} = names[Math.floor(Math.random() * names.length)];
        const post: string = tweets[Math.floor(Math.random() * tweets.length)];
        return {
            ...user,
            post
        }
    })
}

interface Props extends Tweet {}

function TweetPost({username, handler, post}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.tweetContainer}>
                <View>
                    <Image style={styles.userProfileImg} source={{uri: 'https://pbs.twimg.com/profile_images/1290018978765647878/dgZ8DslL_bigger.jpg'}}/>
                </View>
                <View style={{flex: 1}}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.userName} numberOfLines={1}>
                            {username} 
                            <Text style={styles.userHandler}> {handler}</Text>
                            <Text style={styles.date}> · 4 Jan</Text>
                        </Text>
                    </View>
                    <View style={{marginLeft: 20}}>
                        <Text style={styles.tweet}>{post}</Text>
                    </View>
                    <Image source={{uri: 'https://pbs.twimg.com/media/Ee1iSmtU8AAU930?format=jpg&name=small'}}/>
                </View>
            </View>
        </View>
    )
}

export default TweetPost;