import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
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


export default function UserBookings() {
    const cs = useNavigation()

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const [bookings, setBookings] = useState([
        { id: "1", package: "Baguio Trip", date: "2026-02-10", status: "Confirmed", pax: 2 },
        { id: "2", package: "Cebu Tour", date: "2026-03-01", status: "Pending", pax: 4 },
        { id: "3", package: "Palawan Adventure", date: "2026-02-15", status: "Cancelled", pax: 1 },
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

    const renderItem = ({ item }) => (
        <View style={UserBookingStyle.tableRow}>
            <Text style={UserBookingStyle.tableCell}>{item.package}</Text>
            <Text style={UserBookingStyle.tableCell}>{item.date}</Text>
            <Text style={UserBookingStyle.tableCell}>{item.status}</Text>
            <Text style={UserBookingStyle.tableCell}>{item.pax}</Text>
            <TouchableOpacity
                style={UserBookingStyle.viewButton}
            >
                <Text style={UserBookingStyle.viewButtonText}>View</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={UserBookingStyle.container}>
            <Text style={UserBookingStyle.userbookingheading}>User Bookings</Text>
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
                <Text style={UserBookingStyle.tableHeaderCell}>Package</Text>
                <Text style={UserBookingStyle.tableHeaderCell}>Date</Text>
                <Text style={UserBookingStyle.tableHeaderCell}>Status</Text>
                <Text style={UserBookingStyle.tableHeaderCell}>Pax</Text>
                <Text style={UserBookingStyle.tableHeaderCell}>Actions</Text>
            </View>

            <FlatList
                data={filteredBookings}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={UserBookingStyle.table}
            />



        </View>
    )
}