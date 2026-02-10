import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import styles from "../styles/DestinationStyles";
import Sidebar from "../components/Sidebar";
import { useNavigation } from "@react-navigation/native";

const PACKAGES = [
    {
        id: "1",
        title: "Baguio City Tour",
        description:
            "Explore the city of pines with scenic viewpoints, heritage stops, and cool mountain air.",
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/dqm8q1e6jyqaxapkgqy3.jpg",
        price: "₱67,000",
        duration: "3 Days",
        isInternational: false,
    },
    {
        id: "2",
        title: "Seoul City Escape",
        description:
            "Experience vibrant markets, modern culture, and historic palaces in South Korea.",
        image: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/destination/South-Korea/Seoul/219740_SCN_Seoul_iStock521707831_ZC35CD/Seoul-Scenery.jpg?tr=w-656%2Ch-390%2Cfo-auto",
        price: "₱95,000",
        duration: "5 Days",
        isInternational: true,
    },
    {
        id: "3",
        title: "Palawan Island Adventure",
        description:
            "Crystal-clear lagoons, island hopping, and beachside relaxation.",
        image: "https://www.pelago.com/img/destinations/puerto-princesa/1011-1024_puertoprincesa.jpg",
        price: "₱82,000",
        duration: "4 Days",
        isInternational: false,
    },
];

export default function Packages({ navigation }) {

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Sidebar
                visible={isSidebarVisible}
                onClose={() => setSidebarVisible(false)}
            />

            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.sideBarButton}
                    onPress={() => setSidebarVisible(true)}
                >
                    <Image
                        source={require('../materials/sidebar_btn.png')}
                        style={styles.sideBarImage}
                    />
                </TouchableOpacity>

                <Image
                    source={require('../materials/mrc_logo2.png')}
                    style={styles.logo}
                />

                <View style={styles.rightIconsContainer}>
                    <TouchableOpacity style={styles.bellButton}>
                        <Image
                            source={require('../materials/bell_icon.png')}
                            style={styles.bellIcon}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../materials/profile_icon.png')}
                        style={styles.profileIcon}
                    />
                </View>
            </View>


            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                {/* <Header /> */}

                <Text style={styles.heroTitle}>Featured Packages</Text>
                <Text style={styles.heroSubtitle}>
                    Everyone loves to tour with friends, family, or teammates. We can
                    organize your tour to anywhere in the world.
                </Text>

                <View style={styles.searchRow}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={16} color="#777" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search packages"
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={styles.dropdownGroup}>
                        <View style={styles.dropdownButton}>
                            <Text style={styles.dropdownText}>Activities</Text>
                            <Ionicons name="chevron-down" size={14} color="#2d5fb8" style={styles.dropdownIcon} />
                        </View>
                        <View style={styles.dropdownButton}>
                            <Text style={styles.dropdownText}>Duration</Text>
                            <Ionicons name="chevron-down" size={14} color="#2d5fb8" style={styles.dropdownIcon} />
                        </View>
                    </View>
                </View>

                {PACKAGES.map((item) => (
                    <View key={item.id} style={styles.packageCard}>
                        <Image source={{ uri: item.image }} style={styles.packageImage} />
                        <View style={styles.packageContent}>
                            <Text style={styles.packageTitle}>{item.title}</Text>
                            <Text style={styles.packageDescription}>{item.description}</Text>
                            <TouchableOpacity
                                style={styles.viewDetailsButton}
                                onPress={() => navigation.navigate("package-details", { pkg: item })}
                            >
                                <Text style={styles.viewDetailsText}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.packageMetaRow}>
                            <View style={styles.metaItem}>
                                <Ionicons name="location" size={14} color="#2d5fb8" />
                                <Text style={styles.metaText}>Destination</Text>
                            </View>
                            <View style={styles.metaItem}>
                                <Ionicons name="time" size={14} color="#2d5fb8" />
                                <Text style={styles.metaText}>{item.duration}</Text>
                            </View>
                        </View>
                    </View>
                ))}

            </ScrollView>
        </View >

    );
}