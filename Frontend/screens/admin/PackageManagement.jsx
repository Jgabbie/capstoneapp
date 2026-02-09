import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar';
import HomeStyle from '../../styles/HomeStyle';
import PackageManagementStyles from '../../styles/adminstyles/PackageManagementStyles';

export default function PackageManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <View style={PackageManagementStyles.container}>
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

            <Text style={PackageManagementStyles.header}>Package Management</Text>
            <View style={PackageManagementStyles.statsContainer}>
                <View style={PackageManagementStyles.statsRow}>
                    <View style={PackageManagementStyles.card}>
                        <Text style={PackageManagementStyles.cardValue}>40</Text>
                        <Text style={PackageManagementStyles.cardLabel}>Bookings</Text>
                    </View>

                    <View style={PackageManagementStyles.card}>
                        <Text style={PackageManagementStyles.cardValue}>20</Text>
                        <Text style={PackageManagementStyles.cardLabel}>Users</Text>
                    </View>
                </View>

                <View style={PackageManagementStyles.statsRow}>
                    <View style={PackageManagementStyles.card}>
                        <Text style={PackageManagementStyles.cardValue}>34</Text>
                        <Text style={PackageManagementStyles.cardLabel}>Transactions</Text>
                    </View>

                    <View style={PackageManagementStyles.card}>
                        <Text style={PackageManagementStyles.cardValue}>7</Text>
                        <Text style={PackageManagementStyles.cardLabel}>Cancellations</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}