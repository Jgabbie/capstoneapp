import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "../../styles/adminstyles/PassportDashboardStyles";
import AdminSidebar from "../../components/AdminSidebar";
import AllSidebarStyle from "../../styles/AllSidebarStyle";
import { useNavigation } from "@react-navigation/native";

export default function VisaDocuments() {

  const cs = useNavigation()

  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const documents = [
    { name: "2 x 2 Photo", submittedBy: "marionbalmonte", date: "January 26, 2026" },
    { name: "Passport", submittedBy: "marionbalmonte", date: "January 26, 2026" },
    { name: "PSA Birth Certificate", submittedBy: "marionbalmonte", date: "January 26, 2026" },
    { name: "Application Form", submittedBy: "marionbalmonte", date: "January 26, 2026" },
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            cs.navigate('visaapplications')
          }}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
