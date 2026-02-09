import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../../styles/adminstyles/PassportDashboardStyles";

export default function VisaApplications({ navigation }) {
  const applications = [
    {
      id: 1,
      title: "JAPAN VISA",
      ref: "VISA-5821",
      price: "₱ 3,500",
      status: "Approved",
    },
    {
      id: 2,
      title: "CANADA VISA",
      ref: "VISA-4152",
      price: "₱ 4,200",
      status: "Pending",
    },
    {
      id: 3,
      title: "KOREA VISA",
      ref: "VISA-7634",
      price: "₱ 3,800",
      status: "Approved",
    },
  ];

  const statData = [
    { number: "45", label: "Total Applications" },
    { number: "18", label: "Pending" },
    { number: "22", label: "Approved" },
    { number: "5", label: "Rejected" },
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
        <Text style={styles.pageTitle}>Visa Applications</Text>

        
        <View style={styles.statsRow}>
          {statData.map((stat, idx) => (
            <View key={idx} style={styles.statCard}>
              <Text style={styles.statNumber}>{stat.number}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        
        <TextInput
          placeholder="Search service..."
          style={styles.searchInput}
        />

        
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.serviceColumn]}>SERVICE</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>DOCS</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>PROCESS</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>DELIVERY</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>PAYMENT</Text>
          <Text style={[styles.tableHeaderText, styles.actionColumn, { textAlign: "center" }]}>ACT</Text>
        </View>

        
        {applications.map((item) => (
          <View key={item.id} style={styles.applicationCard}>
            
            <View style={styles.serviceColumn}>
              <Text style={styles.appTitle}>{item.title}</Text>
              <Text style={styles.appRef}>{item.ref}</Text>
              <Text style={styles.appPrice}>{item.price}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

           
            <TouchableOpacity style={[styles.statusColumn, styles.statusDropdown]}>
              <Text style={styles.dropdownText}>Not</Text>
              <Text style={[styles.dropdownText, { marginLeft: 2, fontSize: 8 }]}>▼</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={[styles.statusColumn, styles.statusDropdown]}>
              <Text style={styles.dropdownText}>Not</Text>
              <Text style={[styles.dropdownText, { marginLeft: 2, fontSize: 8 }]}>▼</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={[styles.statusColumn, styles.statusDropdown]}>
              <Text style={styles.dropdownText}>Not</Text>
              <Text style={[styles.dropdownText, { marginLeft: 2, fontSize: 8 }]}>▼</Text>
            </TouchableOpacity>

           
            <TouchableOpacity style={[styles.statusColumn, styles.statusDropdown]}>
              <Text style={styles.dropdownText}>Not</Text>
              <Text style={[styles.dropdownText, { marginLeft: 2, fontSize: 8 }]}>▼</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
              style={[styles.actionColumn, styles.viewButton]}
              onPress={() => navigation.navigate("visadocuments")}
            >
              <Text style={styles.viewText}>VIEW</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
