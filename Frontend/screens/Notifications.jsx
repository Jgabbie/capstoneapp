import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import NotificationStyles from '../styles/NotificationStyles'
import Sidebar from '../components/Sidebar'

export default function Notifications() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const notifs = [
        {
            id: '1',
            type: 'success',
            title: 'Booking Approved',
            message: 'Your Baguio City Tour booking has been approved',
            time: '2 hours ago'
        },
        {
            id: '2',
            type: 'transaction',
            title: 'Payment Successful',
            message: 'Your payment of ₱40,000 was successful',
            time: '5 hours ago'
        },
        {
            id: '3',
            type: 'info',
            title: 'Booking Submitted',
            message: 'Your Palawan Island Adventure booking is under review',
            time: '14 hours ago'
        },
        {
            id: '4',
            type: 'success',
            title: 'Booking Approved',
            message: 'Your Baguio City Tour booking has been approved',
            time: '2 hours ago'
        },
        {
            id: '5',
            type: 'transaction',
            title: 'Payment Successful',
            message: 'Your payment of ₱40,000 was successful',
            time: '5 hours ago'
        },
        {
            id: '6',
            type: 'info',
            title: 'Booking Submitted',
            message: 'Your Palawan Island Adventure booking is under review',
            time: '14 hours ago'
        },
    ]


    const renderNotifs = ({ item }) => (
        <View style={NotificationStyles.card}>
            <Ionicons
                name={
                    item.type === 'success'
                        ? 'checkmark-circle'
                        : item.type === 'transaction'
                            ? 'card'
                            : 'information-circle'
                }
                size={28}
                color={
                    item.type === 'success'
                        ? '#2ecc71'
                        : item.type === 'transaction'
                            ? '#3498db'
                            : '#f1c40f'
                }
                style={NotificationStyles.icon}
            />

            <View style={NotificationStyles.textContainer}>
                <Text style={NotificationStyles.title}>{item.title}</Text>
                <Text style={NotificationStyles.message}>{item.message}</Text>
                <Text style={NotificationStyles.time}>{item.time}</Text>
            </View>

        </View>
    )
    return (
        <View>
            <Sidebar
                visible={isSidebarVisible}
                onClose={() => setSidebarVisible(false)}
            />

            <View style={NotificationStyles.headerContainer}>

                <TouchableOpacity
                    style={NotificationStyles.sideBarButton}
                    onPress={() => setSidebarVisible(true)}
                >
                    <Image
                        source={require('../materials/sidebar_btn.png')}
                        style={NotificationStyles.sideBarImage}
                    />
                </TouchableOpacity>

                <Image
                    source={require('../materials/mrc_logo2.png')}
                    style={NotificationStyles.logo}
                />

                <View style={NotificationStyles.rightIconsContainer}>

                    <TouchableOpacity style={NotificationStyles.bellButton}>
                        <Image
                            source={require('../materials/bell_icon.png')}
                            style={NotificationStyles.bellIcon}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../materials/profile_icon.png')}
                        style={NotificationStyles.profileIcon}
                    />
                </View>
            </View>

            <View style={NotificationStyles.container}>
                <FlatList
                    data={notifs}
                    keyExtractor={(item) => item.id}
                    renderItem={renderNotifs}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>

    )
}