import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
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

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    return (
        <View>
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
                <Text style={SignupStyle.signuplinks}>Forgot your password?</Text>
            </View>


            <TouchableOpacity style={SignupStyle.signupbutton} >
                <Text style={SignupStyle.signupbuttontext}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}
