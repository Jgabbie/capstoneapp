import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import AdminSidebar from '../../components/AdminSidebar'
import HomeStyle from '../../styles/HomeStyle';
import RatingManagementStyles from '../../styles/adminstyles/RatingManagementStyles';
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

export default function ReviewManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const [searchText, setSearchText] = useState('')
    const [starFilter, setStarFilter] = useState('All')
    const [modalRemoveVisible, setModalRemoveVisible] = useState(false)
    const [modalRemoveOkVisible, setModalRemoveOkVisible] = useState(false)

    const removeOk = () => {
        setModalRemoveVisible(false)
        setModalRemoveOkVisible(true)
    }

    const removeCancel = () => {
        setModalRemoveVisible(false)
    }

    const removeModalOK = () => {
        setModalRemoveOkVisible(false)
    }

    const [reviews, setReviews] = useState([
        {
            id: '1',
            username: 'jglanuza',
            package: 'Boracay Tour',
            stars: 5,
            comment: 'Amazing experience! Highly recommended.'
        },
        {
            id: '2',
            username: 'tayshaun',
            package: 'Japan Tour',
            stars: 4,
            comment: 'Very organized tour, great guides.'
        },
        {
            id: '3',
            username: 'marionblmt',
            package: 'Korea Tour',
            stars: 3,
            comment: 'Good but hotel could be better.'
        },
        {
            id: '4',
            username: 'jsnnsbauca',
            package: 'El Nido Tour',
            stars: 1,
            comment: 'Trip was cancelled last minute.'
        },
    ])

    const filteredReviews = reviews.filter(r => {
        const matchesSearch =
            r.username.toLowerCase().includes(searchText.toLowerCase()) ||
            r.package.toLowerCase().includes(searchText.toLowerCase()) ||
            r.comment.toLowerCase().includes(searchText.toLowerCase())

        const matchesStars =
            starFilter === 'All' || r.stars === Number(starFilter)

        return matchesSearch && matchesStars
    })

    const renderStars = (count) => (
        <Text style={RatingManagementStyles.stars}>
            {'★'.repeat(count)}{'☆'.repeat(5 - count)}
        </Text>
    )

    const renderItem = ({ item }) => (
        <View style={RatingManagementStyles.reviewCard}>
            <View style={RatingManagementStyles.reviewHeader}>
                <Text style={RatingManagementStyles.username}>{item.username}</Text>
                {renderStars(item.stars)}
            </View>

            <Text style={RatingManagementStyles.package}>
                Package: {item.package}
            </Text>

            <Text style={RatingManagementStyles.comment}>
                {item.comment}
            </Text>

            <TouchableOpacity
                style={RatingManagementStyles.removeButton}
                onPress={() => { setModalRemoveVisible(true) }}
            >
                <Text style={RatingManagementStyles.removeButtonText}>
                    Remove
                </Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View>
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />

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
            <View style={RatingManagementStyles.container}>
                <Text style={RatingManagementStyles.header}>Ratings Management</Text>
                <View style={RatingManagementStyles.statsContainer}>
                    <View style={RatingManagementStyles.statsRow}>
                        <View style={RatingManagementStyles.card}>
                            <Text style={RatingManagementStyles.cardValue}>40</Text>
                            <Text style={RatingManagementStyles.cardLabel}>Ratings</Text>
                        </View>

                        <View style={RatingManagementStyles.card}>
                            <Text style={RatingManagementStyles.cardValue}>36</Text>
                            <Text style={RatingManagementStyles.cardLabel}>5 Stars</Text>
                        </View>
                    </View>

                    <View style={RatingManagementStyles.statsRow}>
                        <View style={RatingManagementStyles.card}>
                            <Text style={RatingManagementStyles.cardValue}>4</Text>
                            <Text style={RatingManagementStyles.cardLabel}>1 Star</Text>
                        </View>

                        <View style={RatingManagementStyles.card}>
                            <Text style={RatingManagementStyles.cardValue}>4.7</Text>
                            <Text style={RatingManagementStyles.cardLabel}>Average Rating</Text>
                        </View>
                    </View>
                </View>

                <TextInput
                    style={RatingManagementStyles.searchBar}
                    placeholder="Search reviews..."
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <Picker
                    selectedValue={starFilter}
                    style={RatingManagementStyles.picker}
                    onValueChange={value => setStarFilter(value)}
                >
                    <Picker.Item label="All Ratings" value="All" />
                    <Picker.Item label="5 Stars" value="5" />
                    <Picker.Item label="4 Stars" value="4" />
                    <Picker.Item label="3 Stars" value="3" />
                    <Picker.Item label="2 Stars" value="2" />
                    <Picker.Item label="1 Star" value="1" />
                </Picker>

                <FlatList
                    data={filteredReviews}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>

            <Modal
                transparent
                animationType='fade'
                visible={modalRemoveVisible}
                onRequestClose={() => { setModalRemoveVisible }}
            >

                <View style={RatingManagementStyles.modalOverlay}>
                    <View style={RatingManagementStyles.modalBox}>
                        <Text style={RatingManagementStyles.modalTitle}>Remove Review</Text>
                        <Text style={RatingManagementStyles.modalText}>Are you sure you want to remove this review?</Text>

                        <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
                            <TouchableOpacity
                                style={RatingManagementStyles.modalButton}
                                onPress={() => {
                                    removeOk()
                                }}
                            >
                                <Text style={RatingManagementStyles.modalButtonText}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={RatingManagementStyles.modalCancelButton}
                                onPress={() => {
                                    removeCancel()
                                }}
                            >
                                <Text style={RatingManagementStyles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                transparent
                animationType='fade'
                visible={modalRemoveOkVisible}
                onRequestClose={() => { setModalRemoveOkVisible }}
            >

                <View style={RatingManagementStyles.modalOverlay}>
                    <View style={RatingManagementStyles.modalBox}>
                        <Text style={RatingManagementStyles.modalTitle}>Review Removed</Text>
                        <Text style={RatingManagementStyles.modalText}>This review has been successfully removed!</Text>

                        <TouchableOpacity
                            style={RatingManagementStyles.modalButton}
                            onPress={() => {
                                removeModalOK()
                            }}
                        >
                            <Text style={RatingManagementStyles.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    )
}