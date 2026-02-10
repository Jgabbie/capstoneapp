import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import HeaderStyle from '../styles/HeaderStyle'
import { useNavigation } from '@react-navigation/native'


export default function Header({ openSidebar }) {
    const cs = useNavigation()
    return (
        <View style={HeaderStyle.headerContainer}>
            <TouchableOpacity
                style={HeaderStyle.sideBarButton}
                onPress={openSidebar}
            >
                <Image
                    source={require('../materials/sidebar_btn.png')}
                    style={HeaderStyle.sideBarImage}
                />
            </TouchableOpacity>

            <Image
                source={require('../materials/mrc_logo2.png')}
                style={HeaderStyle.logo}
            />

            <View style={HeaderStyle.rightIconsContainer}>
                <TouchableOpacity
                    style={HeaderStyle.bellButton}
                    onPress={() => { cs.navigate("notifications") }}
                >
                    <Image
                        source={require('../materials/bell_icon.png')}
                        style={HeaderStyle.bellIcon}
                    />
                </TouchableOpacity>

                <Image
                    source={require('../materials/profile_icon.png')}
                    style={HeaderStyle.profileIcon}
                />
            </View>
        </View>
    )
}