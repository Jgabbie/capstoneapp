import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import AdminSidebar from '../../components/AdminSidebar';
import HomeStyle from '../../styles/HomeStyle';
import { useNavigation } from '@react-navigation/native'
import EditPackageStyles from '../../styles/adminstyles/EditPackageStyles';

export default function AddPackage() {
    const navigation = useNavigation();
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    
    const [type, setType] = useState('');
    const [familyFriendly, setFamilyFriendly] = useState('');

    const handleSuccess = () => {
        setModalVisible(false);
        navigation.navigate("packagemanagement");
    };

    return (
        <View style={EditPackageStyles.container}>
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

            <Text style={EditPackageStyles.headerText}>Edit Package</Text>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={EditPackageStyles.formContainer}>
                <TextInput style={EditPackageStyles.input} placeholder="Enter Package Name..." placeholderTextColor="#A9A9A9" />
                <TextInput style={EditPackageStyles.input} placeholder="Enter Price..." placeholderTextColor="#A9A9A9" keyboardType="numeric" />
                <TextInput style={EditPackageStyles.input} placeholder="Insert Photos..." placeholderTextColor="#A9A9A9" />
                <TextInput style={EditPackageStyles.input} placeholder="Accommodation" placeholderTextColor="#A9A9A9" />
                <TextInput style={EditPackageStyles.input} placeholder="Duration" placeholderTextColor="#A9A9A9" />
                <TextInput style={EditPackageStyles.input} placeholder="Transportation" placeholderTextColor="#A9A9A9" />

                <View style={EditPackageStyles.pickerWrapper}>
                    <Picker selectedValue={type} onValueChange={(item) => setType(item)} style={EditPackageStyles.picker}>
                        <Picker.Item label="Type" value="" color="#A9A9A9" />
                        <Picker.Item label="Local" value="local" />
                        <Picker.Item label="International" value="international" />
                    </Picker>
                </View>

                <View style={EditPackageStyles.pickerWrapper}>
                    <Picker selectedValue={familyFriendly} onValueChange={(item) => setFamilyFriendly(item)} style={EditPackageStyles.picker}>
                        <Picker.Item label="Family Friendly" value="" color="#A9A9A9" />
                        <Picker.Item label="Yes" value="yes" />
                        <Picker.Item label="No" value="no" />
                    </Picker>
                </View>

                <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Short Description..." placeholderTextColor="#A9A9A9" multiline={true} />
                <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Terms and Conditions..." placeholderTextColor="#A9A9A9" multiline={true} />
                <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Inclusions..." placeholderTextColor="#A9A9A9" multiline={true} />
                <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Exclusions..." placeholderTextColor="#A9A9A9" multiline={true} />
                <TextInput style={[EditPackageStyles.input, EditPackageStyles.textArea]} placeholder="Enter Itinerary..." placeholderTextColor="#A9A9A9" multiline={true} />

                <View style={EditPackageStyles.buttonRow}>
                    <TouchableOpacity style={EditPackageStyles.backButton} onPress={() => navigation.navigate("packagemanagement")}>
                        <Text style={EditPackageStyles.buttonText}>BACK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={EditPackageStyles.addButton} onPress={() => setModalVisible(true)}>
                        <Text style={EditPackageStyles.buttonText}>Edit Package</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal transparent={true} visible={modalVisible} animationType="fade">
                <View style={EditPackageStyles.modalOverlay}>
                    <View style={EditPackageStyles.modalContainer}>
                        <Text style={EditPackageStyles.modalText}>Package has been successfully edited!</Text>
                        <TouchableOpacity style={EditPackageStyles.okButton} onPress={handleSuccess}>
                            <Text style={EditPackageStyles.okButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}