import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeStyle from '../styles/HomeStyle'
import Sidebar from '../components/Sidebar'

export default function Home() {

    const cs = useNavigation()
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    
    return (
        <View style={HomeStyle.container}>
            
            {/* The Sidebar component - handles its own overlay and layout */}
            <Sidebar 
                visible={isSidebarVisible} 
                onClose={() => setSidebarVisible(false)} 
            />
            
            {/* Header Main Container */}
            <View style={HomeStyle.headerContainer}>
                
                {/* 1. Sidebar Button - Only one button here now */}
                <TouchableOpacity 
                    style={HomeStyle.sideBarButton}
                    onPress={() => setSidebarVisible(true)}
                >
                    <Image 
                        source={require('../materials/sidebar_btn.png')} 
                        style={HomeStyle.sideBarImage}
                    />
                </TouchableOpacity>

                {/* 2. Middle Section: M&RC Logo */}
                <Image 
                    source={require('../materials/mrc_logo2.png')} 
                    style={HomeStyle.logo}
                />

                {/* 3. Right Section: Profile and Bell */}
                <View style={HomeStyle.rightIconsContainer}>
                    
                    {/* Bell Button */}
                    <TouchableOpacity style={HomeStyle.bellButton}>
                        <Image 
                            source={require('../materials/bell_icon.png')} 
                            style={HomeStyle.bellIcon}
                        />
                    </TouchableOpacity>

                    {/* Profile Icon */}
                    <Image 
                        source={require('../materials/profile_icon.png')} 
                        style={HomeStyle.profileIcon}
                    />
                </View>

            </View>

            {/* Everything below this is empty now as requested */}
        </View>
    )
}