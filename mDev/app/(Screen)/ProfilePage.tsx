import { useRoute, RouteProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image, Button } from 'react-native';

export default function ProfilePage() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<{ params: { email: String },'params'}>>();
    const { email } = route.params ||{}
    return (
        <View style={styles.main}>
            <Button title='press' onPress={()=> navigation.navigate('Calculator')}/>
            <View style={styles.container}>
                <Text>Profile Page</Text>
                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/12755/12755218.png'}} style={styles.logo}></Image>
                
                <Text style={styles.title}>Name</Text>
                <Text style={styles.title}>Number</Text>
                <Text style={styles.title}>{email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      height: 300,
      width: 200,
      backgroundColor: 'red',
    //   justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
        height: 50,
        width: 50,
      },
    title: {
      fontSize: 24,
      color: 'black',
      fontWeight: 'bold',
    },
});

