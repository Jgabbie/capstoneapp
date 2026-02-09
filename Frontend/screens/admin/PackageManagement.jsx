import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar';
import HomeStyle from '../../styles/HomeStyle';
import PackageManagementStyles from '../../styles/adminstyles/PackageManagementStyles';
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { useNavigation } from '@react-navigation/native';

export default function PackageManagement() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const navigation = useNavigation();

    const [removeModalVisible, setRemoveModalVisible] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    const [packages, setPackages] = useState([
        { id: "1", name: "Japan Tour Package", slots: "30", price: "42,000", desc: "Experience the best of Japan with a thoughtfully curated tour package that blends tradition and modern culture." },
        { id: "2", name: "Boracay Tour Package", slots: "30", price: "12,000", desc: "Enjoy a relaxing getaway to Boracay, featuring its famous white-sand beaches and crystal-clear waters." },
        { id: "3", name: "Batanes Tour Package", slots: "30", price: "7,000", desc: "Experience the breathtaking beauty of Batanes with a curated tour package showcasing rolling hills." },
        { id: "4", name: "Palawan Special", slots: "15", price: "15,000", desc: "Visit the underground river and enjoy the crystal clear lagoons of El Nido." },
    ]);

    const filteredPackages = packages.filter(pkg => 
        pkg.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
    const paginatedData = filteredPackages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const confirmRemove = () => {
        setRemoveModalVisible(false);
        setSuccessModalVisible(true);
    };

    const renderPackageItem = ({ item }) => (
        <View style={PackageManagementStyles.packageCard}>
            <Image source={require('../../materials/japan_imagesmall.png')} style={PackageManagementStyles.cardImage} />
            
            <View style={PackageManagementStyles.cardContent}>
                <View style={PackageManagementStyles.cardHeaderRow}>
                    <Text style={PackageManagementStyles.packageName}>{item.name}</Text>
                    <Text style={PackageManagementStyles.slotsText}>Slots Available: {item.slots}</Text>
                </View>
                
                <Text style={PackageManagementStyles.packageDesc} numberOfLines={3}>
                    {item.desc}
                </Text>

                <View style={PackageManagementStyles.cardFooter}>
                    <Text style={PackageManagementStyles.priceText}>₱{item.price}</Text>
                    <View style={PackageManagementStyles.actionButtons}>
                        <TouchableOpacity 
                            style={PackageManagementStyles.editBtn}
                            onPress={() => { navigation.navigate("editpackage") }}
                        >
                            <Text style={PackageManagementStyles.btnText}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={PackageManagementStyles.removeBtn}
                            onPress={() => setRemoveModalVisible(true)}
                        >
                            <Text style={PackageManagementStyles.btnText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    if (!fontsLoaded) return null;

    return (
        <View style={PackageManagementStyles.container}>
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

            <Text style={PackageManagementStyles.header}>Package Management</Text>
            
            <View style={PackageManagementStyles.statsContainer}>
                <View style={PackageManagementStyles.statsRow}>
                    <View style={PackageManagementStyles.card}>
                        <View style={PackageManagementStyles.valueRow}>
                            <Image source={require('../../materials/total_icon.png')} style={PackageManagementStyles.statsIcon} />
                            <Text style={PackageManagementStyles.cardValue}>67</Text>
                        </View>
                        <Text style={PackageManagementStyles.cardLabel}>Total Packages</Text>
                    </View>

                    <View style={PackageManagementStyles.card}>
                        <View style={PackageManagementStyles.valueRow}>
                            <Image source={require('../../materials/check_icon.png')} style={PackageManagementStyles.statsIcon} />
                            <Text style={PackageManagementStyles.cardValue}>12</Text>
                        </View>
                        <Text style={PackageManagementStyles.cardLabel}>Available Packages</Text>
                    </View>
                </View>
            </View>

            <View style={PackageManagementStyles.searchContainer}>
                <TextInput 
                    style={PackageManagementStyles.SearchBar}
                    placeholder='Search packages...'
                    value={searchText}
                    onChangeText={(text) => {
                        setSearchText(text);
                        setCurrentPage(1);
                    }}
                />
                <TouchableOpacity 
                    style={PackageManagementStyles.addPackageBtn}
                    onPress={() => { navigation.navigate("addpackage") }}
                >
                    <Image source={require('../../materials/plussmall_icon.png')} style={PackageManagementStyles.plusIcon} />
                    <Text style={PackageManagementStyles.addBtnText}>Add Package</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={paginatedData}
                renderItem={renderPackageItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />

            <View style={PackageManagementStyles.paginationContainer}>
                <TouchableOpacity
                    onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    style={PackageManagementStyles.paginationButton}
                >
                    <Text style={PackageManagementStyles.paginationText}>Previous</Text>
                </TouchableOpacity>

                <Text style={PackageManagementStyles.pageIndicator}>
                    {currentPage} / {totalPages || 1}
                </Text>

                <TouchableOpacity
                    onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages || 1))}
                    style={PackageManagementStyles.paginationButton}
                >
                    <Text style={PackageManagementStyles.paginationText}>Next</Text>
                </TouchableOpacity>
            </View>

            <Modal transparent={true} visible={removeModalVisible} animationType="fade">
                <View style={PackageManagementStyles.modalOverlay}>
                    <View style={PackageManagementStyles.modalContainer}>
                        <Text style={PackageManagementStyles.modalText}>
                            Are you sure you want to remove this package?
                        </Text>
                        <View style={PackageManagementStyles.modalButtonRow}>
                            <TouchableOpacity style={PackageManagementStyles.modalCancelBtn} onPress={() => setRemoveModalVisible(false)}>
                                <Text style={PackageManagementStyles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={PackageManagementStyles.modalRemoveBtn} onPress={confirmRemove}>
                                <Text style={PackageManagementStyles.modalButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal transparent={true} visible={successModalVisible} animationType="fade">
                <View style={PackageManagementStyles.modalOverlay}>
                    <View style={PackageManagementStyles.modalContainer}>
                        <Text style={PackageManagementStyles.modalText}>
                            Package has been successfully removed!
                        </Text>
                        <TouchableOpacity style={PackageManagementStyles.modalOkBtn} onPress={() => setSuccessModalVisible(false)}>
                            <Text style={PackageManagementStyles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}