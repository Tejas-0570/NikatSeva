import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/* 🔹 Dummy Booking Data (replace with API later) */
const bookings = [
  {
    id: '1',
    service: 'AC Repair',
    professional: 'Rohit Sharma',
    photo: 'https://i.pravatar.cc/150?img=12',
    date: 'Today, 4:30 PM',
    address: 'Andheri West',
    price: '₹650',
    status: 'On the way',
  },
  {
    id: '2',
    service: 'Bathroom Plumbing',
    professional: 'Amit Verma',
    photo: 'https://i.pravatar.cc/150?img=15',
    date: '12 Feb, 10:00 AM',
    address: 'Borivali East',
    price: '₹420',
    status: 'Completed',
  },
];

/* 🔹 Status Color Map */
const statusColors = {
  Requested: '#FACC15',
  Accepted: '#3B82F6',
  'On the way': '#F97316',
  'In progress': '#8B5CF6',
  Completed: '#16A34A',
  Cancelled: '#EF4444',
};

export default function BookingScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Ongoing');

  return (
    <View style={styles.container}>
      {/* 🔝 Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
        <Text style={styles.subtitle}>Track and manage your services</Text>
      </View>

      {/* 🔹 Status Tabs */}
      <View style={styles.tabs}>
        {['Ongoing', 'Upcoming', 'Completed', 'Cancelled'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 📦 Booking List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {bookings.length === 0 ? (
          <EmptyState navigation={navigation} />
        ) : (
          bookings.map(item => (
            <BookingCard key={item.id} data={item} />
          ))
        )}
      </ScrollView>
    </View>
  );
}

/* 🧩 Booking Card */
const BookingCard = ({ data }) => {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Top Row */}
      <View style={styles.cardHeader}>
        <Text style={styles.service}>{data.service}</Text>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusColors[data.status] },
          ]}
        >
          <Text style={styles.statusText}>{data.status}</Text>
        </View>
      </View>

      {/* Professional Info */}
      <View style={styles.proRow}>
        <Image source={{ uri: data.photo }} style={styles.avatar} />
        <View>
          <Text style={styles.proName}>{data.professional}</Text>
          <Text style={styles.meta}>{data.date}</Text>
          <Text style={styles.meta}>{data.address}</Text>
        </View>
      </View>

      {/* Price */}
      <Text style={styles.price}>Estimated Price: {data.price}</Text>

      {/* CTA Buttons */}
      <View style={styles.actions}>
        {data.status === 'On the way' && (
          <>
            <ActionBtn text="Track" icon="location-on" />
            <ActionBtn text="Call" icon="call" secondary />
          </>
        )}

        {data.status === 'Completed' && (
          <>
            <ActionBtn text="Rate & Review" icon="star" />
            <ActionBtn text="Book Again" icon="repeat" secondary />
          </>
        )}

        {data.status === 'Accepted' && (
          <>
            <ActionBtn text="View Details" icon="info" />
            <ActionBtn text="Chat" icon="chat" secondary />
          </>
        )}
      </View>

      {/* Support */}
      <TouchableOpacity style={styles.help}>
        <Text style={styles.helpText}>
          Need help with this booking?
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

/* 🔘 Action Button */
const ActionBtn = ({ text, icon, secondary }) => (
  <TouchableOpacity
    style={[
      styles.actionBtn,
      secondary && styles.secondaryBtn,
    ]}
  >
    <MaterialIcons
      name={icon}
      size={18}
      color={secondary ? '#192D3C' : '#FFF'}
    />
    <Text
      style={[
        styles.actionText,
        secondary && { color: '#192D3C' },
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

/* 📭 Empty State */
const EmptyState = ({ navigation }) => (
  <View style={styles.emptyBox}>
    <MaterialIcons name="event-busy" size={70} color="#CBD5E1" />
    <Text style={styles.emptyTitle}>No bookings yet</Text>
    <Text style={styles.emptySub}>
      Your service bookings will appear here
    </Text>

    <TouchableOpacity
      style={styles.exploreBtn}
      onPress={() => navigation.navigate('Explore')}
    >
      <Text style={styles.exploreText}>Explore Services</Text>
    </TouchableOpacity>
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
    marginBottom: 10,
    backgroundColor: '#192D3C',
    paddingVertical: 20,
    borderRadius: 14,
    alignItems: 'center',
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

  tabs: {
    flexDirection: 'row',
    marginVertical: 15,
    backgroundColor: '#E5E7EB',
    borderRadius: 14,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: '#192D3C',
    borderRadius: 14,
  },

  tabText: {
    fontSize: 13,
    color: '#555',
    fontWeight: '600',
  },

  activeTabText: {
    color: '#FFF',
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 14,
    elevation: 1,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  service: {
    fontSize: 16,
    fontWeight: '700',
  },

  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: '600',
  },

  proRow: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  proName: {
    fontWeight: '600',
  },

  meta: {
    fontSize: 12,
    color: '#64748B',
  },

  price: {
    marginTop: 10,
    fontWeight: '600',
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },

  actionBtn: {
    flexDirection: 'row',
    gap: 6,
    backgroundColor: '#192D3C',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  secondaryBtn: {
    backgroundColor: '#E5E7EB',
  },

  actionText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
  },

  help: {
    marginTop: 12,
  },

  helpText: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
  },

  emptyBox: {
    alignItems: 'center',
    marginTop: 80,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
  },

  emptySub: {
    fontSize: 13,
    color: '#64748B',
    marginVertical: 6,
  },

  exploreBtn: {
    backgroundColor: '#192D3C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 12,
  },

  exploreText: {
    color: '#FFF',
    fontWeight: '600',
  },
});
