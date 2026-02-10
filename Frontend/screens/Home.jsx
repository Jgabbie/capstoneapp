import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeStyle from '../styles/HomeStyle'
import Sidebar from '../components/Sidebar'
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
import Header from '../components/Header'

export default function Home() {
    const cs = useNavigation()
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [searchText, setSearchText] = useState('')
    const [isChatOpen, setChatOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })
    // Component for the Small Travel Cards
    const TravelCard = () => (
        <View style={HomeStyle.card}>
            <Image source={require('../materials/japan_imagesmall.png')} style={HomeStyle.cardImage} />
            <Text style={HomeStyle.cardTitle}>Travel Package Name</Text>
            <View style={HomeStyle.infoRow}>
                <Image source={require('../materials/date_iconsmall.png')} style={HomeStyle.infoIcon} />
                <Text style={HomeStyle.infoText}>3 Days</Text>
            </View>
            <View style={HomeStyle.infoRow}>
                <Image source={require('../materials/location_iconsmall.png')} style={HomeStyle.infoIcon} />
                <Text style={HomeStyle.infoText}>Japan</Text>
            </View>
            <Text style={HomeStyle.priceText}>₱20000</Text>
        </View>
    );

    // Component for the Large Banner Cards
    const BannerCard = () => (
        <View style={HomeStyle.bannerCard}>
            <Image source={require('../materials/baguio_imagemedium.png')} style={HomeStyle.bannerImage} />
            <View style={HomeStyle.bannerFooter}>
                <View>
                    <Text style={HomeStyle.bannerTitle}>New Packages</Text>
                    <Text style={HomeStyle.bannerSub}>Holiday Vacation for 20'</Text>
                </View>
                <TouchableOpacity style={HomeStyle.viewAllBtn}>
                    <Text style={HomeStyle.viewAllText}>View All</Text>
                    <Image source={require('../materials/arrow_righticon.png')} style={HomeStyle.arrowIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <Sidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <Header openSidebar={() => {
                setSidebarVisible(true)
            }} />

            <ScrollView style={HomeStyle.container} showsVerticalScrollIndicator={false}>
                <TextInput
                    style={HomeStyle.SearchBar}
                    placeholder='Search any Package...'
                    value={searchText}
                    onChangeText={setSearchText}
                />

                {/* Popular packages header */}
                <View style={HomeStyle.sectionHeader}>
                    <Text style={HomeStyle.sectionTitle}>Popular Packages</Text>
                    <View style={HomeStyle.buttonRow}>
                        <TouchableOpacity style={HomeStyle.filterButton}>
                            <Text style={HomeStyle.buttonText}>Sort</Text>
                            <Image source={require('../materials/sort_icon.png')} style={HomeStyle.buttonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={HomeStyle.filterButton}>
                            <Text style={HomeStyle.buttonText}>Filter</Text>
                            <Image source={require('../materials/filter_icon.png')} style={HomeStyle.buttonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Horizontal scroll small cards */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
                    <TravelCard />
                    <TravelCard />
                    <TravelCard />
                </ScrollView>

                {/* Horizontal scroll big cards */}
                <Text style={HomeStyle.secondsectionTitle}>Packages for you</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <BannerCard />
                    <BannerCard />
                </ScrollView>

                <Text style={HomeStyle.secondsectionTitle}>Local Packages</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <BannerCard />
                    <BannerCard />
                </ScrollView>

            </ScrollView>

            <TouchableOpacity
                style={HomeStyle.chatbotButton}
                onPress={() => setChatOpen(true)}
            >
                <Image
                    source={require('../materials/chatbot_icon.png')}
                    style={HomeStyle.chatbotIcon}
                />

            </TouchableOpacity>

            {isChatOpen && (
                <View style={HomeStyle.chatOverlay}>
                    <View style={HomeStyle.chatBox}>
                        <View style={HomeStyle.chatHeader}>
                            <Text style={HomeStyle.chatTitle}>Chat with Us</Text>
                            <TouchableOpacity onPress={() => setChatOpen(false)}>
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={HomeStyle.chatMessages}>
                            {messages.map((msg, index) => (
                                <View style={HomeStyle.chatBubble} key={index} >
                                    <Text style={HomeStyle.chatText}>{msg}</Text>
                                </View>
                            ))}
                        </ScrollView>

                        <View style={HomeStyle.chatInputRow}>
                            <TextInput
                                style={HomeStyle.chatInput}
                                placeholder='Type a message...'
                                value={message}
                                onChangeText={setMessage}
                            />
                            <TouchableOpacity
                                style={HomeStyle.sendButton}
                                onPress={() => {
                                    if (!message.trim()) return;
                                    setMessages([...messages, message])
                                    setMessage('')
                                }}
                            >
                                <Text style={HomeStyle.sendText}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>

    )
}