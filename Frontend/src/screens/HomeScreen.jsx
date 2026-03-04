// screens/HomeScreen.js - Placeholder for post-login screen
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Pressable, Image, Alert, KeyboardAvoidingView, Platform, Keyboard, PermissionsAndroid } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Geolocation from 'react-native-geolocation-service';

const profile = require('../assets/profile.jpg');
export default function HomeScreen({ navigation }) {
  const handleSearch = () => {
    Keyboard.dismiss();
    // Alert.alert('Search triggered');
    navigation.navigate('SearchResults');
  };

  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          setLocation("Permission Denied");
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      getCurrentLocation();
    }
  };

  const getCurrentLocation = () => {
    console.log("Getting location...");

    Geolocation.getCurrentPosition(
      position => {
        console.log("Position:", position);
        const { latitude, longitude } = position.coords;
        getAddressFromCoords(latitude, longitude);
      },
      error => {
        console.log("Location Error:", error);
        setLocation("Location Error");
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        forceRequestLocation: true,
        showLocationDialog: true,
      }
    );
  };

  const getAddressFromCoords = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`
      );

      const data = await response.json();
      console.log("FULL GEOCODE RESPONSE:", data);

      if (data.results && data.results.length > 0) {
        setLocation(data.results[0].formatted_address);
      } else {
        setLocation("Address not found");
      }
    } catch (error) {
      console.log("Geocode error:", error);
      setLocation("Error fetching address");
    }
  };


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.navView}>
          <View style={styles.navContent}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: 10 }}>
              <View style={{ backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center', height: 50, width: 50, borderRadius: 10 }}>
                <MaterialIcons name="near-me" size={30} color="black" />
              </View>
              <View>
                <Text style={{ color: '#F0F0F0', fontSize: 20, fontWeight: '800', marginBottom: 1 }}>NikatSeva</Text>
                <Text style={{ color: '#F0F0F0', fontSize: 16, fontWeight: '400' }}>Trusted Services, Near You</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', gap: 10, marginTop: 10 }}>
              <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate('Notifications')}>
                <MaterialIcons name="notifications-none" color="#F0F0F0" size={30} />
              </TouchableOpacity>
            </View>
          </View>

          <View >
            <MaterialIcons name="location-on" size={25} color="#999999" style={{ position: 'absolute', top: 20, zIndex: 1 }} />
            <Text style={{ color: '#999999', position: 'absolute', top: 22, left: 30, zIndex: 1 }}>{location}</Text>
          </View>

          <View style={{ justifyContent: 'space-between', alignItems: 'center', top: 35 }}>
            <MaterialIcons name="search" size={25} color="#999999" style={{ position: 'absolute', top: 43, left: 30, zIndex: 1 }} />
            <TextInput
              style={styles.input}
              returnKeyType="search"
              onSubmitEditing={handleSearch}
              enablesReturnKeyAutomatically
              submitBehavior="blurAndSubmit"
              placeholder="Search for services or providers..."
              placeholderTextColor="#999999"
            />
          </View>
        </View>
        <View style={styles.cardsWrapper}>
          <View style={styles.cardRow}>
            <View style={styles.card} >
              <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('SearchResults')}>
                <MaterialIcons name="electrical-services" color="#192D3C" size={30} />
              </TouchableOpacity>
              <Text style={{ color: '#000000', fontWeight: 'bold', marginTop: 10 }}>Electrician</Text>
            </View>

            <View style={styles.card} >
              <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('SearchResults')}>
                <MaterialIcons name="plumbing" color="#192D3C" size={30} />
              </TouchableOpacity>
              <Text style={{ color: '#000000', fontWeight: 'bold', marginTop: 10 }}>Plubmer</Text>
            </View>

            <View style={styles.card} >
              <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('SearchResults')}>
                <MaterialIcons name="carpenter" color="#192D3C" size={30} />
              </TouchableOpacity>
              <Text style={{ color: '#000000', fontWeight: 'bold', marginTop: 10 }}>Carpenter</Text>
            </View>
          </View>

          <View style={styles.cardRow}>
            <View style={styles.card} >
              <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('SearchResults')}>
                <MaterialIcons name="ac-unit" color="#192D3C" size={30} />
              </TouchableOpacity>
              <Text style={{ color: '#000000', fontWeight: 'bold', marginTop: 10 }}>AC Repair</Text>
            </View>

            <View style={styles.card} >
              <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('SearchResults')}>
                <MaterialIcons name="format-paint" color="#192D3C" size={30} />
              </TouchableOpacity>
              <Text style={{ color: '#000000', fontWeight: 'bold', marginTop: 10 }}>Painter</Text>
            </View>

            <View style={styles.card} ><TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('SearchResults')}>
              <MaterialIcons name="cleaning-services" color="#192D3C" size={30} />
            </TouchableOpacity>
              <Text style={{ color: '#000000', fontWeight: 'bold', marginTop: 10 }}>Cleaning</Text></View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 15 }}>
          <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20 }}>Nearby Professionals</Text>
          <TouchableOpacity onPress={() => navigation.navigate('NearbyProfessionals')}>
            <Text style={{ color: '#192D3C', fontWeight: 'bold' }}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.proCardScroll}
        >
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.proCard}>

              {/* Top Row */}
              <View style={styles.proTopRow}>
                <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} style={styles.proAvatar} />

                <View style={{ flex: 1 }}>
                  <Text style={styles.proName}>John Doe</Text>
                  <Text style={styles.proSkill}>Expert Electrician</Text>

                  <View style={styles.proMetaRow}>
                    <MaterialIcons name="star" size={16} color="#F59E0B" />
                    <Text style={styles.proRating}>4.8</Text>
                    <Text style={styles.proJobs}>(120 jobs)</Text>
                  </View>
                </View>
              </View>

              {/* Divider */}
              <View style={styles.divider} />

              {/* Bottom Actions */}
              <View style={styles.proBottomRow}>
                <View>
                  <Text style={styles.proPriceLabel}>Starting from</Text>
                  <Text style={styles.proPrice}>₹299</Text>
                </View>

                <Pressable
                  style={styles.viewProfileButtonNew}
                  onPress={() => navigation.navigate('ProfessionalProfile')}
                >
                  <Text style={styles.viewProfileText}>View</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>



      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navView: {
    width: '100%',
    backgroundColor: '#192D3C',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    height: 250,
  },

  navContent: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',

  },

  notificationButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderColor: '#ccc',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    color: '#000000',
    marginTop: 30,
    paddingLeft: 50,
  },

  card: {
    width: '32%',
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardsWrapper: {
    marginTop: -40,     // 👈 pulls cards upward
    paddingHorizontal: 15,

  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 5
  },

  cardButton: {
    backgroundColor: '#d0d5d7',
    borderRadius: 10,
    padding: 15,
  },

  proCardScroll: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  proCard: {
    width: 280,
    height: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginRight: 14,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  proTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  proAvatar: {
    width: 64,
    height: 64,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#192D3C',
  },

  proName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  proSkill: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },

  proMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 4,
  },

  proRating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  proJobs: {
    fontSize: 12,
    color: '#6B7280',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },

  proBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  proPriceLabel: {
    fontSize: 12,
    color: '#6B7280',
  },

  proPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#192D3C',
  },

  viewProfileButtonNew: {
    backgroundColor: '#192D3C',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  viewProfileText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },


});