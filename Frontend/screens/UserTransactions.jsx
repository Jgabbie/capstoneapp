import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
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
import UserTransactionsStyle from '../styles/UserTransactionsStyle'
import Sidebar from '../components/Sidebar'

export default function UserTransactions() {
    const cs = useNavigation()
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const [transactions, setTransactions] = useState([
        { id: "1", reference: "TXN-001", date: "2026-02-05", amount: 5000, status: "Confirmed", method: "E-Wallet" },
        { id: "2", reference: "TXN-002", date: "2026-02-10", amount: 15000, status: "Pending", method: "Bank Transfer" },
        { id: "3", reference: "TXN-003", date: "2026-02-15", amount: 12000, status: "Cancelled", method: "Credit Card" },
        { id: "4", reference: "TXN-001", date: "2026-02-05", amount: 5000, status: "Confirmed", method: "E-Wallet" },
        { id: "5", reference: "TXN-002", date: "2026-02-10", amount: 15000, status: "Pending", method: "Bank Transfer" },
        { id: "6", reference: "TXN-003", date: "2026-02-15", amount: 12000, status: "Cancelled", method: "Credit Card" },
        { id: "7", reference: "TXN-001", date: "2026-02-05", amount: 5000, status: "Confirmed", method: "E-Wallet" },
        { id: "8", reference: "TXN-002", date: "2026-02-10", amount: 15000, status: "Pending", method: "Bank Transfer" },
        { id: "9", reference: "TXN-003", date: "2026-02-15", amount: 12000, status: "Cancelled", method: "Credit Card" },
    ])

    const [searchText, setSearchText] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [methodFilter, setMethodFilter] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const filteredTransactions = transactions.filter(b => {
        const matchesSearch = b.reference.toLowerCase().includes(searchText.toLowerCase())
        const matchesStatus = statusFilter === 'All' || b.status === statusFilter
        const matchesMethod = methodFilter === 'All' || b.method.toString() === methodFilter
        return matchesSearch && matchesStatus && matchesMethod
    })

    const renderItem = ({ item }) => (
        <View style={UserTransactionsStyle.tableRow}>
            <Text style={UserTransactionsStyle.tableCell}>{item.reference}</Text>
            <Text style={UserTransactionsStyle.tableCell}>{item.date}</Text>
            <Text style={UserTransactionsStyle.tableCell}>₱ {item.amount}</Text>
            <Text style={UserTransactionsStyle.tableCell}>{item.status}</Text>
            <Text style={UserTransactionsStyle.tableCell}>{item.method}</Text>
            <TouchableOpacity
                style={UserTransactionsStyle.viewButton}
                onPress={() => {
                    cs.navigate('transactionreceipt')
                }}
            >
                <Text style={UserTransactionsStyle.viewButtonText}>View</Text>
            </TouchableOpacity>
        </View>
    )

    const paginatedTransactions = filteredTransactions.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
    return (
        <View>
            <Sidebar
                visible={isSidebarVisible}
                onClose={() => setSidebarVisible(false)}
            />

            <View style={UserTransactionsStyle.headerContainer}>
                <TouchableOpacity
                    style={UserTransactionsStyle.sideBarButton}
                    onPress={() => setSidebarVisible(true)}
                >
                    <Image
                        source={require('../materials/sidebar_btn.png')}
                        style={UserTransactionsStyle.sideBarImage}
                    />
                </TouchableOpacity>

                <Image
                    source={require('../materials/mrc_logo2.png')}
                    style={UserTransactionsStyle.logo}
                />

                <View style={UserTransactionsStyle.rightIconsContainer}>
                    <TouchableOpacity style={UserTransactionsStyle.bellButton}>
                        <Image
                            source={require('../materials/bell_icon.png')}
                            style={UserTransactionsStyle.bellIcon}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../materials/profile_icon.png')}
                        style={UserTransactionsStyle.profileIcon}
                    />
                </View>
            </View>
            <View style={UserTransactionsStyle.container}>
                <Text style={UserTransactionsStyle.usertransactionheading}>User Transactions</Text>
                <TextInput
                    style={UserTransactionsStyle.SearchBar}
                    placeholder='Search Transactions...'
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <View style={UserTransactionsStyle.filtersContainer}>
                    <Picker
                        style={UserTransactionsStyle.picker}
                        selectedValue={statusFilter}
                        onValueChange={(value) => setStatusFilter(value)}
                    >
                        <Picker.Item label="All Status" value="All" />
                        <Picker.Item label="Confirmed" value="Confirmed" />
                        <Picker.Item label="Pending" value="Pending" />
                        <Picker.Item label="Cancelled" value="Cancelled" />
                    </Picker>

                    <Picker
                        style={UserTransactionsStyle.picker}
                        selectedValue={methodFilter}
                        onValueChange={(value) => setMethodFilter(value)}
                    >
                        <Picker.Item label="All Method" value="All" />
                        <Picker.Item label="E-Wallet" value="E-Wallet" />
                        <Picker.Item label="Bank Transfer" value="Bank Transfer" />
                        <Picker.Item label="Credit Card" value="Credit Card" />
                    </Picker>
                </View>

                <View style={UserTransactionsStyle.tableHeader}>
                    <Text style={UserTransactionsStyle.tableHeaderCell}>Ref.</Text>
                    <Text style={UserTransactionsStyle.tableHeaderCell}>Date</Text>
                    <Text style={UserTransactionsStyle.tableHeaderCell}>Amount</Text>
                    <Text style={UserTransactionsStyle.tableHeaderCell}>Status</Text>
                    <Text style={UserTransactionsStyle.tableHeaderCell}>Method</Text>
                    <Text style={UserTransactionsStyle.tableHeaderCell}>Actions</Text>
                </View>

                <FlatList
                    data={paginatedTransactions}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={UserTransactionsStyle.table}
                />

                <View style={{ flexDirection: "row", justifyContent: 'center', marginVertical: 10 }}>
                    <TouchableOpacity
                        onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        style={UserTransactionsStyle.paginationButton}
                    >
                        <Text style={UserTransactionsStyle.paginationText}>Previous</Text>
                    </TouchableOpacity>

                    <Text style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                        {currentPage} / {totalPages}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        style={UserTransactionsStyle.paginationButton}
                    >
                        <Text style={UserTransactionsStyle.paginationText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}