import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 🔝 Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Rohit Verma </Text>
        <Text style={styles.contact}>+91 98765 43210</Text>

        <TouchableOpacity style={styles.editBtn} >
          <MaterialIcons name="edit" size={16} color="#192D3C" />
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* ⚡ Quick Actions */}
      <View style={styles.quickActions}>
        <QuickCard icon="event-note" label="My Bookings"/>
        <QuickCard icon="location-on" label="Addresses" />
        <QuickCard icon="credit-card" label="Payments" />
        <QuickCard icon="support-agent" label="Support" />
      </View>

      {/* 👤 Account Section */}
      <Section title="Account">
        <Item icon="person" text="Personal Details" />
        <Item icon="location-city" text="Saved Addresses" />
        <Item icon="credit-card" text="Payment Methods" />
        <Item icon="notifications" text="Notifications" />
      </Section>

      {/* 🎛 Preferences */}
      <Section title="Preferences">
        <Item icon="language" text="Language" right="English" />
        <Item icon="dark-mode" text="Theme" right="System" />
        <Item icon="my-location" text="Location Access" right="Enabled" />
        <Item icon="mark-email-read" text="Communication Preferences" />
      </Section>

      {/* 🛟 Support */}
      <Section title="Support & Help">
        <Item icon="help-outline" text="Help Center" />
        <Item icon="headset-mic" text="Contact Support" />
        <Item icon="quiz" text="FAQs" />
        <Item icon="report-problem" text="Report an Issue" />
      </Section>

      {/* 📄 Legal */}
      <Section title="About">
        <Item icon="info-outline" text="About NikatSeva" />
        <Item icon="description" text="Terms & Conditions" />
        <Item icon="privacy-tip" text="Privacy Policy" />
        <Item icon="apps" text="App Version" right="v1.0.0" />
      </Section>

      {/* 🚪 Logout */}
      <TouchableOpacity style={styles.logout}>
        <MaterialIcons name="logout" size={20} color="#EF4444" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* 🔹 Components */

const QuickCard = ({ icon, label }) => (
  <TouchableOpacity style={styles.quickCard} onPress={() => alert(label)}>
    <MaterialIcons name={icon} size={24} color="#192D3C" />
    <Text style={styles.quickText}>{label}</Text>
  </TouchableOpacity>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionBox}>{children}</View>
  </View>
);

const Item = ({ icon, text, right }) => (
  <TouchableOpacity style={styles.item}>
    <View style={styles.itemLeft}>
      <MaterialIcons name={icon} size={20} color="#475569" />
      <Text style={styles.itemText}>{text}</Text>
    </View>

    <View style={styles.itemRight}>
      {right && <Text style={styles.itemRightText}>{right}</Text>}
      <MaterialIcons name="chevron-right" size={20} color="#94A3B8" />
    </View>
  </TouchableOpacity>
);

/* 🎨 Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
  },

  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 25,
    backgroundColor: '#192D3C',
    paddingVertical: 25,
    borderRadius: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
  },

  contact: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },

  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
  },

  editText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#192D3C',
  },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  quickCard: {
    width: '23%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 14,
    elevation: 1,
  },

  quickText: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },

  section: {
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 10,
  },

  sectionBox: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  itemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#192D3C',
  },

  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  itemRightText: {
    fontSize: 12,
    color: '#64748B',
  },

  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 40,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
  },
});
