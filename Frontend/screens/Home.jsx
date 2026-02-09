import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeStyle from '../styles/HomeStyle'
import Sidebar from '../components/Sidebar'

export default function Home() {
    const cs = useNavigation()
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    // Component for the Small Travel Cards
    const TravelCard = () => (
        <View style={HomeStyle.card}>
            <Image source={require('../materials/japan_imagesmall.png')} style={HomeStyle.cardImage} />
            <Text style={HomeStyle.cardTitle}>Travel Package Name</Text>
            <View style={HomeStyle.infoRow}>
                <Image source={require('../materials/date_iconsmall.png')} style={HomeStyle.infoIcon} />
                <Text style={HomeStyle.infoText}>3 Days</Text>
            </View>
            <View style={HomeStyle.infoRow}>
                <Image source={require('../materials/location_iconsmall.png')} style={HomeStyle.infoIcon} />
                <Text style={HomeStyle.infoText}>Japan</Text>
            </View>
            <Text style={HomeStyle.priceText}>₱20000</Text>
        </View>
    );

    // Component for the Large Banner Cards
    const BannerCard = () => (
        <View style={HomeStyle.bannerCard}>
            <Image source={require('../materials/baguio_imagemedium.png')} style={HomeStyle.bannerImage} />
            <View style={HomeStyle.bannerFooter}>
                <View>
                    <Text style={HomeStyle.bannerTitle}>New Packages</Text>
                    <Text style={HomeStyle.bannerSub}>Holiday Vacation for 20'</Text>
                </View>
                <TouchableOpacity style={HomeStyle.viewAllBtn}>
                    <Text style={HomeStyle.viewAllText}>View All</Text>
                    <Image source={require('../materials/arrow_righticon.png')} style={HomeStyle.arrowIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <ScrollView style={HomeStyle.container} showsVerticalScrollIndicator={false}>
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />

            {/* Header Section */}
            <View style={HomeStyle.headerContainer}>
                <TouchableOpacity style={HomeStyle.sideBarButton} onPress={() => setSidebarVisible(true)}>
                    <Image source={require('../materials/sidebar_btn.png')} style={HomeStyle.sideBarImage} />
                </TouchableOpacity>
                <Image source={require('../materials/mrc_logo2.png')} style={HomeStyle.logo} />
                <View style={HomeStyle.rightIconsContainer}>
                    <TouchableOpacity style={HomeStyle.bellButton}>
                        <Image source={require('../materials/bell_icon.png')} style={HomeStyle.bellIcon} />
                    </TouchableOpacity>
                    <Image source={require('../materials/profile_icon.png')} style={HomeStyle.profileIcon} />
                </View>
            </View>

            {/* Search box */}
            <View style={HomeStyle.searchBox}>
                <Image source={require('../materials/search_icon.png')} style={HomeStyle.searchIcon} />
                <TextInput
                    placeholder="Search any package.."
                    placeholderTextColor="#AAAAAA"
                    style={HomeStyle.searchInputText}
                />
            </View>

            {/* Popular packages header */}
            <View style={HomeStyle.sectionHeader}>
                <Text style={HomeStyle.sectionTitle}>Popular Packages</Text>
                <View style={HomeStyle.buttonRow}>
                    <TouchableOpacity style={HomeStyle.filterButton}>
                        <Text style={HomeStyle.buttonText}>Sort</Text>
                        <Image source={require('../materials/sort_icon.png')} style={HomeStyle.buttonIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={HomeStyle.filterButton}>
                        <Text style={HomeStyle.buttonText}>Filter</Text>
                        <Image source={require('../materials/filter_icon.png')} style={HomeStyle.buttonIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Horizontal scroll small cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
                <TravelCard />
                <TravelCard />
                <TravelCard />
            </ScrollView>

            {/* Horizontal scroll big cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <BannerCard />
                <BannerCard />
            </ScrollView>

        </ScrollView>
    )
}