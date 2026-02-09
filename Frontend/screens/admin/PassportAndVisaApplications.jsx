import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import HomeStyle from '../../styles/HomeStyle';
import PassAndVisaManagementStyles from '../../styles/adminstyles/PassAndVisaManagementStyles';

export default function PassportAndVisaApplications() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    return (
        <View style={PassAndVisaManagementStyles.container}>
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

            <Text style={PassAndVisaManagementStyles.header}>Passport and VISA Applications</Text>
            <View style={PassAndVisaManagementStyles.statsContainer}>
                <View style={PassAndVisaManagementStyles.statsRow}>
                    <View style={PassAndVisaManagementStyles.card}>
                        <Text style={PassAndVisaManagementStyles.cardValue}>40</Text>
                        <Text style={PassAndVisaManagementStyles.cardLabel}>Bookings</Text>
                    </View>

                    <View style={PassAndVisaManagementStyles.card}>
                        <Text style={PassAndVisaManagementStyles.cardValue}>20</Text>
                        <Text style={PassAndVisaManagementStyles.cardLabel}>Users</Text>
                    </View>
                </View>

                <View style={PassAndVisaManagementStyles.statsRow}>
                    <View style={PassAndVisaManagementStyles.card}>
                        <Text style={PassAndVisaManagementStyles.cardValue}>34</Text>
                        <Text style={PassAndVisaManagementStyles.cardLabel}>Transactions</Text>
                    </View>

                    <View style={PassAndVisaManagementStyles.card}>
                        <Text style={PassAndVisaManagementStyles.cardValue}>7</Text>
                        <Text style={PassAndVisaManagementStyles.cardLabel}>Cancellations</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}