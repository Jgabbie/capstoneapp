import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar';
import HomeStyle from '../../styles/HomeStyle';
import BookingManagementStyles from '../../styles/adminstyles/BookingManagementStyles';


export default function BookingManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    return (
        <View style={BookingManagementStyles.container}>
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />

            {/* Header Section */}
            <View style={HomeStyle.headerContainer}>
                <TouchableOpacity style={HomeStyle.sideBarButton} onPress={() => setSidebarVisible(true)}>
                    <Image source={require('../../materials/sidebar_btn.png')} style={HomeStyle.sideBarImage} />
                </TouchableOpacity>
                <Image source={require('../../materials/mrc_logo2.png')} style={HomeStyle.logo} />
                <View style={HomeStyle.rightIconsContainer}>
                    <TouchableOpacity style={HomeStyle.bellButton}>
                        <Image source={require('../../materials/bell_icon.png')} style={HomeStyle.bellIcon} />
                    </TouchableOpacity>
                    <Image source={require('../../materials/profile_icon.png')} style={HomeStyle.profileIcon} />
                </View>
            </View>

            <Text style={BookingManagementStyles.header}>Booking Management</Text>
            <View style={BookingManagementStyles.statsContainer}>
                <View style={BookingManagementStyles.statsRow}>
                    <View style={BookingManagementStyles.card}>
                        <Text style={BookingManagementStyles.cardValue}>40</Text>
                        <Text style={BookingManagementStyles.cardLabel}>Bookings</Text>
                    </View>

                    <View style={BookingManagementStyles.card}>
                        <Text style={BookingManagementStyles.cardValue}>20</Text>
                        <Text style={BookingManagementStyles.cardLabel}>Users</Text>
                    </View>
                </View>

                <View style={BookingManagementStyles.statsRow}>
                    <View style={BookingManagementStyles.card}>
                        <Text style={BookingManagementStyles.cardValue}>34</Text>
                        <Text style={BookingManagementStyles.cardLabel}>Transactions</Text>
                    </View>

                    <View style={BookingManagementStyles.card}>
                        <Text style={BookingManagementStyles.cardValue}>7</Text>
                        <Text style={BookingManagementStyles.cardLabel}>Cancellations</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}