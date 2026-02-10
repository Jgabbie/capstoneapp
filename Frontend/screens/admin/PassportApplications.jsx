import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../../styles/adminstyles/PassportDashboardStyles";
import AdminSidebar from "../../components/AdminSidebar";
import AllSidebarStyle from "../../styles/AllSidebarStyle";

export default function PassportApplications({ navigation }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [searchText, setSearchText] = useState('')

  const applications = [
    {
      id: 1,
      title: "New Passport",
      ref: "PASS-2983",
      price: "₱ 2,000",
      status: "Pending",
    },
    {
      id: 2,
      title: "Re-Passport",
      ref: "PASS-6821",
      price: "₱ 2,000",
      status: "Pending",
    },
    {
      id: 3,
      title: "Re-Passport",
      ref: "PASS-9021",
      price: "₱ 2,000",
      status: "Pending",
    },
  ];



  return (
    <View>
      <AdminSidebar
        visible={isSidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />

      <View style={AllSidebarStyle.headerContainer}>

        <TouchableOpacity
          style={AllSidebarStyle.sideBarButton}
          onPress={() => setSidebarVisible(true)}
        >
          <Image
            source={require('../../materials/sidebar_btn.png')}
            style={AllSidebarStyle.sideBarImage}
          />
        </TouchableOpacity>

        <Image
          source={require('../../materials/mrc_logo2.png')}
          style={AllSidebarStyle.logo}
        />

        <View style={AllSidebarStyle.rightIconsContainer}>

          <TouchableOpacity style={AllSidebarStyle.bellButton}>
            <Image
              source={require('../../materials/bell_icon.png')}
              style={AllSidebarStyle.bellIcon}
            />
          </TouchableOpacity>

          <Image
            source={require('../../materials/profile_icon.png')}
            style={AllSidebarStyle.profileIcon}
          />
        </View>
      </View>


      <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>

        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.pageTitle}>Passport Applications</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statsRow}>
              <View style={styles.card}>
                <Text style={styles.cardValue}>40</Text>
                <Text style={styles.cardLabel}>Applications</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardValue}>20</Text>
                <Text style={styles.cardLabel}>Completed</Text>
              </View>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.card}>
                <Text style={styles.cardValue}>12</Text>
                <Text style={styles.cardLabel}>Pending</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardValue}>8</Text>
                <Text style={styles.cardLabel}>Cancelled</Text>
              </View>
            </View>
          </View>

          <TextInput
            style={styles.SearchBar}
            placeholder='Search Applications...'
            value={searchText}
            onChangeText={setSearchText}
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
    </View>

  );
}
