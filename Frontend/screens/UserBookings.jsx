import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
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
import { useNavigation } from '@react-navigation/native'
import UserBookingStyle from '../styles/UserBookingStyle'
import Sidebar from '../components/Sidebar'

export default function UserBookings() {
    const cs = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [modalCancelVisible, setModalCancelVisible] = useState(false)
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

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

    const [bookings, setBookings] = useState([
        { id: "1", package: "Baguio Trip", date: "2026-02-10", status: "Confirmed", pax: 2, amount: 30000 },
        { id: "2", package: "Cebu Tour", date: "2026-03-01", status: "Pending", pax: 4, amount: 30000 },
        { id: "3", package: "Palawan Adventure", date: "2026-02-15", status: "Cancelled", pax: 1, amount: 30000 },
        { id: "4", package: "Baguio Trip", date: "2026-02-10", status: "Confirmed", pax: 2, amount: 30000 },
        { id: "5", package: "Cebu Tour", date: "2026-03-01", status: "Pending", pax: 4, amount: 30000 },
        { id: "6", package: "Palawan Adventure", date: "2026-02-15", status: "Cancelled", pax: 1, amount: 30000 },
        { id: "7", package: "Cebu Tour", date: "2026-03-01", status: "Pending", pax: 4, amount: 30000 },
        { id: "8", package: "Palawan Adventure", date: "2026-02-15", status: "Cancelled", pax: 1, amount: 30000 },
        { id: "9", package: "Palawan Adventure", date: "2026-02-15", status: "Cancelled", pax: 1, amount: 30000 },
        { id: "10", package: "Cebu Tour", date: "2026-03-01", status: "Pending", pax: 4, amount: 30000 },
        { id: "11", package: "Palawan Adventure", date: "2026-02-15", status: "Cancelled", pax: 1, amount: 30000 },
    ])

    const [searchText, setSearchText] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [paxFilter, setPaxFilter] = useState('All')

    const filteredBookings = bookings.filter(b => {
        const matchesSearch = b.package.toLowerCase().includes(searchText.toLowerCase())
        const matchesStatus = statusFilter === 'All' || b.status === statusFilter
        const matchesPax = paxFilter === 'All' || b.pax.toString() === paxFilter
        return matchesSearch && matchesStatus && matchesPax
    })

    const paginatedBookings = filteredBookings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const totalPages = Math.ceil(filteredBookings.length / itemsPerPage)

    const renderItem = ({ item }) => (
        <View style={UserBookingStyle.tableRow}>
            <Text style={[UserBookingStyle.tableCell, UserBookingStyle.packageCell]}>{item.package}</Text>
            <Text style={[UserBookingStyle.tableCell, UserBookingStyle.dateCell]}>{item.date}</Text>
            <Text style={[UserBookingStyle.tableCell, UserBookingStyle.statusCell]}>{item.status}</Text>
            <Text style={[UserBookingStyle.tableCell, UserBookingStyle.paxCell]}>{item.pax}</Text>
            <Text style={[UserBookingStyle.tableCell, UserBookingStyle.paxCell]}>₱ {item.amount}</Text>
            <View style={UserBookingStyle.actionCell}>
                <TouchableOpacity
                    style={UserBookingStyle.viewButton}
                    onPress={() => {
                        cs.navigate('bookinginvoice', { booking: item })
                    }}
                >
                    <Text style={UserBookingStyle.viewButtonText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={UserBookingStyle.cancelButton}
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <Text style={UserBookingStyle.viewButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

    return (
        <View>
            <Sidebar
                visible={isSidebarVisible}
                onClose={() => setSidebarVisible(false)}
            />

            <View style={UserBookingStyle.headerContainer}>

                <TouchableOpacity
                    style={UserBookingStyle.sideBarButton}
                    onPress={() => setSidebarVisible(true)}
                >
                    <Image
                        source={require('../materials/sidebar_btn.png')}
                        style={UserBookingStyle.sideBarImage}
                    />
                </TouchableOpacity>

                <Image
                    source={require('../materials/mrc_logo2.png')}
                    style={UserBookingStyle.logo}
                />

                <View style={UserBookingStyle.rightIconsContainer}>

                    <TouchableOpacity style={UserBookingStyle.bellButton}>
                        <Image
                            source={require('../materials/bell_icon.png')}
                            style={UserBookingStyle.bellIcon}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../materials/profile_icon.png')}
                        style={UserBookingStyle.profileIcon}
                    />
                </View>
            </View>

            <View style={UserBookingStyle.container}>





                <Text style={UserBookingStyle.userbookingheading}>Booking History</Text>
                <TextInput
                    style={UserBookingStyle.SearchBar}
                    placeholder='Search Bookings...'
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <View style={UserBookingStyle.filtersContainer}>
                    <Picker
                        style={UserBookingStyle.picker}
                        selectedValue={statusFilter}
                        onValueChange={(value) => setStatusFilter(value)}
                    >
                        <Picker.Item label="All Status" value="All" />
                        <Picker.Item label="Confirmed" value="Confirmed" />
                        <Picker.Item label="Pending" value="Pending" />
                        <Picker.Item label="Cancelled" value="Cancelled" />
                    </Picker>

                    <Picker
                        style={UserBookingStyle.picker}
                        selectedValue={paxFilter}
                        onValueChange={(value) => setPaxFilter(value)}
                    >
                        <Picker.Item label="All Pax" value="All" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                    </Picker>
                </View>

                <View style={UserBookingStyle.tableHeader}>
                    <Text style={[UserBookingStyle.tableHeaderCell, { flex: 2 }]}>Package</Text>
                    <Text style={[UserBookingStyle.tableHeaderCell, { flex: 1.3 }]}>Date</Text>
                    <Text style={[UserBookingStyle.tableHeaderCell, { flex: 1.3 }]}>Status</Text>
                    <Text style={[UserBookingStyle.tableHeaderCell, { flex: 0.8 }]}>Pax</Text>
                    <Text style={[UserBookingStyle.tableHeaderCell, { flex: 1.2, textAlign: "right" }]}>Amount</Text>
                    <Text style={[UserBookingStyle.tableHeaderCell, { flex: 1.5, textAlign: "center" }]}>Actions</Text>
                </View>

                <FlatList
                    data={paginatedBookings}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={UserBookingStyle.table}
                />

                <View style={{ flexDirection: "row", justifyContent: 'center', marginVertical: 10 }}>
                    <TouchableOpacity
                        onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        style={UserBookingStyle.paginationButton}
                    >
                        <Text style={UserBookingStyle.paginationText}>Previous</Text>
                    </TouchableOpacity>

                    <Text style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                        {currentPage} / {totalPages}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        style={UserBookingStyle.paginationButton}
                    >
                        <Text style={UserBookingStyle.paginationText}>Next</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible }}
                >

                    <View style={UserBookingStyle.modalOverlay}>
                        <View style={UserBookingStyle.modalBox}>
                            <Text style={UserBookingStyle.modalTitle}>Cancel Booking</Text>
                            <Text style={UserBookingStyle.modalText}>Are you sure you want to cancel this booking?</Text>

                            <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
                                <TouchableOpacity
                                    style={UserBookingStyle.modalButton}
                                    onPress={() => {
                                        confirmCancel()
                                    }}
                                >
                                    <Text style={UserBookingStyle.modalButtonText}>Yes</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={UserBookingStyle.modalCancelButton}
                                    onPress={() => {
                                        cancelCancel()
                                    }}
                                >
                                    <Text style={UserBookingStyle.modalButtonText}>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalCancelVisible}
                    onRequestClose={() => { setModalCancelVisible }}
                >

                    <View style={UserBookingStyle.modalOverlay}>
                        <View style={UserBookingStyle.modalBox}>
                            <Text style={UserBookingStyle.modalTitle}>Cancellation Request</Text>
                            <Text style={UserBookingStyle.modalText}>Your cancellation request has been sent and is being reviewed!</Text>


                            <TouchableOpacity
                                style={UserBookingStyle.modalButton}
                                onPress={() => {
                                    modalOK()
                                }}
                            >
                                <Text style={UserBookingStyle.modalButtonText}>OK</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

            </View>

        </View>

    )
}