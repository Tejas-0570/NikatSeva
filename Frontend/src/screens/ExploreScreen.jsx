import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const featuredCategories = [
  { id: '1', title: 'Home Repairs', icon: 'home-repair-service' },
  { id: '2', title: 'Electrical', icon: 'electrical-services' },
  { id: '3', title: 'Plumbing', icon: 'plumbing' },
  { id: '4', title: 'AC & Appliances', icon: 'ac-unit' },
  { id: '5', title: 'Cleaning', icon: 'cleaning-services' },
  { id: '6', title: 'Painting', icon: 'format-paint' },
];

const popularServices = [
  { id: '1', name: 'AC Gas Refill', price: '₹499', rating: 4.6 },
  { id: '2', name: 'Bathroom Repair', price: '₹399', rating: 4.5 },
  { id: '3', name: 'Fan Installation', price: '₹299', rating: 4.7 },
];

const professionals = [
  {
    id: '1',
    name: 'Rohit Verma',
    skill: 'Electrician',
    rating: 4.8,
    jobs: 320,
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: '2',
    name: 'Amit Verma',
    skill: 'Plumber',
    rating: 4.7,
    jobs: 280,
    image: 'https://i.pravatar.cc/150?img=15',
  },
];

export default function ExploreScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 🔝 Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Explore Services</Text>
          <Text style={styles.subtitle}>
            Discover trusted professionals around you
          </Text>
        </View>

        <TouchableOpacity>
          <MaterialIcons name="tune" size={26} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* 🔎 Soft Search */}
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => navigation.navigate('Search')}
      >
        <MaterialIcons name="search" size={20} color="#888" />
        <Text style={styles.searchText}>
          Try “AC service”, “Bathroom repair”…
        </Text>
      </TouchableOpacity>

      {/* ⭐ Featured Categories */}
      <Text style={styles.sectionTitle}>Featured Categories</Text>
      <View style={styles.categoryGrid}>
        {featuredCategories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryCard}>
            <MaterialIcons name={item.icon} size={30} color="#2563EB" />
            <Text style={styles.categoryText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🔥 Popular Services */}
      <Text style={styles.sectionTitle}>Popular Services Near You</Text>
      <FlatList
        horizontal
        data={popularServices}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.serviceCard}>
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.servicePrice}>from {item.price}</Text>
            <Text style={styles.serviceRating}>⭐ {item.rating}</Text>

            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookBtnText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* 👷 Top Rated Professionals */}
      <Text style={styles.sectionTitle}>Top-Rated Professionals</Text>
      <FlatList
        horizontal
        data={professionals}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.proCard}>
            <Image source={{ uri: item.image }} style={styles.proImage} />
            <Text style={styles.proName}>{item.name}</Text>
            <Text style={styles.proSkill}>{item.skill}</Text>
            <Text style={styles.proMeta}>
              ⭐ {item.rating} • {item.jobs}+ jobs
            </Text>

            <TouchableOpacity style={styles.viewProfileBtn}>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* 💡 Recommended */}
      <Text style={styles.sectionTitle}>Recommended for You</Text>
      <View style={styles.recommendCard}>
        <Text style={styles.recommendTitle}>🌧 Monsoon Special Plumbing</Text>
        <Text style={styles.recommendDesc}>
          Prevent leaks & water damage this rainy season
        </Text>
      </View>

      {/* 🎁 Offers */}
      <Text style={styles.sectionTitle}>Offers & Value</Text>
      <View style={styles.offerCard}>
        <Text style={styles.offerText}>
          🎉 Get ₹150 off on your first service booking
        </Text>
      </View>

      {/* 🧾 How It Works */}
      <Text style={styles.sectionTitle}>How It Works</Text>
      <View style={styles.stepsRow}>
        <Step icon="description" text="Describe your problem" />
        <Step icon="verified" text="Get verified professional" />
        <Step icon="payments" text="Pay after work" />
      </View>

      {/* 🛡 Trust Badges */}
      <View style={styles.trustBox}>
        <Text style={styles.trustText}>✔ Background-verified professionals</Text>
        <Text style={styles.trustText}>✔ Secure payments</Text>
        <Text style={styles.trustText}>✔ Dedicated customer support</Text>
      </View>
    </ScrollView>
  );
}

/* 🧩 Step Component */
const Step = ({ icon, text }) => (
  <View style={styles.stepCard}>
    <MaterialIcons name={icon} size={26} color="#16A34A" />
    <Text style={styles.stepText}>{text}</Text>
  </View>
);

/* 🎨 Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 15,
  },

  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#192D3C',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 14,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 12,
    marginVertical: 18,
    gap: 8,
    elevation: 1,
  },

  searchText: {
    color: '#888',
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#192D3C',
    marginVertical: 12,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  categoryCard: {
    width: '30%',
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 15,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 1,
  },

  categoryText: {
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
  },

  serviceCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 15,
    marginRight: 12,
    width: 180,
    elevation: 1,
  },

  serviceName: {
    fontSize: 15,
    fontWeight: '700',
  },

  servicePrice: {
    fontSize: 14,
    marginVertical: 4,
    color: '#2563EB',
  },

  serviceRating: {
    fontSize: 13,
    marginBottom: 8,
  },

  bookBtn: {
    backgroundColor: '#192D3C',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },

  bookBtnText: {
    color: '#FFF',
    fontWeight: '600',
  },

  proCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 15,
    marginRight: 12,
    alignItems: 'center',
    width: 160,
    elevation: 1,
  },

  proImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },

  proName: {
    fontWeight: '700',
  },

  proSkill: {
    fontSize: 13,
    color: '#555',
  },

  proMeta: {
    fontSize: 12,
    marginVertical: 4,
  },

  viewProfileBtn: {
    backgroundColor: '#2563EB',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 6,
  },

  viewProfileText: {
    color: '#FFF',
    fontSize: 13,
  },

  recommendCard: {
    backgroundColor: '#E0F2FE',
    borderRadius: 14,
    padding: 15,
  },

  recommendTitle: {
    fontWeight: '700',
    fontSize: 15,
  },

  recommendDesc: {
    fontSize: 13,
    marginTop: 4,
  },

  offerCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 14,
    padding: 15,
  },

  offerText: {
    fontSize: 14,
    fontWeight: '600',
  },

  stepsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  stepCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 12,
    width: '32%',
    alignItems: 'center',
    elevation: 1,
  },

  stepText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },

  trustBox: {
    backgroundColor: '#ECFDF5',
    borderRadius: 14,
    padding: 15,
    marginVertical: 20,
  },

  trustText: {
    fontSize: 13,
    marginBottom: 4,
  },
});
