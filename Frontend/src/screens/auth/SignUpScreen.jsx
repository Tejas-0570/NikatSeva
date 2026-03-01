// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Add your registration logic here (e.g., API call)
    if (name && email && password && password === confirmPassword) {
      // Simulate successful registration
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('SignIn');
    } else {
      Alert.alert('Error', 'Please fill in all fields and ensure passwords match.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialIcons name="near-me" size={80} color="white" />
        <Text style={styles.appName}>NikatSeva</Text>
        <Text style={styles.appSubtitle}>Trusted Services, Near You</Text>
      </View>
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subtitle}>Join our trusted service community</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999999"
        value={name}
        onChangeText={setName}
        keyboardType="string"
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="confirm Password"
        placeholderTextColor="#999999"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.link}>
          <Text style={{ color: '#96AAA7' }}>
            Already have an account?{" "}
          </Text>

          <Text
            style={{ color: '#fff', fontWeight: 'bold', textDecorationLine: 'underline' }}
            onPress={() => navigation.navigate('SignIn')}
          >
            Sign In
          </Text>
        </Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    padding: 20,
    backgroundColor: '#192D3C'
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
    justifyContent: 'center',
  },

  appName: {
    color: '#F0F0F0',
    fontSize: 38,
    fontWeight: 800,
    marginBottom: 10,
    marginTop: 15,
  },

  appSubtitle: {
    color: '#96AAAA',
    fontSize: 18,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#F0F0F0'
  },

  subtitle: {
    fontSize: 16,
    color: '#96AAAA',
    marginBottom: 30
  },

  input: {
    borderColor: '#ccc',
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#324652',
    color: '#F0F0F0'
  },

  button: {
    backgroundColor: '#F8FAFC',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center'
  },

  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },

  link: {
    textAlign: 'center',
    marginTop: 30,
    color: '#96AAA7',
    fontSize: 16
  },
});