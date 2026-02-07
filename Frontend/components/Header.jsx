import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "../styles/WishListStyles";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
return (
    <View style={styles.header}>
        <TouchableOpacity>
            <Ionicons name="menu" size={26} color="#444" />
        </TouchableOpacity>

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