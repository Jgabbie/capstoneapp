import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/WishListStyles";

export default function WishlistCard() {
return (
    <View style={styles.card}>
    <Image
    source={{ uri: "https://picsum.photos/200/140" }}
    style={styles.cardImage}
    />

        <View style={styles.discountBadge}>
        <Text style={styles.discountText}>-30%</Text>
        </View>

        <View style={styles.cardContent}>
        <Text style={styles.packageTitle}>Boracay Tour Package</Text>

            <Text style={styles.description}>
            Enjoy a relaxing getaway to Boracay, featuring its famous white-sand
            beaches, crystal-clear waters, and stunning sunsets...
            </Text>

            <View style={styles.priceRow}>
                <Text style={styles.oldPrice}>₱12,000</Text>
                <Text style={styles.price}>₱8,400</Text>

                <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewText}>View</Text>
                </TouchableOpacity>

            <Ionicons name="trash" size={20} color="#c0392b" />
        </View>
        </View>
    </View>
);
}