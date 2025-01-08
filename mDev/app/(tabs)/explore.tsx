import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { View, StyleSheet, ImageBackground, ScrollView, Text, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SignUp(props:any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Modal visibility states
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const navigation = useNavigation();
  
  const handleLogin = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        setModalVisible(true);  // Show success modal
      } else {
        setErrorModalVisible(true);  // Show error modal for password mismatch
      }
    } else {
      setErrorModalVisible(true);  // Show error modal for missing fields
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.main}>
      <ImageBackground 
        source={require('../../assets/images/extra/signup/3.jpg')}
        // source={{uri: 'https://i.pinimg.com/originals/0f/8b/e0/0f8be06bd9e92dcb8ff0125ac5e5f8bc.jpg'}}
        style={styles.mainBackground} >
      </ImageBackground>

      <View style={styles.signupBlock}>
        <Text style={styles.signupText}>Sign Up</Text>

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputbox} placeholder='First Name' />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputbox} placeholder='Last Name' />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/images/extra/signup/email.png')} style={styles.icon} />
            <TextInput 
              style={styles.inputbox} 
              placeholder='Email' 
              value={email} 
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/images/extra/signup/dob.png')} style={styles.icon} />
            <TextInput style={styles.inputbox} placeholder='Date of Birth' />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/images/extra/signup/padlock.png')} style={styles.icon} />
            <TextInput 
              style={styles.inputbox} 
              placeholder='Password' 
              secureTextEntry={true} 
              value={password} 
              onChangeText={setPassword} 
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/images/extra/signup/padlock.png')} style={styles.icon} />
            <TextInput
              style={styles.inputbox}
              placeholder="Confirm Password"
              secureTextEntry={!isPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image
                source={require('../../assets/images/extra/signup/hidden.png')}
                style={[styles.icon, { tintColor: isPasswordVisible ? '#FF6F61' : '#d9d9d9', marginRight: 7 }]}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        
        <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text>Already have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{color: 'white',marginBottom:5, marginLeft: 5, textDecorationLine: 'underline'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Success Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Login Successful</Text>
            <Text>Welcome, {email}!</Text>
            <Button
              title="OK"
              onPress={() => {
                navigation.navigate('Home', { email });
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>

      {/* Error Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={errorModalVisible}
        onRequestClose={() => setErrorModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Error</Text>
            <Text>Please fill in all fields or ensure passwords match.</Text>
            <Button title="OK" onPress={() => setErrorModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
  mainBackground: {
    height: '100%',
    width: '100%',
  },
  signupBlock: {
    height: 350,
    width: 250,
    backgroundColor: 'transparent',
    backdropFilter: 'blur(2px)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -125 }, { translateY: -175 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  scroll: {
    height: '80%',
    width: '100%',
    marginTop: 20,
    marginLeft: 15,
  },
  inputbox: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '90%',
    padding: 10,
    fontSize: 14,
    outlineColor: 'transparent',
    outlineWidth: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    margin: 5,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#d9d9d9',
    marginLeft: 7,
  },
  signupButton: {
    backgroundColor: 'white',
    width: '70%',
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 7,
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'black',
    fontSize: 16,
  }
});
