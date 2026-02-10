import { View, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
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
import ProfileStyle from '../styles/ProfileStyle'
import Sidebar from '../components/Sidebar'

export default function Profile() {
    const [editing, setEditing] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [saveModalVisible, setSaveModalVisible] = useState(false)
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const handleSavePress = () => {
        if (editing) {
            setModalVisible(true)
        } else {
            setEditing(true)
        }
    }

    const confirmSave = () => {
        setEditing(false)
        setModalVisible(false)
        setSaveModalVisible(true)
        console.log("Saved")
    }

    const cancelSave = () => {
        setModalVisible(false)
    }

    const modalOK = () => {
        setEditing(false)
        setSaveModalVisible(false)
    }

    return (
        <View>
            <Sidebar
                visible={isSidebarVisible}
                onClose={() => setSidebarVisible(false)}
            />

            <View style={ProfileStyle.headerContainer}>
                <TouchableOpacity
                    style={ProfileStyle.sideBarButton}
                    onPress={() => setSidebarVisible(true)}
                >
                    <Image
                        source={require('../materials/sidebar_btn.png')}
                        style={ProfileStyle.sideBarImage}
                    />
                </TouchableOpacity>

                <Image
                    source={require('../materials/mrc_logo2.png')}
                    style={ProfileStyle.logo}
                />

                <View style={ProfileStyle.rightIconsContainer}>
                    <TouchableOpacity style={ProfileStyle.bellButton}>
                        <Image
                            source={require('../materials/bell_icon.png')}
                            style={ProfileStyle.bellIcon}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../materials/profile_icon.png')}
                        style={ProfileStyle.profileIcon}
                    />
                </View>
            </View>


            <View style={ProfileStyle.container}>
                <View style={ProfileStyle.profileImageContainer}>
                    <Image
                        source={require("../assets/images/ProfilePicture.png")}
                        style={ProfileStyle.profileImage}
                    />
                </View>


                <Text style={ProfileStyle.profileheading}>Personal Information</Text>
                <Text style={ProfileStyle.profilelabel}>Username</Text>
                <TextInput style={ProfileStyle.profileinputs}></TextInput>

                <View style={ProfileStyle.fullnamecontainer}>
                    <View>
                        <Text style={ProfileStyle.profilelabel} >First Name</Text>
                        <TextInput style={ProfileStyle.nameinputs}></TextInput>
                    </View>

                    <View>
                        <Text style={ProfileStyle.profilelabel}>Last Name</Text>
                        <TextInput style={ProfileStyle.nameinputs}></TextInput>
                    </View>
                </View>

                <Text style={ProfileStyle.profilelabel}>Email</Text>
                <TextInput style={ProfileStyle.profileinputs}></TextInput>

                <Text style={ProfileStyle.profilelabel}>Phone Number</Text>
                <TextInput style={ProfileStyle.profileinputs}></TextInput>

                <Text style={ProfileStyle.profilelabel}>Address</Text>
                <TextInput style={ProfileStyle.profileinputs}></TextInput>

                <Text style={ProfileStyle.profilelabel}>Gender</Text>
                <TextInput style={ProfileStyle.profileinputs}></TextInput>

                <TouchableOpacity style={ProfileStyle.profilebutton} >
                    <Text style={ProfileStyle.profilebuttontext} onPress={() => { handleSavePress() }}>
                        {editing ? "Save Profile" : "Edit Profile"}
                    </Text>
                </TouchableOpacity>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible }}
                >

                    <View style={ProfileStyle.modalOverlay}>
                        <View style={ProfileStyle.modalBox}>
                            <Text style={ProfileStyle.modalTitle}>Confirm Changes</Text>
                            <Text style={ProfileStyle.modalText}>Are you sure you want to save these changes?</Text>

                            <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
                                <TouchableOpacity
                                    style={ProfileStyle.modalButton}
                                    onPress={() => {
                                        confirmSave()
                                    }}
                                >
                                    <Text style={ProfileStyle.modalButtonText}>Save</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={ProfileStyle.modalCancelButton}
                                    onPress={() => {
                                        cancelSave()
                                    }}
                                >
                                    <Text style={ProfileStyle.modalButtonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

                <Modal
                    transparent
                    animationType='fade'
                    visible={saveModalVisible}
                    onRequestClose={() => { setSaveModalVisible }}
                >

                    <View style={ProfileStyle.modalOverlay}>
                        <View style={ProfileStyle.modalBox}>
                            <Text style={ProfileStyle.modalTitle}>Change Successful</Text>
                            <Text style={ProfileStyle.modalText}>Your profile changes has been changed and saved successfully!</Text>


                            <TouchableOpacity
                                style={ProfileStyle.modalButton}
                                onPress={() => {
                                    modalOK()
                                }}
                            >
                                <Text style={ProfileStyle.modalButtonText}>OK</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

            </View>
        </View>

    )
}