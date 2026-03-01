import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProfileImage from "../assets/profile.jpg";

export default function ProfessionalProfileScreen({ navigation }) {
  const handleBooking = () => {
    navigation.navigate("BookingConfirmation", {
    });
  }
  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-backspace" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Professional Profile</Text>

        <TouchableOpacity style={styles.headerBtn}>
          <MaterialIcons name="favorite-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PROFILE CARD */}
        <View style={styles.profileCard}>
          <Image source={{uri: 'https://i.pravatar.cc/150?img=12'}} style={styles.avatar} />

          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.role}>Expert Plumber</Text>

          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={18} color="#F59E0B" />
            <Text style={styles.rating}>4.8</Text>
            <Text style={styles.jobs}>(120 jobs)</Text>
            <Text style={styles.dot}>•</Text>
            <MaterialIcons name="location-on" size={16} color="#6B7280" />
            <Text style={styles.jobs}>1.2 km</Text>
          </View>

          <View style={styles.verifiedBadge}>
            <MaterialIcons name="verified" size={18} color="#2563EB" />
            <Text style={styles.verifiedText}>Verified Professional</Text>
          </View>
        </View>

        {/* QUICK STATS */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <MaterialIcons name="bar-chart" size={22} color="#192D3C" />
            <Text style={styles.statLabel}>Experience</Text>
            <Text style={styles.statValue}>5+ Years</Text>
          </View>

          <View style={styles.statCard}>
            <MaterialIcons name="watch-later" size={22} color="#16A34A" />
            <Text style={styles.statLabel}>Status</Text>
            <Text style={[styles.statValue, { color: "#16A34A" }]}>
              Available
            </Text>
          </View>

          <View style={styles.statCard}>
            <MaterialIcons name="currency-rupee" size={22} color="#192D3C" />
            <Text style={styles.statLabel}>Starting</Text>
            <Text style={styles.statValue}>₹299</Text>
          </View>
        </View>

        {/* ABOUT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.sectionText}>
            Experienced plumber with 5+ years of hands-on expertise in residential
            and commercial plumbing. Known for quick service, clean work, and fair
            pricing.
          </Text>
        </View>

        {/* SERVICES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Offered</Text>

          {["Pipe Fixing", "Leakage Repair", "Bathroom Installation"].map(
            (service, index) => (
              <View key={index} style={styles.serviceItem}>
                <MaterialIcons name="check-circle" size={20} color="#16A34A" />
                <Text style={styles.serviceText}>{service}</Text>
              </View>
            )
          )}
        </View>

        {/* CTA */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* BOOK BUTTON */}
      <View style={styles.bookBar}>
        <TouchableOpacity style={styles.bookBtn} onPress={handleBooking}>
          <Text style={styles.bookText}>Book Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 20,
    backgroundColor: "#192D3C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerBtn: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  profileCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },

  avatar: {
    height: 110,
    width: 110,
    borderRadius: 24,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  role: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 4,
  },

  rating: {
    fontWeight: "700",
    marginLeft: 4,
  },

  jobs: {
    color: "#6B7280",
    fontSize: 13,
  },

  dot: {
    marginHorizontal: 4,
    color: "#6B7280",
  },

  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0ECFF",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 12,
  },

  verifiedText: {
    marginLeft: 6,
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 13,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },

  statCard: {
    width: "30%",
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
  },

  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 6,
  },

  statValue: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
    color: "#111827",
  },

  section: {
    marginHorizontal: 20,
    marginTop: 24,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111827",
  },

  sectionText: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 22,
  },

  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 8,
  },

  serviceText: {
    fontSize: 14,
    color: "#374151",
  },

  bookBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },

  bookBtn: {
    backgroundColor: "#192D3C",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
  },

  bookText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
