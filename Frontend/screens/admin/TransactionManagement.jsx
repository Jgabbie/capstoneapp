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
    const [modalOkRemoveVisible, setModalOkRemoveVisible] = useState(false)
    const [modalRemoveVisible, setModalRemoveVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const modalOkRemove = () => {
        setModalRemoveVisible(false)
        setModalOkRemoveVisible(true)
    }

    const modalCancelRemove = () => {
        setModalRemoveVisible(false)
    }

    const modalRemovedOk = () => {
        setModalOkRemoveVisible(false)
    }

    const [users, setusers] = useState([
        { id: "1", transacref: "TREF-9327", package: "Boracay Tour", status: "Paid", amount: 20000, },
        { id: "2", transacref: "TREF-9281", package: "Japan Tour", status: "Pending", amount: 20000, },
        { id: "3", transacref: "TREF-8422", package: "Korea Tour", status: "Unpaid", amount: 30000, },
        { id: "4", transacref: "TREF-0492", package: "Shanghai Tour", status: "Paid", amount: 35000, },
        { id: "5", transacref: "TREF-1323", package: "Bohol Tour", status: "Pending", amount: 40000, },
        { id: "6", transacref: "TREF-4732", package: "El Nido Tour", status: "Pending", amount: 26000, },
        { id: "7", transacref: "TREF-4821", package: "Korea Tour", status: "Pending", amount: 20000, },
        { id: "8", transacref: "TREF-9231", package: "Japan Tour", status: "Pending", amount: 21000, },
    ])

    const [searchText, setSearchText] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [amountFilter, setAmountFilter] = useState('All')

    const filteredusers = users.filter(b => {
        const matchesSearch = b.transacref.toLowerCase().includes(searchText.toLowerCase())
        const matchesStatus = statusFilter === 'All' || b.status === statusFilter
        const matchesAmount =
            amountFilter === 'All' ||
            (amountFilter === 'LOW' && b.amount < 10000) ||
            (amountFilter === 'MID' && b.amount >= 10001 && b.amount <= 30000) ||
            (amountFilter === 'HIGH' && b.amount > 30000)
        return matchesSearch && matchesStatus && matchesAmount
    })

    const paginatedUsers = filteredusers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredusers.length / itemsPerPage);

    const renderItem = ({ item }) => (
        <View style={TransactionManagementStyles.tableRow}>
            <Text style={[TransactionManagementStyles.tableCell, TransactionManagementStyles.transacrefCell]}>{item.transacref}</Text>
            <Text style={[TransactionManagementStyles.tableCell, TransactionManagementStyles.packageCell]}>{item.package}</Text>
            <Text style={[TransactionManagementStyles.tableCell, TransactionManagementStyles.statusCell]}>{item.status}</Text>
            <Text style={[TransactionManagementStyles.tableCell, TransactionManagementStyles.amountCell]}>{item.amount}</Text>
            <View style={
                TransactionManagementStyles.actionCell
            }>
                <TouchableOpacity
                    style={TransactionManagementStyles.viewButton}
                    onPress={() => {
                        cs.navigate('admintransactionreceipt')
                    }}
                >
                    <Text style={TransactionManagementStyles.viewButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={TransactionManagementStyles.cancelButton}
                    onPress={() => {
                        setModalRemoveVisible(true)
                    }}
                >
                    <Text style={TransactionManagementStyles.viewButtonText}>Remove</Text>
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
            <View style={TransactionManagementStyles.container}>
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
                        <Picker.Item label="Paid" value="Paid" />
                        <Picker.Item label="Pending" value="Pending" />
                        <Picker.Item label="Unpaid" value="Unpaid" />
                    </Picker>

                    <Picker
                        style={TransactionManagementStyles.picker}
                        selectedValue={amountFilter}
                        onValueChange={(value) => setAmountFilter(value)}
                    >
                        <Picker.Item label="All Amounts" value="All" />
                        <Picker.Item label="Below ₱10,000" value="LOW" />
                        <Picker.Item label="₱10,001 – ₱30,000" value="MID" />
                        <Picker.Item label="Above ₱30,000" value="HIGH" />
                    </Picker>
                </View>

                <View style={TransactionManagementStyles.tableHeader}>
                    <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.transacrefCell]}>Reference</Text>
                    <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.packageCell]}>Package</Text>
                    <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.statusCell]}>Status</Text>
                    <Text style={[TransactionManagementStyles.tableHeaderCell, TransactionManagementStyles.amountCell]}>Amount</Text>
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

            <Modal
                transparent
                animationType='fade'
                visible={modalRemoveVisible}
                onRequestClose={() => { setModalRemoveVisible }}
            >

                <View style={TransactionManagementStyles.modalOverlay}>
                    <View style={TransactionManagementStyles.modalBox}>
                        <Text style={TransactionManagementStyles.modalTitle}>Remove Transaction</Text>
                        <Text style={TransactionManagementStyles.modalText}>Are you sure you want to remove this transaction?</Text>

                        <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
                            <TouchableOpacity
                                style={TransactionManagementStyles.modalButton}
                                onPress={() => {
                                    modalOkRemove()
                                }}
                            >
                                <Text style={TransactionManagementStyles.modalButtonText}>Remove</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={TransactionManagementStyles.modalCancelButton}
                                onPress={() => {
                                    modalCancelRemove()
                                }}
                            >
                                <Text style={TransactionManagementStyles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                transparent
                animationType='fade'
                visible={modalOkRemoveVisible}
                onRequestClose={() => { setModalOkRemoveVisible }}
            >

                <View style={TransactionManagementStyles.modalOverlay}>
                    <View style={TransactionManagementStyles.modalBox}>
                        <Text style={TransactionManagementStyles.modalTitle}>Transaction has been removed</Text>
                        <Text style={TransactionManagementStyles.modalText}>This transaction has been successfully removed!</Text>

                        <TouchableOpacity
                            style={TransactionManagementStyles.modalButton}
                            onPress={() => {
                                modalRemovedOk()
                            }}
                        >
                            <Text style={TransactionManagementStyles.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    )
}