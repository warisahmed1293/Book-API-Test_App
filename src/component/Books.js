import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import TopNavbar from './TopNavbar';

const Books = () => {
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([]);
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    useEffect(() => {
        const fetchBooks = async () => {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR'
            };
            try {
                const response = await fetch('https://books-list-api.vercel.app/books', {
                    method: 'GET',
                    headers: headers
                });
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData.data);
                    setOriginalData(jsonData.data);
                } else {
                    console.error('Error:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchBooks();
    }, []);
    const onSearch = (text) => {
        setSearch(text);
        if (text === '') {
            setData(originalData);
        } else {
            setData(originalData.filter(item => item.title.toLowerCase().includes(text.toLowerCase())));
        }
    };
    if (isLoading) {
        return (
            <View>
                <View>
                    <TopNavbar />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#000" />
                </View>
            </View>
        );
    }

    return (
        <View>
            <View>
                <TopNavbar />
            </View>
            <View>
                <View style={styles.asemble}>
                    <View style={styles.main}>
                        <TextInput
                            placeholder='Search'
                            style={styles.input}
                            value={search}
                            onChangeText={txt => onSearch(txt)}
                        />
                    </View>
                    <View style={styles.buttonP}>
                        <TouchableOpacity>
                            <Ionicons style={styles.icon} name='search-sharp' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('BookDetails', { title: item.title, data: data })}>
                        <BookCard ImageLink={item.imageLink} BookTitle={item.title} rating={item.rating} reviews={item.reviews} price={item.price} isLiked={item.is_liked} />
                    </TouchableOpacity>
                }
            />

        </View>
    )
}

export default Books

const styles = StyleSheet.create({
    bookTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: 'black',
        marginTop: 10
    },
    reviewContainer: {
        width: 50
    },
    review: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    asemble: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center'
    },
    main: {
        backgroundColor: "#fff",
        width: 250,
        height: 50,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
    },
    buttonP: {
        height: 50,
        width: 70,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderColor: '#c0c0c0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginLeft: 10,
        marginTop: 3
    },
    icon: {
        marginRight: 5
    }
})