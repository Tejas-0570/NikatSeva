import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    // 🔹 Later you’ll connect this to backend / Firebase
    Alert.alert(
      'Password Reset',
      'If this email exists, a reset link has been sent.'
    );

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={28} color="#F0F0F0" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Forgot Password</Text>
        </View>

        {/* Content */}
        <View style={styles.card}>
          <MaterialIcons
            name="lock-reset"
            size={60}
            color="#192D3C"
            style={{ marginBottom: 15 }}
          />

          <Text style={styles.title}>Reset your password</Text>
          <Text style={styles.subtitle}>
            Enter your registered email and we’ll send you a password reset link.
          </Text>

          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" size={22} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Reset Button */}
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetPassword}
          >
            <Text style={styles.resetButtonText}>Send Reset Link</Text>
          </TouchableOpacity>

          {/* Back to Login */}
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.backText}>
              Remembered your password?{' '}
              <Text style={{ fontWeight: 'bold', color: '#192D3C' }}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },

  header: {
    backgroundColor: '#192D3C',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  headerTitle: {
    color: '#F0F0F0',
    fontSize: 20,
    fontWeight: 'bold',
  },

  card: {
    margin: 20,
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#192D3C',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    width: '100%',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },

  resetButton: {
    backgroundColor: '#192D3C',
    width: '100%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  resetButtonText: {
    color: '#F0F0F0',
    fontSize: 16,
    fontWeight: 'bold',
  },

  backText: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
});
