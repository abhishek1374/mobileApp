import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute, RouteProp } from '@react-navigation/native';
import { getScreenDimension } from '../../constants/Dimension';
const { width, height } = getScreenDimension();


export default function Home() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<{ params: { email: string }, 'params' }>>();
    
    // Destructure and provide fallback value in case Name is not available
    const { email } = route.params || {}; // Fallback to 'User' if Name is undefined
    
    return (
        <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '100%', padding: 15, backgroundColor: '#4468B2' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
                            <Image
                                source={require('../../assets/images/extra/home/ppp.png')}
                                style={{ width: 20, height: 20, tintColor: '#d9d9d9', marginLeft: 7, }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Hey</Text>
                    <Text style={styles.title}>{email}</Text>
                </View>

                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }}></View>

                <View style={styles.mainContainer}>
                    <View style={styles.subContainer}>
                        <View style={{width:'100%', height: '50%',justifyContent:'center',alignItems: 'center'}}>
                            <View style={{width:'100%', height: '100%',justifyContent:'center',alignItems: 'center'}}>
                            <Image source={require('../../assets/images/extra/home/shoes.png')} style={{height: '55%',width: '75%',}}></Image>
                            </View>
                        </View>
                        <View style={{marginLeft: 8,gap:3}}>
                            <Text style={{fontSize: 9, fontWeight: 'bold'}}>BEST SELLER</Text>
                            <Text>Nike Jorden</Text>
                            <Text style={{fontSize: 10, color:'red', textDecorationLine:'line-through' }}>₹2,193.00</Text>
                            <Text style={{fontSize: 12, color:'green' }}>₹493.00</Text>
                        </View>
                        <View style={styles.container}>
                            <Image source={require('../../assets/images/extra/home/plus.png')} style={{height:'80%', width:'80%'}}></Image>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: height,
        width: '100%',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1a1a1a',
    },
    subContainer: {
        height: '80%',
        width: 120,
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        margin: 15
    },
    container: {
        height:'12%',
        width: 20,
        backgroundColor: '#1a1a1a',
        marginTop: 'auto',
        marginLeft: 'auto',
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 5,
        justifyContent:'center',
        alignItems:'center',
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