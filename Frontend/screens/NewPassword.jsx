import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from '@expo-google-fonts/montserrat'
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
import NewPasswordStyle from '../styles/NewPasswordStyle'

export default function NewPassword() {
    const cs = useNavigation()

    const [modalVisible, setModalVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const handleNewPass = () => {
        setModalVisible(true)
    }
    return (
        <View>
            <Text style={NewPasswordStyle.newpasswordheading}>New Password</Text>
            <Text style={NewPasswordStyle.newpasswordsecondheading}>Enter your new Password</Text>

            <Text style={NewPasswordStyle.newpasswordlabel}>Password</Text>
            <TextInput style={NewPasswordStyle.newpasswordinputs}></TextInput>

            <Text style={NewPasswordStyle.newpasswordlabel}>Confirm Password</Text>
            <TextInput style={NewPasswordStyle.newpasswordinputs}></TextInput>

            <View style={NewPasswordStyle.newpasswordlinkscontainer}>
                <Text onPress={() => { cs.navigate("login") }} style={NewPasswordStyle.newpasswordlinks}>Remembered your Password? Login here</Text>
            </View>


            <TouchableOpacity onPress={() => { handleNewPass() }} style={NewPasswordStyle.newpasswordbutton} >
                <Text style={NewPasswordStyle.newpasswordbuttontext}>New Password</Text>
            </TouchableOpacity>

            <Modal
                transparent
                animationType='fade'
                visible={modalVisible}
                onRequestClose={() => { setModalVisible }}
            >

                <View style={NewPasswordStyle.modalOverlay}>
                    <View style={NewPasswordStyle.modalBox}>
                        <Text style={NewPasswordStyle.modalTitle}>Password Reset</Text>
                        <Text style={NewPasswordStyle.modalText}>You have successfully changed your password</Text>

                        <TouchableOpacity
                            style={NewPasswordStyle.modalButton}
                            onPress={() => {
                                setModalVisible(false)
                                cs.navigate("login")
                            }}
                        >
                            <Text style={NewPasswordStyle.modalButtonText}>Go to Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </Modal>


        </View>
    )
}