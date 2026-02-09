import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import WishlistCard from "../components/WishlistCard";
import styles from "../styles/WishListStyles";
import Sidebar from "../components/Sidebar";

export default function WishlistScreen() {
    const [isSidebarVisible, setSidebarVisible] = useState(false)
    return (
        <View style={styles.container}>
            <Header />

            <Sidebar
                visible={isSidebarVisible}
                onClose={() => setSidebarVisible(false)}
            />

            <Text style={styles.title}>Wishlisted Packages</Text>

            <SearchFilter />

            <ScrollView showsVerticalScrollIndicator={false}>
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
                <WishlistCard />
            </ScrollView>
        </View>
    );
}