import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import WishlistCard from "../components/WishlistCard";
import styles from "../styles/WishListStyles";

export default function WishlistScreen() {
return (
<View style={styles.container}>
<Header />

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