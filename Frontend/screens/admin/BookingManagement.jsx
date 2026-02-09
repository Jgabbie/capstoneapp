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
import DateTimePicker from '@react-native-community/datetimepicker'

export default function BookingManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const cs = useNavigation()

    const [selectedDate, setSelectedDate] = useState(null)
    const [showDatePicker, setShowDatePicker] = useState(null)
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
        { id: "1", bookref: "BREF-0231", package: "Boracay Tour", status: "Pending", bookdate: "01-25-26", },
        { id: "2", bookref: "BREF-2133", package: "Japan Tour", status: "Paid", bookdate: "01-15-26", },
        { id: "3", bookref: "BREF-3234", package: "Korea Tour", status: "Cancelled", bookdate: "01-03-26", },
        { id: "4", bookref: "BREF-9382", package: "Shanghai Tour", status: "Pending", bookdate: "01-09-26", },
        { id: "5", bookref: "BREF-6758", package: "Bohol Tour", status: "Pending", bookdate: "01-30-26", },
        { id: "6", bookref: "BREF-7323", package: "Boracay Tour", status: "Cancelled", bookdate: "02-02-26", },
        { id: "7", bookref: "BREF-9218", package: "El Nido Tour", status: "Paid", bookdate: "02-05-26", },
        { id: "8", bookref: "BREF-3242", package: "Japan Tour", status: "Pending", bookdate: "02-08-26", },
    ])

    const [searchText, setSearchText] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [bookdateFilter, setbookdateFilter] = useState('All')

    const parseBookDate = (dateStr) => {
        const [month, day, year] = dateStr.split('-')
        return new Date(`20${year}`, month - 1, day)
    }

    const filteredusers = users.filter(b => {
        const matchesSearch = b.bookref.toLowerCase().includes(searchText.toLowerCase())
        const matchesStatus = statusFilter === 'All' || b.status === statusFilter

        const matchesDate =
            !selectedDate ||
            parseBookDate(b.bookdate).toDateString() === selectedDate.toDateString()

        return matchesSearch && matchesStatus && matchesDate
    })

    const paginatedUsers = filteredusers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredusers.length / itemsPerPage);

    const renderItem = ({ item }) => (
        <View style={BookingManagementStyles.tableRow}>
            <Text style={[BookingManagementStyles.tableCell, BookingManagementStyles.bookrefCell]}>{item.bookref}</Text>
            <Text style={[BookingManagementStyles.tableCell, BookingManagementStyles.packageCell]}>{item.package}</Text>
            <Text style={[BookingManagementStyles.tableCell, BookingManagementStyles.statusCell]}>{item.status}</Text>
            <Text style={[BookingManagementStyles.tableCell, BookingManagementStyles.bookdateCell]}>{item.bookdate}</Text>
            <View style={
                BookingManagementStyles.actionCell
            }>
                <TouchableOpacity
                    style={BookingManagementStyles.viewButton}
                    onPress={() => {
                        cs.navigate('adminbookinginvoice', { booking: item })
                    }}
                >
                    <Text style={BookingManagementStyles.viewButtonText}>View</Text>
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
                        <Text style={BookingManagementStyles.cardLabel}>Paid</Text>
                    </View>
                </View>

                <View style={BookingManagementStyles.statsRow}>
                    <View style={BookingManagementStyles.card}>
                        <Text style={BookingManagementStyles.cardValue}>14</Text>
                        <Text style={BookingManagementStyles.cardLabel}>Pending</Text>
                    </View>

                    <View style={BookingManagementStyles.card}>
                        <Text style={BookingManagementStyles.cardValue}>6</Text>
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
                    <Picker.Item label="Paid" value="Paid" />
                    <Picker.Item label="Pending" value="Pending" />
                    <Picker.Item label="Cancelled" value="Cancelled" />
                </Picker>

                <TouchableOpacity
                    style={BookingManagementStyles.dateFilter}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text style={BookingManagementStyles.dateFilterText}>
                        {selectedDate
                            ? selectedDate.toLocaleDateString()
                            : "Select Date"}
                    </Text>
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        value={selectedDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={(event, date) => {
                            setShowDatePicker(false)
                            if (date) setSelectedDate(date)
                        }}
                    />
                )}

            </View>

            <View style={BookingManagementStyles.tableHeader}>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.bookrefCell]}>Reference</Text>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.packageCell]}>Package</Text>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.statusCell]}>Status</Text>
                <Text style={[BookingManagementStyles.tableHeaderCell, BookingManagementStyles.bookdateCell]}>Book Date</Text>
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