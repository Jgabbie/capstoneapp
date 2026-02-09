import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import AdminSidebar from '../../components/AdminSidebar';
import HomeStyle from '../../styles/HomeStyle';
import AddPackageStyles from '../../styles/adminstyles/AddPackageStyles';
import { useNavigation } from '@react-navigation/native'

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
        <View style={AddPackageStyles.container}>
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

            <Text style={AddPackageStyles.headerText}>Add Package</Text>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={AddPackageStyles.formContainer}>
                <TextInput style={AddPackageStyles.input} placeholder="Enter Package Name..." placeholderTextColor="#A9A9A9" />
                <TextInput style={AddPackageStyles.input} placeholder="Enter Price..." placeholderTextColor="#A9A9A9" keyboardType="numeric" />
                <TextInput style={AddPackageStyles.input} placeholder="Insert Photos..." placeholderTextColor="#A9A9A9" />
                <TextInput style={AddPackageStyles.input} placeholder="Accommodation" placeholderTextColor="#A9A9A9" />
                <TextInput style={AddPackageStyles.input} placeholder="Duration" placeholderTextColor="#A9A9A9" />
                <TextInput style={AddPackageStyles.input} placeholder="Transportation" placeholderTextColor="#A9A9A9" />

                <View style={AddPackageStyles.pickerWrapper}>
                    <Picker selectedValue={type} onValueChange={(item) => setType(item)} style={AddPackageStyles.picker}>
                        <Picker.Item label="Type" value="" color="#A9A9A9" />
                        <Picker.Item label="Local" value="local" />
                        <Picker.Item label="International" value="international" />
                    </Picker>
                </View>

                <View style={AddPackageStyles.pickerWrapper}>
                    <Picker selectedValue={familyFriendly} onValueChange={(item) => setFamilyFriendly(item)} style={AddPackageStyles.picker}>
                        <Picker.Item label="Family Friendly" value="" color="#A9A9A9" />
                        <Picker.Item label="Yes" value="yes" />
                        <Picker.Item label="No" value="no" />
                    </Picker>
                </View>

                <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Short Description..." placeholderTextColor="#A9A9A9" multiline={true} />
                <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Terms and Conditions..." placeholderTextColor="#A9A9A9" multiline={true} />
                <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Inclusions..." placeholderTextColor="#A9A9A9" multiline={true} />
                <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Exclusions..." placeholderTextColor="#A9A9A9" multiline={true} />
                <TextInput style={[AddPackageStyles.input, AddPackageStyles.textArea]} placeholder="Enter Itinerary..." placeholderTextColor="#A9A9A9" multiline={true} />

                <View style={AddPackageStyles.buttonRow}>
                    <TouchableOpacity style={AddPackageStyles.backButton} onPress={() => navigation.navigate("packagemanagement")}>
                        <Text style={AddPackageStyles.buttonText}>BACK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={AddPackageStyles.addButton} onPress={() => setModalVisible(true)}>
                        <Image source={require('../../materials/plussmall_icon.png')} style={AddPackageStyles.plusIcon} />
                        <Text style={AddPackageStyles.buttonText}>Add Package</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal transparent={true} visible={modalVisible} animationType="fade">
                <View style={AddPackageStyles.modalOverlay}>
                    <View style={AddPackageStyles.modalContainer}>
                        <Text style={AddPackageStyles.modalText}>Package has been successfully added!</Text>
                        <TouchableOpacity style={AddPackageStyles.okButton} onPress={handleSuccess}>
                            <Text style={AddPackageStyles.okButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}