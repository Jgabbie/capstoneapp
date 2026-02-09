import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "../../styles/adminstyles/PassportDashboardStyles";

export default function VisaDocuments() {
  const documents = [
    { name: "2 x 2 Photo", submittedBy: "marionbalmonte", date: "January 26, 2026" },
    { name: "Passport", submittedBy: "marionbalmonte", date: "January 26, 2026" },
    { name: "PSA Birth Certificate", submittedBy: "marionbalmonte", date: "January 26, 2026" },
    { name: "Application Form", submittedBy: "marionbalmonte", date: "January 26, 2026" },
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
        <Text style={styles.pageTitle}>VISA Applications</Text>
        <Text style={styles.sectionTitle}>Documents</Text>

        
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.serviceColumn]}>DOCUMENT</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>SUBMITTED BY</Text>
          <Text style={[styles.tableHeaderText, styles.statusColumn, { textAlign: "center" }]}>DATE</Text>
          <Text style={[styles.tableHeaderText, styles.actionColumn, { textAlign: "center" }]}>ACTION</Text>
        </View>

        
        {documents.map((doc, index) => (
          <View key={index} style={styles.applicationCard}>
            
            <View style={styles.serviceColumn}>
              <Text style={styles.appTitle}>{doc.name}</Text>
            </View>

            
            <View style={[styles.statusColumn, { justifyContent: "center" }]}>
              <Text style={styles.docMeta}>{doc.submittedBy}</Text>
            </View>

            
            <View style={[styles.statusColumn, { justifyContent: "center" }]}>
              <Text style={styles.docMeta}>{doc.date}</Text>
            </View>

            
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
