import { ImageBackground, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginStyle from '../styles/LoginStyle'
import { useNavigation } from '@react-navigation/native'
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

export default function Login() {

    const cs = useNavigation()
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    return (
        <ImageBackground
            source={require("../materials/login_background.png")}
            style={LoginStyle.container}
            resizeMode='cover'
        >
            <View style={LoginStyle.container}>
                <Text style={LoginStyle.loginheading}>Welcome</Text>
                <Text style={LoginStyle.loginsecondheading}>Login Here</Text>

                <Text style={LoginStyle.loginlabel}>Username</Text>
                <TextInput style={LoginStyle.logininputs}></TextInput>

                <Text style={LoginStyle.loginlabel}>Password</Text>
                <TextInput style={LoginStyle.logininputs}></TextInput>

                <View style={LoginStyle.loginlinkscontainer}>
                    <Text onPress={() => { cs.navigate("signup") }} style={LoginStyle.loginlinks}>Don't have an account? Signup here</Text>
                    <Text onPress={() => { cs.navigate("resetpassword") }} style={LoginStyle.loginlinks}>Forgot your password?</Text>
                </View>

                <TouchableOpacity style={LoginStyle.loginbutton} onPress={() => { cs.navigate("home") }}>
                    <Text style={LoginStyle.loginbuttontext}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}