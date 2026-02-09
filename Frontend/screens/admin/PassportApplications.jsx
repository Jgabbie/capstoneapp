import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../styles/PassportDashboardStyles";

export default function PassportApplications({ navigation }) {
  const applications = [
    {
      id: 1,
      title: "New Passport",
      ref: "PASS-2983",
      price: "₱2,000",
      status: "Approved",
    },
    {
      id: 2,
      title: "Re-Passport",
      ref: "PASS-6821",
      price: "₱2,000",
      status: "Approved",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER (same pattern as your other screens) */}
      <View style={styles.headerContainer}>
        <Image
          source={require("../materials/mrc_logo2.png")}
          style={styles.logo}
        />

        <Image
          source={require("../materials/profile_icon.png")}
          style={styles.profileIcon}
        />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Passport Applications</Text>

        {/* STATS */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>67</Text>
            <Text style={styles.statLabel}>Total Applications</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Approved</Text>
          </View>
        </View>

        {/* SEARCH */}
        <TextInput
          placeholder="Search applications..."
          style={styles.searchInput}
        />

        {/* APPLICATION LIST */}
        {applications.map(item => (
          <View key={item.id} style={styles.applicationCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.appTitle}>{item.title}</Text>
              <Text style={styles.appRef}>{item.ref}</Text>
              <Text style={styles.appPrice}>{item.price}</Text>
            </View>

            <View style={styles.rightColumn}>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>

              <TouchableOpacity
                style={styles.viewButton}
                onPress={() =>
                  navigation.navigate("PassportDocuments")
                }
              >
                <Text style={styles.viewText}>VIEW</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
