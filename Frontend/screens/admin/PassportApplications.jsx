import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../../styles/adminstyles/PassportDashboardStyles";

export default function PassportApplications({ navigation }) {
  const applications = [
    {
      id: 1,
      title: "New Passport",
      ref: "PASS-2983",
      price: "₱ 2,000",
      status: "Approved",
    },
    {
      id: 2,
      title: "Re-Passport",
      ref: "PASS-6821",
      price: "₱ 2,000",
      status: "Approved",
    },
    {
      id: 3,
      title: "Re-Passport",
      ref: "PASS-9021",
      price: "₱ 2,000",
      status: "Approved",
    },
  ];

  const statData = [
    { number: "67", label: "Total Applications" },
    { number: "30", label: "Pending" },
    { number: "23", label: "Approved" },
    { number: "14", label: "Rejected" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/70x40" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/32x32" }}
          style={styles.profileIcon}
        />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Passport Applications</Text>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          {statData.map((stat, idx) => (
            <View key={idx} style={styles.statCard}>
              <Text style={styles.statNumber}>{stat.number}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Search Input */}
        <TextInput
          placeholder="Search service..."
          style={styles.searchInput}
        />

        {/* Table Headers */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.serviceColumn]}>SERVICE</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>DOCS</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>PROCESS</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>DELIVERY</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>PAYMENT</Text>
          <Text style={[styles.tableHeaderText, styles.actionColumn, { textAlign: "center" }]}>ACT</Text>
        </View>

        {/* Applications List */}
        {applications.map((item) => (
          <View key={item.id} style={styles.applicationCard}>
            {/* Service Column */}
            <View style={styles.serviceColumn}>
              <Text style={styles.appTitle}>{item.title}</Text>
              <Text style={styles.appRef}>{item.ref}</Text>
              <Text style={styles.appPrice}>{item.price}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            {/* Documents Column */}
            <TouchableOpacity style={[styles.statusColumn, styles.statusDropdown]}>
              <Text style={styles.dropdownText}>Not</Text>
              <Text style={[styles.dropdownText, { marginLeft: 2, fontSize: 8 }]}>▼</Text>
            </TouchableOpacity>

            {/* Process Column */}
            <TouchableOpacity style={[styles.statusColumn, styles.statusDropdown]}>
              <Text style={styles.dropdownText}>Not</Text>
              <Text style={[styles.dropdownText, { marginLeft: 2, fontSize: 8 }]}>▼</Text>
            </TouchableOpacity>

            {/* Delivery Column */}
            <TouchableOpacity style={[styles.statusColumn, styles.statusDropdown]}>
              <Text style={styles.dropdownText}>Not</Text>
              <Text style={[styles.dropdownText, { marginLeft: 2, fontSize: 8 }]}>▼</Text>
            </TouchableOpacity>

            {/* Payment Column */}
            <TouchableOpacity style={[styles.statusColumn, styles.statusDropdown]}>
              <Text style={styles.dropdownText}>Not</Text>
              <Text style={[styles.dropdownText, { marginLeft: 2, fontSize: 8 }]}>▼</Text>
            </TouchableOpacity>

            {/* Actions Column */}
            <TouchableOpacity
              style={[styles.actionColumn, styles.viewButton]}
              onPress={() => navigation.navigate("passportdocuments")}
            >
              <Text style={styles.viewText}>VIEW</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
