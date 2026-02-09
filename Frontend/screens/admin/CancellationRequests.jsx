import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import HomeStyle from '../../styles/HomeStyle';
import CancellationRequestStyles from '../../styles/adminstyles/CancellationRequestStyles';


export default function CancellationRequests() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <View style={CancellationRequestStyles.container}>
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

            <Text style={CancellationRequestStyles.header}>Cancellation Requests</Text>
            <View style={CancellationRequestStyles.statsContainer}>
                <View style={CancellationRequestStyles.statsRow}>
                    <View style={CancellationRequestStyles.card}>
                        <Text style={CancellationRequestStyles.cardValue}>40</Text>
                        <Text style={CancellationRequestStyles.cardLabel}>Bookings</Text>
                    </View>

                    <View style={CancellationRequestStyles.card}>
                        <Text style={CancellationRequestStyles.cardValue}>20</Text>
                        <Text style={CancellationRequestStyles.cardLabel}>Users</Text>
                    </View>
                </View>

                <View style={CancellationRequestStyles.statsRow}>
                    <View style={CancellationRequestStyles.card}>
                        <Text style={CancellationRequestStyles.cardValue}>34</Text>
                        <Text style={CancellationRequestStyles.cardLabel}>Transactions</Text>
                    </View>

                    <View style={CancellationRequestStyles.card}>
                        <Text style={CancellationRequestStyles.cardValue}>7</Text>
                        <Text style={CancellationRequestStyles.cardLabel}>Cancellations</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}