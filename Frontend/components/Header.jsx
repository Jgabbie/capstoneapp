import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "../styles/WishListStyles";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ onBack }) {
return (
    <View style={styles.header}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity>
                <Ionicons name="menu" size={26} color="#444" />
            </TouchableOpacity>
            {onBack && (
                <TouchableOpacity onPress={onBack}>
                    <Ionicons name="arrow-back" size={20} color="#444" />
                </TouchableOpacity>
            )}
        </View>

        <Image
        source={{ uri: "https://dummyimage.com/60x40/fff/000&text=LOGO" }}
        style={styles.logo}
        />

        <TouchableOpacity>
            <Ionicons name="person-circle-outline" size={28} color="#444" />
        </TouchableOpacity>
    </View>
);
}