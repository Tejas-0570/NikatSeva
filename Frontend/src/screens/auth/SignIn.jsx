// screens/SignInScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email && password) {
      Alert.alert('Success', 'Signed in successfully!');
      navigation.replace('MainTabs'); // ✅ THIS
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <MaterialIcons name="near-me" size={80} color="white" />
            <Text style={styles.appName}>NikatSeva</Text>
            <Text style={styles.appSubtitle}>Trusted Services, Near You</Text>
          </View>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Sign in to continue your journey</Text>
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
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgetPassword')}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            {/* <Text style={styles.link}>Don't have an account? <Text style={{color: '#fff', fontWeight: 'bold', textDecorationLine: 'underline'}} onPress={() => navigation.navigate('SignUp')}>Create new account</Text></Text> */}
            <Text style={styles.link}>
              <Text style={{ color: '#96AAA7' }}>
                Don't have an account?{" "}
              </Text>

              <Text
                style={{ color: '#fff', fontWeight: 'bold', textDecorationLine: 'underline' }}
                onPress={() => navigation.navigate('SignUp')}
              >
                Create new account
              </Text>
            </Text>

          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    padding: 20,
    backgroundColor: '#192D3C',
    justifyContent: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center'
  },

  appName: {
    color: '#F0F0F0',
    fontSize: 38,
    fontWeight: 800,
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

  forgotPassword: {
    textAlign: 'right',
    marginBottom: 20,
    color: '#96AAA7',
    textDecorationLine: 'underline',
  }

});