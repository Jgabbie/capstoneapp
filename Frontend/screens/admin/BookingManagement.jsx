import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import AdminSidebar from '../../components/AdminSidebar';
import HomeStyle from '../../styles/HomeStyle';
import BookingManagementStyles from '../../styles/adminstyles/BookingManagementStyles';
import { useNavigation } from '@react-navigation/native';
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

export default function BookingManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const cs = useNavigation()

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [modalVisible, setModalVisible] = useState(false)
    const [modalCancelVisible, setModalCancelVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const confirmCancel = () => {
        setModalVisible(false)
        setModalCancelVisible(true)
    }

    const cancelCancel = () => {
        setModalVisible(false)
    }

    const modalOK = () => {
        setModalCancelVisible(false)
    }

    const [users, setusers] = useState([
        { id: "1", username: "jglanuza", email: "jglanuza@gmail.com", status: "Verified", role: "Admin", },
        { id: "2", username: "tayshaun", email: "tayshaun@gmail.com", status: "Unverified", role: "User", },
        { id: "3", username: "marionblmt", email: "marionblmt@gmail.com", status: "Verified", role: "User", },
        { id: "4", username: "jsnnsbauca", email: "jnssnbauca@gmail.com", status: "Unverified", role: "User", },
        { id: "5", username: "jglanuza", email: "jglanuza@gmail.com", status: "Verified", role: "Admin", },
        { id: "6", username: "tayshaun", email: "tayshaun@gmail.com", status: "Unverified", role: "User", },
        { id: "7", username: "marionblmt", email: "marionblmt@gmail.com", status: "Verified", role: "User", },
        { id: "8", username: "jsnnsbauca", email: "jnssnbauca@gmail.com", status: "Unverified", role: "User", },
    ])

    const [searchText, setSearchText] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [roleFilter, setroleFilter] = useState('All')

    const filteredusers = users.filter(b => {
        const matchesSearch = b.username.toLowerCase().includes(searchText.toLowerCase())
        const matchesStatus = statusFilter === 'All' || b.status === statusFilter
        const matchesrole = roleFilter === 'All' || b.role.toString() === roleFilter
        return matchesSearch && matchesStatus && matchesrole
    })

    const paginatedUsers = filteredusers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredusers.length / itemsPerPage);

    const renderItem = ({ item }) => (
        <View style={BookingManagementStyles.tableRow}>
            <Text style={[BookingManagementStyles.tableCell, BookingManagementStyles.usernameCell]}>{item.username}</Text>
            <Text style={[BookingManagementStyles.tableCell, BookingManagementStyles.emailCell]}>{item.email}</Text>
            <Text style={[BookingManagementStyles.tableCell, BookingManagementStyles.statusCell]}>{item.status}</Text>
            <Text style={[BookingManagementStyles.tableCell, BookingManagementStyles.roleCell]}>{item.role}</Text>
            <View style={
                BookingManagementStyles.actionCell
            }>
                <TouchableOpacity
                    style={BookingManagementStyles.viewButton}
                    onPress={() => {
                        cs.navigate('bookinginvoice', { booking: item })
                    }}
                >
                    <Text style={BookingManagementStyles.viewButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={BookingManagementStyles.cancelButton}
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <Text style={BookingManagementStyles.viewButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

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

            <TextInput
                style={BookingManagementStyles.SearchBar}
                placeholder='Search bookings...'
                value={searchText}
                onChangeText={setSearchText}
            />

            <View style={BookingManagementStyles.filtersContainer}>
                <Picker
                    style={BookingManagementStyles.picker}
                    selectedValue={statusFilter}
                    onValueChange={(value) => setStatusFilter(value)}
                >
                    <Picker.Item label="All Status" value="All" />
                    <Picker.Item label="Verified" value="Active" />
                    <Picker.Item label="Unverified" value="Inactive" />
                </Picker>

                <Picker
                    style={BookingManagementStyles.picker}
                    selectedValue={roleFilter}
                    onValueChange={(value) => setroleFilter(value)}
                >
                    <Picker.Item label="All role" value="All" />
                    <Picker.Item label="Admin" value="Admin" />
                    <Picker.Item label="User" value="User" />
                </Picker>
            </View>

            <View style={BookingManagementStyles.tableHeader}>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.usernameCell]}>Username</Text>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.emailCell]}>Email</Text>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.statusCell]}>Status</Text>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.roleCell]}>Role</Text>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.actionCell]}>Actions</Text>
            </View>

            <FlatList
                data={paginatedUsers}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={BookingManagementStyles.table}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                <TouchableOpacity
                    onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    style={BookingManagementStyles.paginationButton}
                >
                    <Text style={BookingManagementStyles.paginationText}>Previous</Text>
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                    {currentPage} / {totalPages}
                </Text>

                <TouchableOpacity
                    onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    style={BookingManagementStyles.paginationButton}
                >
                    <Text style={BookingManagementStyles.paginationText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}