import { View, Text, ScrollView, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native'
import { LineChart } from "react-native-chart-kit"
import React, { useState } from 'react'
import AdminDashboardStyles from '../../styles/adminstyles/AdminDashboardStyles'
import UserBookingStyle from '../../styles/UserBookingStyle'
import AdminSidebar from '../../components/AdminSidebar'
import HomeStyle from '../../styles/HomeStyle'

const screenWidth = Dimensions.get("window").width

export default function AdminDashboard() {

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const [bookings, setBookings] = useState([
        { id: "1", package: "Baguio Trip", date: "2026-02-10", status: "Confirmed", pax: 2, amount: 30000 },
        { id: "2", package: "Cebu Tour", date: "2026-03-01", status: "Pending", pax: 4, amount: 30000 },
        { id: "3", package: "Palawan Adventure", date: "2026-02-15", status: "Cancelled", pax: 1, amount: 30000 },
        { id: "4", package: "Baguio Trip", date: "2026-02-10", status: "Confirmed", pax: 2, amount: 30000 },
        { id: "5", package: "Cebu Tour", date: "2026-03-01", status: "Pending", pax: 4, amount: 30000 },
        { id: "6", package: "Palawan Adventure", date: "2026-02-15", status: "Cancelled", pax: 1, amount: 30000 },
    ])

    const renderItem = ({ item }) => (
        <View style={UserBookingStyle.tableRow}>
            <Text style={[UserBookingStyle.tableCell, { flex: 2 }]}>{item.package}</Text>
            <Text style={[UserBookingStyle.tableCell, { flex: 2 }]}>{item.date}</Text>
            <Text style={[UserBookingStyle.tableCell, { flex: 2 }]}>{item.status}</Text>
            <Text style={[UserBookingStyle.tableCell, { flex: 2 }]}>{item.pax}</Text>
            <Text style={[UserBookingStyle.tableCell, { flex: 2 }]}>₱ {item.amount}</Text>
        </View>
    )

    return (
        <View style={AdminDashboardStyles.container}>
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

            <Text style={AdminDashboardStyles.header}>AdminDashboard</Text>

            <View style={AdminDashboardStyles.statsContainer}>
                <View style={AdminDashboardStyles.statsRow}>
                    <View style={AdminDashboardStyles.card}>
                        <Text style={AdminDashboardStyles.cardValue}>40</Text>
                        <Text style={AdminDashboardStyles.cardLabel}>Bookings</Text>
                    </View>

                    <View style={AdminDashboardStyles.card}>
                        <Text style={AdminDashboardStyles.cardValue}>20</Text>
                        <Text style={AdminDashboardStyles.cardLabel}>Users</Text>
                    </View>
                </View>

                <View style={AdminDashboardStyles.statsRow}>
                    <View style={AdminDashboardStyles.card}>
                        <Text style={AdminDashboardStyles.cardValue}>34</Text>
                        <Text style={AdminDashboardStyles.cardLabel}>Transactions</Text>
                    </View>

                    <View style={AdminDashboardStyles.card}>
                        <Text style={AdminDashboardStyles.cardValue}>7</Text>
                        <Text style={AdminDashboardStyles.cardLabel}>Cancellations</Text>
                    </View>
                </View>
            </View>

            <Text style={AdminDashboardStyles.sectionTitle}>Monthly Bookings</Text>
            <LineChart
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43]
                        }
                    ]
                }}
                width={screenWidth - 32}
                height={220}
                chartConfig={{
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
                    labelColor: () => "#777",
                    propsForDots: {
                        r: "5",
                        strokeWith: "2",
                        stroke: "#305797",
                        fill: "#305797"
                    }
                }}
                style={{
                    borderRadius: 12,
                    marginBottom: 20
                }}
            />

            <Text style={AdminDashboardStyles.sectionTitle}>Latest Bookings</Text>

            <View style={UserBookingStyle.tableHeader}>
                <Text style={[UserBookingStyle.tableHeaderCell, { flex: 2 }]}>Package</Text>
                <Text style={[UserBookingStyle.tableHeaderCell, { flex: 2 }]}>Date</Text>
                <Text style={[UserBookingStyle.tableHeaderCell, { flex: 2 }]}>Status</Text>
                <Text style={[UserBookingStyle.tableHeaderCell, { flex: 2 }]}>Pax</Text>
                <Text style={[UserBookingStyle.tableHeaderCell, { flex: 2 }]}>Amount</Text>
            </View>

            <FlatList
                data={bookings}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={UserBookingStyle.table}
            />
        </View>
    )
}