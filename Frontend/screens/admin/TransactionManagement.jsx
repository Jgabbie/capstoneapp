import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import AdminSidebar from '../../components/AdminSidebar';
import HomeStyle from '../../styles/HomeStyle';
import TransactionManagementStyles from '../../styles/adminstyles/TransactionManagementStyles';
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

export default function TransactionManagement() {
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
        <View style={TransactionManagementStyles.tableRow}>
            <Text style={[TransactionManagementStyles.tableCell, TransactionManagementStyles.usernameCell]}>{item.username}</Text>
            <Text style={[TransactionManagementStyles.tableCell, TransactionManagementStyles.emailCell]}>{item.email}</Text>
            <Text style={[TransactionManagementStyles.tableCell, TransactionManagementStyles.statusCell]}>{item.status}</Text>
            <Text style={[TransactionManagementStyles.tableCell, TransactionManagementStyles.roleCell]}>{item.role}</Text>
            <View style={
                TransactionManagementStyles.actionCell
            }>
                <TouchableOpacity
                    style={TransactionManagementStyles.viewButton}
                    onPress={() => {
                        cs.navigate('bookinginvoice', { booking: item })
                    }}
                >
                    <Text style={TransactionManagementStyles.viewButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={TransactionManagementStyles.cancelButton}
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <Text style={TransactionManagementStyles.viewButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
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

            <TextInput
                style={TransactionManagementStyles.SearchBar}
                placeholder='Search transaction...'
                value={searchText}
                onChangeText={setSearchText}
            />

            <View style={TransactionManagementStyles.filtersContainer}>
                <Picker
                    style={TransactionManagementStyles.picker}
                    selectedValue={statusFilter}
                    onValueChange={(value) => setStatusFilter(value)}
                >
                    <Picker.Item label="All Status" value="All" />
                    <Picker.Item label="Verified" value="Active" />
                    <Picker.Item label="Unverified" value="Inactive" />
                </Picker>

                <Picker
                    style={TransactionManagementStyles.picker}
                    selectedValue={roleFilter}
                    onValueChange={(value) => setroleFilter(value)}
                >
                    <Picker.Item label="All role" value="All" />
                    <Picker.Item label="Admin" value="Admin" />
                    <Picker.Item label="User" value="User" />
                </Picker>
            </View>

            <View style={TransactionManagementStyles.tableHeader}>
                <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.usernameCell]}>Username</Text>
                <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.emailCell]}>Email</Text>
                <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.statusCell]}>Status</Text>
                <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.roleCell]}>Role</Text>
                <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.actionCell]}>Actions</Text>
            </View>

            <FlatList
                data={paginatedUsers}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={TransactionManagementStyles.table}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                <TouchableOpacity
                    onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    style={TransactionManagementStyles.paginationButton}
                >
                    <Text style={TransactionManagementStyles.paginationText}>Previous</Text>
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                    {currentPage} / {totalPages}
                </Text>

                <TouchableOpacity
                    onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    style={TransactionManagementStyles.paginationButton}
                >
                    <Text style={TransactionManagementStyles.paginationText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}