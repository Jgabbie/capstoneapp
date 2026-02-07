import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/WishListStyles";

const PACKAGES = [
  {
    id: "1",
    title: "Boracay Tour Package",
    description:
      "Enjoy a relaxing getaway to Boracay, featuring its famous white-sand beaches and stunning sunsets...",
    oldPrice: "₱12,000",
    price: "₱8,400",
    discount: "-30%",
    image: "https://picsum.photos/200/140?1",
  },
  {
    id: "2",
    title: "Palawan Island Escape",
    description:
      "Discover crystal-clear lagoons, limestone cliffs, and breathtaking island views in Palawan...",
    oldPrice: "₱15,000",
    price: "₱10,500",
    discount: "-30%",
    image: "https://picsum.photos/200/140?2",
  },
  {
    id: "3",
    title: "Cebu City Adventure",
    description:
      "Experience waterfalls, heritage sites, and vibrant city life in Cebu...",
    oldPrice: "₱10,000",
    price: "₱7,000",
    discount: "-30%",
    image: "https://picsum.photos/200/140?3",
  },
];

export default function WishlistCard() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.packageTitle}>{item.title}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.oldPrice}>{item.oldPrice}</Text>
          <Text style={styles.price}>{item.price}</Text>

          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>View</Text>
          </TouchableOpacity>

          <Ionicons name="trash" size={20} color="#c0392b" />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={PACKAGES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
