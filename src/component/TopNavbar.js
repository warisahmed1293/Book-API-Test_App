import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopNavbar = () => {
    return (
        <View style={styles.mainHeader}>
            <View>
                <Text style={styles.userName}>
                    Hi, Nick
                </Text>
            </View>
            <View>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLy0iBBKr839kRpNKRTr4nh7y-uMIeqgboOH6-O-9h&s' }} style={styles.profileImage} />
            </View>
        </View>
    )
}


export default TopNavbar

const styles = StyleSheet.create({
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    userName: {
        fontSize: 24,
        fontWeight: '800',
        color: 'black',
    },
    mainHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10

    }
})