import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ShoeData } from '../interface/shoedetail';
import { getScreenDimension } from '@/constants/Dimension';
const { width, height } = getScreenDimension();

let details: ShoeData[] = [
    {
        id: 1,
        name: 'Nike Air Zoom Pegasus 37',
        price: '₹2,193.00',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },

    {
        id: 2,
        name: 'Nike jordan',
        price: '₹2,193.00',
        image: require('../../assets/images/extra/home/shoes.png'),
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },
    {
        id: 1,
        name: 'Nike Air Zoom Pegasus 37',
        price: '₹2,193.00',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },

    {
        id: 2,
        name: 'Nike jordan',
        price: '₹2,193.00',
        image: require('../../assets/images/extra/home/shoes.png'),
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },{
        id: 1,
        name: 'Nike Air Zoom Pegasus 37',
        price: '₹2,193.00',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },

    {
        id: 2,
        name: 'Nike jordan',
        price: '₹2,193.00',
        image: require('../../assets/images/extra/home/shoes.png'),
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },{
        id: 1,
        name: 'Nike Air Zoom Pegasus 37',
        price: '₹2,193.00',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },

    {
        id: 2,
        name: 'Nike jordan',
        price: '₹2,193.00',
        image: require('../../assets/images/extra/home/shoes.png'),
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },{
        id: 1,
        name: 'Nike Air Zoom Pegasus 37',
        price: '₹2,193.00',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },

    {
        id: 2,
        name: 'Nike jordan',
        price: '₹2,193.00',
        image: require('../../assets/images/extra/home/shoes.png'),
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },{
        id: 1,
        name: 'Nike Air Zoom Pegasus 37',
        price: '₹2,193.00',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
        discount: '₹493.00',
        item_name: 'Nike Air Zoom Pegasus 37',
    },

   
];

export default function SecondHome() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<{ params: { email: string }, 'params' }>>();
    const { email } = route.params || {};

    const renderCard = ({ item } : { item: ShoeData }) => (
        <View style={styles.subContainer}>
            <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                    source={ item.image } 

                    // source={item.image.startsWith('http') ? { uri: item.image } : item.image}

                    // source={{ uri: item.image }}
                    style={{ height: '55%', width: '75%', borderRadius: 10, overflow: 'hidden' }} 
                />
            </View>
            <View style={{ marginLeft: 8, gap: 3 }}>
                <Text style={{ fontSize: 9, fontWeight: 'bold' }}>BEST SELLER</Text>
                <Text>{item.name}</Text>
                <Text style={{ fontSize: 10, color: 'red', textDecorationLine: 'line-through' }}>
                    {item.price}
                </Text>
                <Text style={{ fontSize: 12, color: 'green' }}>{item.price}</Text>
            </View>
            <TouchableOpacity>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/extra/home/plus.png')} 
                    style={{ height: '80%', width: '80%' }} 
                />
            </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: width, padding: 15, backgroundColor: 'green' }}>
                    {/* <View style={{ flexDirection: 'row',position:'absolute',top: height*0.02,right: width*0.03 }}>
                        <TouchableOpacity  onPress={() =>  { navigation.navigate('ProfilePage')}}>
                            <Image
                                source={require('../../assets/images/extra/home/ppp.png')}
                                style={{ width: width*0.1, height: height*0.08, tintColor: '#d9d9d9', marginLeft: width*0.1 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('CartPage')}>
                            <Image
                                source={require('../../assets/images/extra/cart/cart.png')}
                                style={{ width: width*0.1, height: height*0.08, tintColor: '#d9d9d9', marginLeft: width*0.1 }}
                            />
                        </TouchableOpacity>
                    </View> */}
                    <Text style={styles.title}>Hey</Text>
                    <Text style={styles.title}>{email}</Text>
                </View>

                <FlatList
                    data={details}
                    numColumns={2}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: height,
        width: width,
        paddingTop: height*0.02,
    },
    title: {
        fontSize: width*0.06,
        color: 'white',
        fontWeight: 'bold',
    },
    subContainer: {
        height: height*0.3,
        width: width*0.4,
        backgroundColor: 'yellow',
        borderRadius: 10,
        margin: width*0.05,
        justifyContent: 'space-between',
    },
    container: {
        height: height*0.04,
        width: width*0.07,
        backgroundColor: '#1a1a1a',
        marginTop: 'auto',
        marginLeft: 'auto',
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});




// import React from "react";
// import { Image, StyleSheet, View, Text, ScrollView, ImageBackground } from "react-native";

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <View style={{width:'100%', height: '100%',justifyContent:'center',alignItems: 'center'}}>
//       <Image
//       source={require('../../assets/images/New folder/shoe.jpg')} style={styles.bgimage}></Image>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'black',
//     // flex: 1,
//     height: '100%',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bgimage: {
//     // flex: 1,
//     height: '50%',
//     width: '80%',
//     borderRadius: 20,
//     borderColor: 'black',
//     borderWidth: 1,
//     elevation: 10,
//     backgroundColor: 'black',
//   },
// });