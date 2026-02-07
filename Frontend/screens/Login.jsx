import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginStyle from '../styles/LoginStyle'
import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const cs = useNavigation()

    return (
        <View>
            <Text style={LoginStyle.loginheading}>Welcome</Text>
            <Text style={LoginStyle.loginsecondheading}>Login Here</Text>

            <Text style={LoginStyle.loginlabel}>Username</Text>
            <TextInput style={LoginStyle.logininputs}></TextInput>

            <Text style={LoginStyle.loginlabel}>Password</Text>
            <TextInput style={LoginStyle.logininputs}></TextInput>

            <View style={LoginStyle.loginlinkscontainer}>
                <Text onPress={() => { cs.navigate("signup") }} style={LoginStyle.loginlinks}>Don't have an account? Signup here</Text>
            </View>

            <TouchableOpacity style={LoginStyle.loginbutton} >
                <Text style={LoginStyle.loginbuttontext}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}