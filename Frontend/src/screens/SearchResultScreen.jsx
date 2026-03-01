import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const PRIMARY_COLOR = "#192D3C";

/* -------------------- Dummy Data -------------------- */
const workersData = [
  {
    id: "1",
    name: "Rajesh Kumar",
    profession: "Expert Plumber",
    rating: 4.8,
    reviews: 124,
    distance: "1.2 km",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "2",
    name: "Amit Sharma",
    profession: "Certified Plumber",
    rating: 4.6,
    reviews: 98,
    distance: "2.4 km",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "3",
    name: "Suresh Patil",
    profession: "Home Service Plumber",
    rating: 4.9,
    reviews: 210,
    distance: "0.9 km",
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: "4",
    name: "Rajesh Kumar",
    profession: "Expert Plumber",
    rating: 4.8,
    reviews: 124,
    distance: "1.2 km",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "5",
    name: "Amit Sharma",
    profession: "Certified Plumber",
    rating: 4.6,
    reviews: 98,
    distance: "2.4 km",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "6",
    name: "Suresh Patil",
    profession: "Home Service Plumber",
    rating: 4.9,
    reviews: 210,
    distance: "0.9 km",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: "7",
    name: "Rajesh Kumar",
    profession: "Expert Plumber",
    rating: 4.8,
    reviews: 124,
    distance: "1.2 km",
    image: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: "8",
    name: "Amit Sharma",
    profession: "Certified Plumber",
    rating: 4.6,
    reviews: 98,
    distance: "2.4 km",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: "9",
    name: "Suresh Patil",
    profession: "Home Service Plumber",
    rating: 4.9,
    reviews: 210,
    distance: "0.9 km",
    image: "https://i.pravatar.cc/150?img=30",
  },
  {
    id: "10",
    name: "Rajesh Kumar",
    profession: "Expert Plumber",
    rating: 4.8,
    reviews: 124,
    distance: "1.2 km",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "11",
    name: "Amit Sharma",
    profession: "Certified Plumber",
    rating: 4.6,
    reviews: 98,
    distance: "2.4 km",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "12",
    name: "Suresh Patil",
    profession: "Home Service Plumber",
    rating: 4.9,
    reviews: 210,
    distance: "0.9 km",
    image: "https://i.pravatar.cc/150?img=18",
  },
];

/* -------------------- Worker Card -------------------- */
const WorkerCard = memo(({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.avatar} />

      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.profession}>{item.profession}</Text>

        <View style={styles.row}>
          <MaterialIcons name="star" size={16} color="#FBBF24" />
          <Text style={styles.rating}>
            {item.rating} ({item.reviews})
          </Text>
        </View>
      </View>

      <View style={styles.rightInfo}>
        <MaterialIcons name="location-on" size={16} color="#64748B" />
        <Text style={styles.distance}>{item.distance}</Text>
      </View>
    </TouchableOpacity>
  );
});

/* -------------------- Main Screen -------------------- */
export default function SearchResultScreen({ navigation, route }) {
  const searchQuery = route?.params?.query || "Plumber";

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{searchQuery}</Text>

        <TouchableOpacity>
          <MaterialIcons name="tune" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Info Row */}
      <View style={styles.infoRow}>
        <Text style={styles.resultText}>
          {workersData.length} {searchQuery.toLowerCase()}s near you
        </Text>
        <Text style={styles.sortText}>
          <MaterialIcons name="arrow-upward" size={14} /> Sorted by distance
        </Text>
      </View>

      {/* Results */}
      <FlatList
        data={workersData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkerCard
            item={item}
            onPress={() =>
              navigation.navigate("ProfessionalProfile", { worker: item })
            }
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={10}
        removeClippedSubviews
      />
    </View>
  );
}

/* -------------------- Styles -------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  resultText: {
    fontSize: 14,
    color: "#334155",
    fontWeight: "500",
  },

  sortText: {
    fontSize: 13,
    color: "#64748B",
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },

  cardContent: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },

  profession: {
    fontSize: 13,
    color: "#64748B",
    marginVertical: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    fontSize: 13,
    marginLeft: 4,
    color: "#475569",
  },

  rightInfo: {
    alignItems: "center",
  },

  distance: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
});
