import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "../../styles/adminstyles/PassportDashboardStyles";

export default function PassportDocuments() {
  const documents = [
    { name: "2 x 2 Photo", submittedBy: "juanlanuza", date: "January 26, 2026" },
    { name: "Valid ID", submittedBy: "juanlanuza", date: "January 26, 2026" },
    { name: "PSA Birth Certificate", submittedBy: "juanlanuza", date: "January 26, 2026" },
    { name: "Application Form", submittedBy: "juanlanuza", date: "January 26, 2026" },
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
        <Text style={styles.pageTitle}>Documents</Text>

        {/* Table Headers */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.serviceColumn]}>DOCUMENT</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>SUBMITTED BY</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>DATE</Text>
          <Text style={[styles.tableHeaderText, styles.actionColumn, { textAlign: "center" }]}>ACTION</Text>
        </View>

        {/* Documents List */}
        {documents.map((doc, index) => (
          <View key={index} style={styles.applicationCard}>
            {/* Document Name Column */}
            <View style={styles.serviceColumn}>
              <Text style={styles.appTitle}>{doc.name}</Text>
            </View>

            {/* Submitted By Column */}
            <View style={[styles.statusColumn, { justifyContent: "center" }]}>
              <Text style={styles.docMeta}>{doc.submittedBy}</Text>
            </View>

            {/* Date Column */}
            <View style={[styles.statusColumn, { justifyContent: "center" }]}>
              <Text style={styles.docMeta}>{doc.date}</Text>
            </View>

            {/* Action Column */}
            <TouchableOpacity
              style={[styles.actionColumn, styles.viewButton]}
            >
              <Text style={styles.viewText}>VIEW</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
