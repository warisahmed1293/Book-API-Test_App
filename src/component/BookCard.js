import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BookCard = React.memo((props) => {

    return (
        <View style={styles.mainContainer}>

            <TouchableOpacity>
                <View>
                    <Image source={{ uri: props.ImageLink }}
                        style={{ width: 150, height: 250, borderRadius: 15 }} />
                </View>
                <View style={styles.overlay}>
                    {
                        props.isLiked ?
                            <MaterialCommunityIcons name='cards-heart' color={'red'} size={25} /> :
                            <MaterialCommunityIcons name='cards-heart-outline' color={'red'} size={25} />
                    }
                </View>
            </TouchableOpacity>
            <View>
                <View>
                    <Text style={styles.bookTitle} numberOfLines={1}>{props.BookTitle.length > 25 ? props.BookTitle.substring(0, 25) + "..." : props.BookTitle}</Text>
                </View>
                <View style={styles.review}>
                    <View style={styles.reviewContainer}>
                        <StarRating starSize={25}
                            disabled={false}
                            maxStars={5}
                            rating={props.rating}
                            emptyStarColor={'gold'}
                            fullStarColor={'gold'}
                        />
                    </View>
                    <View>
                        <Text>
                            ({props.reviews})
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: '800', color: 'black' }}>
                        ${props.price}
                    </Text>
                </View>
            </View>
        </View>
    )
})

export default BookCard

const styles = StyleSheet.create({
    bookTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: 'black',
        marginTop: 10,
        marginBottom: 5,
    },
    mainContainer: {
        flex: 1,
        width: "50%",
        padding: 10,
    },
    reviewContainer: {
        width: 50
    },
    review: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginTop: 5
    },
    overlay: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})