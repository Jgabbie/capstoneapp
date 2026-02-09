import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import styles from "../styles/DestinationStyles";
import Sidebar from "../components/Sidebar";
<<<<<<< HEAD
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> 50ed1ca8294a06f36f9ca9b62d48bf9f33389a3d

const PACKAGES = [
    {
        id: "1",
        title: "Baguio City Tour",
        description:
            "Explore the city of pines with scenic viewpoints, heritage stops, and cool mountain air.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzrsEyMckUwfSniZm11T3L2RkA6yq_e3ALg&s",
        price: "₱67,000",
        duration: "3 Days",
        isInternational: false,
    },
    {
        id: "2",
        title: "Seoul City Escape",
        description:
            "Experience vibrant markets, modern culture, and historic palaces in South Korea.",
        image: "https://ggscore.com/media/logo/p11350.png?34",
        price: "₱95,000",
        duration: "5 Days",
        isInternational: true,
    },
    {
        id: "3",
        title: "Palawan Island Adventure",
        description:
            "Crystal-clear lagoons, island hopping, and beachside relaxation.",
        image: "https://www.leytesamardailynews.com/wp-content/uploads/2023/10/Incoming-tourism-chief-receives-warm-welcome-from-employees-HERO.jpg",
        price: "₱82,000",
        duration: "4 Days",
        isInternational: false,
    },
];

export default function Packages({ navigation }) {
<<<<<<< HEAD

    const [isSidebarVisible, setSidebarVisible] = useState(false)

    return (
        <View style={styles.container}>
            {/* <Header /> */}
            <Sidebar
                visible={isSidebarVisible}
                onClose={() => setSidebarVisible(false)}
            />
=======
    
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <View style={styles.container}>
            
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

            {/* <Header /> */}
>>>>>>> 50ed1ca8294a06f36f9ca9b62d48bf9f33389a3d

            <Text style={styles.heroTitle}>Featured Packages</Text>
            <Text style={styles.heroSubtitle}>
                Everyone loves to tour with friends, family, or teammates. We can
                organize your tour to anywhere in the world.
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
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
        </View>
    );
}