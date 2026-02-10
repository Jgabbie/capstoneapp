import { View, Text, TextInput, TouchableOpacity, Modal, ImageBackground } from 'react-native'
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
import ResetPasswordStyle from '../styles/ResetPasswordStyle'

export default function ResetPassword() {
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

    const handleOtp = () => {
        setModalVisible(true)
    }
    return (
        <ImageBackground
            source={require("../materials/resetpassword_background.png")}
            resizeMode='cover'
        >
            <View style={ResetPasswordStyle.container}>
                <Text style={ResetPasswordStyle.resetpasswordheading}>Reset Password</Text>
                <Text style={ResetPasswordStyle.resetpasswordsecondheading}>Enter your Email</Text>

                <Text style={ResetPasswordStyle.resetpasswordlabel}>Email</Text>
                <TextInput style={ResetPasswordStyle.resetpasswordinputs}></TextInput>

                <View style={ResetPasswordStyle.resetpasswordlinkscontainer}>
                    <Text onPress={() => { cs.navigate("login") }} style={ResetPasswordStyle.resetpasswordlinks}>Remembered your Password? Login here</Text>
                </View>


                <TouchableOpacity onPress={() => { handleOtp() }} style={ResetPasswordStyle.resetpasswordbutton} >
                    <Text style={ResetPasswordStyle.resetpasswordbuttontext}>Reset Password</Text>
                </TouchableOpacity>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible }}
                >

                    <View style={ResetPasswordStyle.modalOverlay}>
                        <View style={ResetPasswordStyle.modalBox}>
                            <Text style={ResetPasswordStyle.modalTitle}>OTP Sent</Text>
                            <Text style={ResetPasswordStyle.modalText}>Enter your One-Time-Password here</Text>

                            <TextInput
                                style={ResetPasswordStyle.otpInput}
                                keyboardType='number-pad'
                                maxLength={6}
                            />
                            <TouchableOpacity
                                style={ResetPasswordStyle.modalButton}
                                onPress={() => {
                                    setModalVisible(false)
                                    cs.navigate("newpassword")
                                }}
                            >
                                <Text style={ResetPasswordStyle.modalButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>

    )
}