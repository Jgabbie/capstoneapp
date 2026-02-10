import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import AdminSidebar from '../../components/AdminSidebar'
import HomeStyle from '../../styles/HomeStyle';
import CancellationRequestStyles from '../../styles/adminstyles/CancellationRequestStyles';
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

export default function CancellationRequests() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const cs = useNavigation()

    const [selectedDate, setSelectedDate] = useState(null)
    const [showDatePicker, setShowDatePicker] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [modalApproveVisible, setModalApproveVisible] = useState(false)
    const [modalApproveOkVisible, setModalApproveOkVisible] = useState(false)
    const [modalDenyVisible, setModalDenyVisible] = useState(false)
    const [modalDenyOkVisible, setModalDenyOkVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const approveOk = () => {
        setModalApproveVisible(false)
        setModalApproveOkVisible(true)
    }

    const approveCancel = () => {
        setModalApproveVisible(false)
    }

    const approveModalOK = () => {
        setModalApproveOkVisible(false)
    }

    const denyOk = () => {
        setModalDenyVisible(false)
        setModalDenyOkVisible(true)
    }

    const denyCancel = () => {
        setModalDenyVisible(false)
    }

    const denyModalOK = () => {
        setModalDenyOkVisible(false)
    }

    const [users, setusers] = useState([
        { id: "1", username: "jglanuza", package: "Boracay Tour", status: "Pending", date: "01-25-26", },
        { id: "2", username: "tayshaun", package: "Japan Tour", status: "Pending", date: "01-22-26", },
        { id: "3", username: "marionblmt", package: "Korea Tour", status: "Pending", date: "01-03-26", },
        { id: "4", username: "jsnnsbauca", package: "Shanghai Tour", status: "Pending", date: "01-11-26", },
        { id: "5", username: "jglanuza", package: "Boracay Tour", status: "Pending", date: "01-12-26", },
        { id: "6", username: "tayshaun", package: "Boracay Tour", status: "Pending", date: "01-20-26", },
        { id: "7", username: "marionblmt", package: "El Nido Tour", status: "Pending", date: "02-05-26", },
        { id: "8", username: "jsnnsbauca", package: "Japan Tour", status: "Pending", date: "02-25-26", },
    ])

    const [searchText, setSearchText] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [dateFilter, setdateFilter] = useState('All')

    const filteredusers = users.filter(b => {
        const matchesSearch = b.username.toLowerCase().includes(searchText.toLowerCase())
        const matchesStatus = statusFilter === 'All' || b.status === statusFilter
        const matchesdate = dateFilter === 'All' || b.date.toString() === dateFilter
        return matchesSearch && matchesStatus && matchesdate
    })

    const paginatedUsers = filteredusers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredusers.length / itemsPerPage);

    const renderItem = ({ item }) => (
        <View style={CancellationRequestStyles.tableRow}>
            <Text style={[CancellationRequestStyles.tableCell, CancellationRequestStyles.usernameCell]}>{item.username}</Text>
            <Text style={[CancellationRequestStyles.tableCell, CancellationRequestStyles.packageCell]}>{item.package}</Text>
            <Text style={[CancellationRequestStyles.tableCell, CancellationRequestStyles.statusCell]}>{item.status}</Text>
            <Text style={[CancellationRequestStyles.tableCell, CancellationRequestStyles.dateCell]}>{item.date}</Text>
            <View style={
                CancellationRequestStyles.actionCell
            }>
                <TouchableOpacity
                    style={CancellationRequestStyles.viewButton}
                    onPress={() => {
                        setModalApproveVisible(true)
                    }}
                >
                    <Text style={CancellationRequestStyles.viewButtonText}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={CancellationRequestStyles.cancelButton}
                    onPress={() => {
                        setModalDenyVisible(true)
                    }}
                >
                    <Text style={CancellationRequestStyles.viewButtonText}>Deny</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    return (
        <View>
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
            <View style={CancellationRequestStyles.container}>
                <Text style={CancellationRequestStyles.header}>Cancellation Requests</Text>
                <View style={CancellationRequestStyles.statsContainer}>
                    <View style={CancellationRequestStyles.statsRow}>
                        <View style={CancellationRequestStyles.card}>
                            <Text style={CancellationRequestStyles.cardValue}>40</Text>
                            <Text style={CancellationRequestStyles.cardLabel}>Requests</Text>
                        </View>

                        <View style={CancellationRequestStyles.card}>
                            <Text style={CancellationRequestStyles.cardValue}>20</Text>
                            <Text style={CancellationRequestStyles.cardLabel}>Pending</Text>
                        </View>
                    </View>

                    <View style={CancellationRequestStyles.statsRow}>
                        <View style={CancellationRequestStyles.card}>
                            <Text style={CancellationRequestStyles.cardValue}>12</Text>
                            <Text style={CancellationRequestStyles.cardLabel}>Approved</Text>
                        </View>

                        <View style={CancellationRequestStyles.card}>
                            <Text style={CancellationRequestStyles.cardValue}>8</Text>
                            <Text style={CancellationRequestStyles.cardLabel}>Denied</Text>
                        </View>
                    </View>
                </View>

                <TextInput
                    style={CancellationRequestStyles.SearchBar}
                    placeholder='Search username...'
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <View style={CancellationRequestStyles.filtersContainer}>
                    <Picker
                        style={CancellationRequestStyles.picker}
                        selectedValue={statusFilter}
                        onValueChange={(value) => setStatusFilter(value)}
                    >
                        <Picker.Item label="All Status" value="All" />
                        <Picker.Item label="Pending" value="Pending" />
                        <Picker.Item label="Approved" value="Approved" />
                        <Picker.Item label="Denied" value="Denied" />
                    </Picker>

                    <TouchableOpacity
                        style={CancellationRequestStyles.dateFilter}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Text style={CancellationRequestStyles.dateFilterText}>
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

                <View style={CancellationRequestStyles.tableHeader}>
                    <Text style={[CancellationRequestStyles.tableHeaderCell, CancellationRequestStyles.usernameCell]}>Username</Text>
                    <Text style={[CancellationRequestStyles.tableHeaderCell, CancellationRequestStyles.packageCell]}>Package</Text>
                    <Text style={[CancellationRequestStyles.tableHeaderCell, CancellationRequestStyles.statusCell]}>Status</Text>
                    <Text style={[CancellationRequestStyles.tableHeaderCell, CancellationRequestStyles.dateCell]}>Date</Text>
                    <Text style={[CancellationRequestStyles.tableHeaderCell, CancellationRequestStyles.actionCell]}>Actions</Text>
                </View>

                <FlatList
                    data={paginatedUsers}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={CancellationRequestStyles.table}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                    <TouchableOpacity
                        onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        style={CancellationRequestStyles.paginationButton}
                    >
                        <Text style={CancellationRequestStyles.paginationText}>Previous</Text>
                    </TouchableOpacity>

                    <Text style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                        {currentPage} / {totalPages}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        style={CancellationRequestStyles.paginationButton}
                    >
                        <Text style={CancellationRequestStyles.paginationText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                transparent
                animationType='fade'
                visible={modalApproveVisible}
                onRequestClose={() => { setModalApproveVisible }}
            >

                <View style={CancellationRequestStyles.modalOverlay}>
                    <View style={CancellationRequestStyles.modalBox}>
                        <Text style={CancellationRequestStyles.modalTitle}>Approve Request</Text>
                        <Text style={CancellationRequestStyles.modalText}>Are you sure you want to approve this cancellation request?</Text>

                        <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
                            <TouchableOpacity
                                style={CancellationRequestStyles.modalButton}
                                onPress={() => {
                                    approveOk()
                                }}
                            >
                                <Text style={CancellationRequestStyles.modalButtonText}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={CancellationRequestStyles.modalCancelButton}
                                onPress={() => {
                                    approveCancel()
                                }}
                            >
                                <Text style={CancellationRequestStyles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                transparent
                animationType='fade'
                visible={modalApproveOkVisible}
                onRequestClose={() => { setModalApproveOkVisible }}
            >

                <View style={CancellationRequestStyles.modalOverlay}>
                    <View style={CancellationRequestStyles.modalBox}>
                        <Text style={CancellationRequestStyles.modalTitle}>Cancellation Approve</Text>
                        <Text style={CancellationRequestStyles.modalText}>This cancellation request has been approved!</Text>

                        <TouchableOpacity
                            style={CancellationRequestStyles.modalButton}
                            onPress={() => {
                                approveModalOK()
                            }}
                        >
                            <Text style={CancellationRequestStyles.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                animationType='fade'
                visible={modalDenyVisible}
                onRequestClose={() => { setModalDenyVisible }}
            >

                <View style={CancellationRequestStyles.modalOverlay}>
                    <View style={CancellationRequestStyles.modalBox}>
                        <Text style={CancellationRequestStyles.modalTitle}>Deny Request</Text>
                        <Text style={CancellationRequestStyles.modalText}>Are you sure you want to deny this cancellation request?</Text>

                        <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
                            <TouchableOpacity
                                style={CancellationRequestStyles.modalButton}
                                onPress={() => {
                                    denyOk()
                                }}
                            >
                                <Text style={CancellationRequestStyles.modalButtonText}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={CancellationRequestStyles.modalCancelButton}
                                onPress={() => {
                                    denyCancel()
                                }}
                            >
                                <Text style={CancellationRequestStyles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                transparent
                animationType='fade'
                visible={modalDenyOkVisible}
                onRequestClose={() => { setModalDenyOkVisible }}
            >

                <View style={CancellationRequestStyles.modalOverlay}>
                    <View style={CancellationRequestStyles.modalBox}>
                        <Text style={CancellationRequestStyles.modalTitle}>Cancellation Denied</Text>
                        <Text style={CancellationRequestStyles.modalText}>This cancellation request has been denied!</Text>

                        <TouchableOpacity
                            style={CancellationRequestStyles.modalButton}
                            onPress={() => {
                                denyModalOK()
                            }}
                        >
                            <Text style={CancellationRequestStyles.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </View>
    )
}