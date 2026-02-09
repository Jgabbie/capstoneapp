import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import WishlistCard from "../components/WishlistCard";
import styles from "../styles/WishListStyles";
import Sidebar from "../components/Sidebar";
import { useNavigation } from "@react-navigation/native";

export default function WishlistScreen() {
    
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
                    style={styles.logoHeader}
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

            <Text style={styles.title}>Wishlisted Packages</Text>

            <SearchFilter />

            <ScrollView showsVerticalScrollIndicator={false}>
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
            </ScrollView>
        </View>
    );
}