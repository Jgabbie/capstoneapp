import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/WishListStyles";

export default function PassportDetails({ route }) {
  const { price } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Requirements for Passport
      </Text>
      <Text style={styles.price}>₱{price} / per applicant</Text>

      {/* VALID ID */}
      <View style={styles.card}>
        <Image
          source={{ uri: "https://picsum.photos/100" }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.packageTitle}>VALID ID</Text>
          <Text style={styles.description}>
            A valid passport or government-issued ID is mandatory for
            application.
          </Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>Upload File</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 2x2 PHOTO */}
      <View style={styles.card}>
        <Image
          source={{ uri: "https://picsum.photos/101" }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.packageTitle}>2 x 2 PHOTO</Text>
          <Text style={styles.description}>
            A 2x2 photo with white background, taken within the last 6 months.
          </Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>Upload File</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* PROCESS */}
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.packageTitle}>Passport Process</Text>

          <Text style={styles.description}>
            STEP 1{"\n"}
            Upload all required documents clearly and completely for admin
            review.
          </Text>

          <Text style={styles.description}>
            STEP 2{"\n"}
            Once approved, submit original documents for verification.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewText}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
