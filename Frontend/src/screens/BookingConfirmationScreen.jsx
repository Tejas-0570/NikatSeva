import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput,
    Platform,
} from "react-native";
import {
    launchCamera,
    launchImageLibrary,
} from "react-native-image-picker";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

const PRIMARY = "#192D3C";

const SERVICES = [
    "Plumbing",
    "Electrician",
    "AC Repair",
    "Appliance Repair",
    "Cleaning",
    "Other",
];

export default function BookingConfirmationScreen({ navigation, route }) {
    /* ---------------- Dynamic Professional ---------------- */
    const professional = route?.params?.professional ?? {
        name: "Rajesh Kumar",
        skill: "Expert Plumber",
        rating: 4.8,
        image: "https://i.pravatar.cc/150?img=12",
    };


    /* ---------------- States ---------------- */
    const [serviceType, setServiceType] = useState("Plumbing");
    const [customService, setCustomService] = useState("");
    const [description, setDescription] = useState("");
    const [preferredTime, setPreferredTime] = useState("instant");

    const [showDropdown, setShowDropdown] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [images, setImages] = useState([]);


    /* ---------------- Date Handler ---------------- */
    const onDateChange = (_, date) => {
        setShowCalendar(false);
        if (date) setSelectedDate(date);
    };

    /* ---------------- Camera Function ---------------- */
    const openCamera = () => {
        const options = {
            mediaType: "photo",
            quality: 0.7,
            saveToPhotos: true,
        };

        launchCamera(options, response => {
            if (response.didCancel) return;

            if (response.errorCode) {
                console.log("Camera Error: ", response.errorMessage);
                return;
            }

            if (response.assets) {
                setImages([...images, ...response.assets]);
            }
        });
    };

    /* ---------------- Gallery Function ---------------- */
    const openGallery = () => {
        const options = {
            mediaType: "photo",
            quality: 0.7,
            selectionLimit: 5, // allow multiple
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) return;

            if (response.errorCode) {
                console.log("Gallery Error: ", response.errorMessage);
                return;
            }

            if (response.assets) {
                setImages([...images, ...response.assets]);
            }
        });
    };



    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Confirm Booking</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Professional Card */}
                <View style={styles.card}>
                    <Image source={{ uri: professional.image }} style={styles.avatar} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.name}>{professional.name}</Text>
                        <Text style={styles.skill}>{professional.skill}</Text>
                        <View style={styles.row}>
                            <MaterialIcons name="star" size={16} color="#FBBF24" />
                            <Text style={styles.rating}>{professional.rating}</Text>
                        </View>
                    </View>
                </View>

                {/* Service Type Dropdown */}
                <View style={styles.section}>
                    <Text style={styles.label}>Service Type</Text>

                    <TouchableOpacity
                        style={styles.dropdown}
                        onPress={() => setShowDropdown(!showDropdown)}
                    >
                        <Text style={styles.dropdownText}>{serviceType}</Text>
                        <MaterialIcons
                            name={showDropdown ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                            size={24}
                            color="#475569"
                        />
                    </TouchableOpacity>

                    {showDropdown &&
                        SERVICES.map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={styles.dropdownItem}
                                onPress={() => {
                                    setServiceType(item);
                                    setShowDropdown(false);
                                }}
                            >
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        ))}

                    {serviceType === "Other" && (
                        <TextInput
                            placeholder="Specify your service"
                            style={styles.input}
                            value={customService}
                            onChangeText={setCustomService}
                        />
                    )}
                </View>

                {/* Problem Description */}
                <View style={styles.section}>
                    <Text style={styles.label}>Problem Description</Text>
                    <TextInput
                        placeholder="Describe the problem"
                        multiline
                        style={styles.textArea}
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>

                {/* Upload Photos */}
                <View style={styles.section}>
                    <Text style={styles.label}>Upload Photos (Optional)</Text>

                    <View style={styles.photoRow}>
                        <TouchableOpacity style={styles.photoButton} onPress={openCamera}>
                            <MaterialIcons name="camera-alt" size={22} color={PRIMARY} />
                            <Text style={styles.photoText}>Camera</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.photoButton} onPress={openGallery}>
                            <MaterialIcons name="photo-library" size={22} color={PRIMARY} />
                            <Text style={styles.photoText}>Gallery</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
                        {images.map((item, index) => (
                            <Image
                                key={index}
                                source={{ uri: item.uri }}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 10,
                                    marginRight: 8,
                                    marginBottom: 8,
                                }}
                            />
                        ))}
                    </View>


                </View>

                {/* Preferred Time */}
                <View style={styles.section}>
                    <Text style={styles.label}>Preferred Time</Text>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            preferredTime === "instant" && styles.optionActive,
                        ]}
                        onPress={() => setPreferredTime("instant")}
                    >
                        <Text>As soon as possible</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            preferredTime === "schedule" && styles.optionActive,
                        ]}
                        onPress={() => setPreferredTime("schedule")}
                    >
                        <Text>Schedule for later</Text>
                    </TouchableOpacity>

                    {preferredTime === "schedule" && (
                        <TouchableOpacity
                            style={styles.scheduleBox}
                            onPress={() => setShowCalendar(true)}
                        >
                            <MaterialIcons name="calendar-today" size={20} color={PRIMARY} />
                            <Text style={styles.scheduleText}>
                                {selectedDate
                                    ? selectedDate.toDateString()
                                    : "Select Date"}
                            </Text>
                        </TouchableOpacity>
                    )}

                    {showCalendar && (
                        <DateTimePicker
                            value={selectedDate || new Date()}
                            mode="date"
                            display={Platform.OS === "ios" ? "inline" : "default"}
                            onChange={onDateChange}
                        />
                    )}
                </View>

                {/* Pricing Info */}
                <View style={styles.pricingNote}>
                    <MaterialIcons name="info-outline" size={18} color="#64748B" />
                    <Text style={styles.pricingText}>
                        Transparent pricing. Final price shared after inspection.
                    </Text>
                </View>
            </ScrollView>

            {/* Confirm Button */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.confirmBtn}
                    onPress={() => navigation.navigate("BookingSuccess")}
                >
                    <Text style={styles.confirmText}>Confirm Booking</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F8FAFC" },

    header: {
        backgroundColor: PRIMARY,
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        margin: 16,
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
    },
    photoRow: {
        flexDirection: "row",
        gap: 12,
    },

    photoButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 12,
        padding: 14,
        alignItems: "center",
    },

    photoText: {
        marginTop: 6,
        fontSize: 13,
    },

    avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },

    name: { fontSize: 16, fontWeight: "600" },
    skill: { fontSize: 13, color: "#64748B" },
    rating: { marginLeft: 4 },

    section: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 10,
        borderRadius: 16,
    },

    label: { fontWeight: "600", marginBottom: 8 },

    dropdown: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        borderColor: "#CBD5E1",
    },

    dropdownText: { fontSize: 14 },

    dropdownItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#E2E8F0",
    },

    input: {
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 12,
        padding: 12,
        marginTop: 10,
    },

    textArea: {
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 12,
        padding: 12,
        height: 60,
    },

    option: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        marginBottom: 8,
        borderColor: "#CBD5E1",
    },

    optionActive: { backgroundColor: "#E6EEF3", borderColor: PRIMARY },

    scheduleBox: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        borderColor: PRIMARY,
    },

    scheduleText: { marginLeft: 10, color: PRIMARY },

    pricingNote: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginBottom: 10,
    },

    pricingText: { marginLeft: 6, fontSize: 12, color: "#64748B" },

    footer: { padding: 16, backgroundColor: "#fff" },

    confirmBtn: {
        backgroundColor: PRIMARY,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: "center",
    },

    confirmText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
