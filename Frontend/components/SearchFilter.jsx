import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/WishListStyles";

export default function SearchFilter() {
return (
    <View style={styles.filterRow}>
        <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#999" />
            <TextInput placeholder="Search..." style={styles.searchInput} />
        </View>

            <TouchableOpacity style={styles.statusButton}>
                <Ionicons name="checkmark-circle" size={16} color="#2d5fb8" />
                <Text style={styles.statusText}>Status</Text>
            </TouchableOpacity>
    </View>
);
}