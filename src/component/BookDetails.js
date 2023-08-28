import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const BookDetails = () => {
    const route = useRoute();
    const { title, data } = route.params;

    const bookDetails = data.find(book => book.title === title);

    const openLink = (link) => {
        if (link) {
            Linking.openURL(link)
                .catch(() => {
                    console.log('Error opening link');
                });
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                    <View style={styles.shadowContainer}>
                        <View>
                            <Image source={{ uri: bookDetails.imageLink }}
                                style={{ width: 275, height: 400, borderRadius: 10, marginTop: 10, }} />
                        </View>
                        <View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 40 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.headingText}>
                                        Rating
                                    </Text>
                                    <View >
                                        <StarRating starSize={15}
                                            disabled={false}
                                            maxStars={5}
                                            rating={bookDetails.rating}
                                            emptyStarColor={'gold'}
                                            fullStarColor={'gold'}
                                        />
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.headingText}>
                                        Reviews
                                    </Text>
                                    <Text style={styles.descriptionText}>
                                        ({bookDetails.reviews})
                                    </Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.headingText}>
                                        Price
                                    </Text>
                                    <Text style={styles.descriptionText}>
                                        ${bookDetails.price}
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{ flex: 2, marginTop: 25, marginLeft: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: '800', color: 'black' }}>{title}</Text>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'black' }}>
                        <Text style={{ fontSize: 22, fontWeight: '800', color: 'black' }}>
                            Author:
                        </Text>  {bookDetails.author}
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'black' }}>
                        <Text style={{ fontSize: 22, fontWeight: '800', color: 'black' }}>
                            Country:
                        </Text>  {bookDetails.country}
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'black' }}>
                        <Text style={{ fontSize: 22, fontWeight: '800', color: 'black' }}>
                            Language:
                        </Text>  {bookDetails.language}

                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'black' }}>
                        <Text style={{ fontSize: 22, fontWeight: '800', color: 'black' }}>
                            Year:
                        </Text>  {bookDetails.year}
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: '400', color: 'black' }}>
                        <Text style={{ fontSize: 22, fontWeight: '800', color: 'black' }}>
                            Pages:
                        </Text>  {bookDetails.pages}
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => openLink(bookDetails.link)}>
                        <Text style={styles.buttonLabel}>View Details</Text>
                        <MaterialCommunityIcons name={'open-in-new'} size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </View>

    );
};
const styles = StyleSheet.create({
    shadowContainer: {
        width: 325,
        height: 475,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    headingText: {
        fontSize: 16,
        fontWeight: '800',
        color: 'black'
    },
    descriptionText: {
        fontSize: 15,
        color: 'black',
        fontWeight: '400',

    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 10,
        backgroundColor: '#004D6D',
        padding: 10,
        width: 300,
        borderRadius: 50,
    },
    buttonLabel: {
        color: 'white',
        fontSize: 18,
        marginLeft: 5,
    },
});

export default BookDetails;
