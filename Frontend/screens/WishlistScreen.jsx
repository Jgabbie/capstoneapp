import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import WishlistCard from "../components/WishlistCard";
import styles from "../styles/WishListStyles";
import Sidebar from "../components/Sidebar";
import { useNavigation } from "@react-navigation/native";
import WishListStyles from "../styles/WishListStyles";
import { useFonts } from 'expo-font'
import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat"
import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from "@expo-google-fonts/roboto"

export default function WishlistScreen() {

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [searchText, setSearchText] = useState('')


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

            <View style={styles.container}>
                <Text style={styles.title}>Wishlisted Packages</Text>

                <TextInput
                    style={WishListStyles.SearchBar}
                    placeholder='Search Packges...'
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <WishlistCard />
                    <WishlistCard />
                    <WishlistCard />
                    <WishlistCard />
                </ScrollView>
            </View>
        </View>

    );
}