import { View, Text, TextInput, TouchableOpacity, Modal, ImageBackground } from 'react-native'
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
import SignupStyle from '../styles/SignupStyle'
import { useNavigation } from '@react-navigation/native'


export default function Signup() {

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

    const handleSignup = () => {
        setModalVisible(true)
    }

    return (
        <ImageBackground
            source={require("../materials/signup_background.png")}
            resizeMode='cover'
        >
            <View style={SignupStyle.container}>
                <Text style={SignupStyle.signupheading}>Welcome</Text>
                <Text style={SignupStyle.signupsecondheading}>Create an Account</Text>

                <Text style={SignupStyle.signuplabel}>Username</Text>
                <TextInput style={SignupStyle.signupinputs}></TextInput>

                <View style={SignupStyle.fullnamecontainer}>
                    <View>
                        <Text style={SignupStyle.signuplabel} >First Name</Text>
                        <TextInput style={SignupStyle.nameinputs}></TextInput>
                    </View>

                    <View>
                        <Text style={SignupStyle.signuplabel}>Last Name</Text>
                        <TextInput style={SignupStyle.nameinputs}></TextInput>
                    </View>
                </View>

                <Text style={SignupStyle.signuplabel}>Email</Text>
                <TextInput style={SignupStyle.signupinputs}></TextInput>

                <Text style={SignupStyle.signuplabel}>Phone Number</Text>
                <TextInput style={SignupStyle.signupinputs}></TextInput>

                <Text style={SignupStyle.signuplabel}>Password</Text>
                <TextInput style={SignupStyle.signupinputs}></TextInput>

                <Text style={SignupStyle.signuplabel}>Confirm Password</Text>
                <TextInput style={SignupStyle.signupinputs}></TextInput>

                <View style={SignupStyle.signuplinkscontainer}>
                    <Text onPress={() => { cs.navigate("login") }} style={SignupStyle.signuplinks}>Already have an account? Login here</Text>
                </View>


                <TouchableOpacity style={SignupStyle.signupbutton} >
                    <Text style={SignupStyle.signupbuttontext} onPress={() => { handleSignup() }}>Signup</Text>
                </TouchableOpacity>

                <Modal
                    transparent
                    animationType='fade'
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible }}
                >

                    <View style={SignupStyle.modalOverlay}>
                        <View style={SignupStyle.modalBox}>
                            <Text style={SignupStyle.modalTitle}>Account Created</Text>
                            <Text style={SignupStyle.modalText}>Your Account has been successfully created</Text>

                            <TouchableOpacity
                                style={SignupStyle.modalButton}
                                onPress={() => {
                                    setModalVisible(false)
                                    cs.navigate("login")
                                }}
                            >
                                <Text style={SignupStyle.modalButtonText}>Go to Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </Modal>
            </View>
        </ImageBackground>
    )
}
