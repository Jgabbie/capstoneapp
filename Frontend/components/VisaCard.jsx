import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/VisaStyles";

export default function VisaCard({ country, description, image, price, onPress }) {
  return (
    <View style={styles.card}>

      <Image source={{ uri: image }} style={styles.cardImage} />

      <View style={styles.cardContent}>
        <Text style={styles.packageTitle}>{country}</Text>

        <Text style={styles.description}>
          {description}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}</Text>

          <TouchableOpacity style={styles.applyButton} onPress={onPress}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
