import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar';
import HomeStyle from '../../styles/HomeStyle';
import TransactionManagementStyles from '../../styles/adminstyles/TransactionManagementStyles';


export default function TransactionManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <View style={TransactionManagementStyles.container}>
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
            <Text style={TransactionManagementStyles.header}>Transactions Management</Text>
            <View style={TransactionManagementStyles.statsContainer}>
                <View style={TransactionManagementStyles.statsRow}>
                    <View style={TransactionManagementStyles.card}>
                        <Text style={TransactionManagementStyles.cardValue}>40</Text>
                        <Text style={TransactionManagementStyles.cardLabel}>Bookings</Text>
                    </View>

                    <View style={TransactionManagementStyles.card}>
                        <Text style={TransactionManagementStyles.cardValue}>20</Text>
                        <Text style={TransactionManagementStyles.cardLabel}>Users</Text>
                    </View>
                </View>

                <View style={TransactionManagementStyles.statsRow}>
                    <View style={TransactionManagementStyles.card}>
                        <Text style={TransactionManagementStyles.cardValue}>34</Text>
                        <Text style={TransactionManagementStyles.cardLabel}>Transactions</Text>
                    </View>

                    <View style={TransactionManagementStyles.card}>
                        <Text style={TransactionManagementStyles.cardValue}>7</Text>
                        <Text style={TransactionManagementStyles.cardLabel}>Cancellations</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}