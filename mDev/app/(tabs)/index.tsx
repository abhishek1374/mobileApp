import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image, Button, Modal } from 'react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
  if (email && password) {
    console.log("Button pressed");
    setModalVisible(true);  // Show the custom modal
  } else {
    setErrorModalVisible(true); // Show error modal
  }
  // const handleLogin = () => {
  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  //   if (email && password) {
  //     if (!emailRegex.test(email)) {
  //       console.log("Invalid email format");
  //       setErrorModalVisible(true); // Show error modal for invalid email
  //     } else if (password.length < 6) {
  //       console.log("Password must be at least 6 characters");
  //       setErrorModalVisible(true); // Show error modal for short password
  //     } else {
  //       console.log("Button pressed");
  //       setModalVisible(true);  // Show the custom modal (success)
  //     }
  //   }
  
};

const [modalVisible, setModalVisible] = useState(false);
const [errorModalVisible, setErrorModalVisible] = useState(false);

  

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/12755/12755218.png'}} style={styles.logo}></Image>
        <Text style={styles.title}>Login</Text>

        {/* Username/Email Input */}
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/images/extra/login/user.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="grey"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/images/extra/login/padlock.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={!isPasswordVisible}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={require('../../assets/images/extra/login/hidden.png')}
              style={[styles.icon, { tintColor: isPasswordVisible ? '#FF6F61' : '#ccc' }]}
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <View>
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}  >Login</Text>
        </TouchableOpacity>

    {/* Success Modal */}
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>Login Successful</Text>
          <Text>Welcome, {email}!</Text>
          <Button
            title="OK"
            onPress={() => {
              navigation.navigate('Home', { email });
              // navigation.navigate('SecondHome', { email });



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
      onRequestClose={() => setErrorModalVisible(false)}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>Error</Text>
          <Text>Please fill in all fields correctly.</Text>
          <Button title="OK" onPress={() => setErrorModalVisible(false)} />
        </View>
      </View>
    </Modal>
  </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          {/* Direct to sign up page */}
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'white', textDecorationLine: 'underline', marginLeft: 5}}>Sign up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4468B2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderTopColor: '#2A57B0',
    borderTopWidth: 40,
  },
  formContainer: {
    backgroundColor: '#2A57B0',
    width: 'auto',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#000',
    outlineColor: 'transparent',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#888',
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    height: 50,
    width: 50,
  }
});