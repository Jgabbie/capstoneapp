import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "../styles/VisaStyles";

export default function VisaDetails() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.detailsCard}>
        <Text style={styles.detailsTitle}>Requirements for Japan VISA</Text>
        <Text style={styles.detailsPrice}>₱2,500 / per applicant</Text>

        {/* PASSPORT */}
        <View style={styles.requirementRow}>
          <Image
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Philippine_passport.png" }}
            style={styles.reqImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.reqTitle}>PASSPORT</Text>
            <Text style={styles.reqText}>
              A valid passport with at least six months validity.
            </Text>
          </View>
          <TouchableOpacity style={styles.uploadBtn}>
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>
        </View>

        {/* PHOTO */}
        <View style={styles.requirementRow}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.reqImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.reqTitle}>2x2 PHOTO</Text>
            <Text style={styles.reqText}>
              Recent passport-sized photo with white background.
            </Text>
          </View>
          <TouchableOpacity style={styles.uploadBtn}>
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* VISA PROCESS */}
      <View style={styles.processCard}>
        <Text style={styles.processTitle}>VISA Process</Text>

        <Text style={styles.stepTitle}>STEP 1</Text>
        <Text style={styles.stepText}>
          Upload all required documents and submit your application.
        </Text>

        <Text style={styles.stepTitle}>STEP 2</Text>
        <Text style={styles.stepText}>
          Once approved, submit original copies for verification.
        </Text>
      </View>

      <TouchableOpacity style={styles.proceedBtn}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
