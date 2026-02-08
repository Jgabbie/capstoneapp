import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VisaCard from "../components/VisaCard";
import styles from "../styles/VisaStyles";

export default function PassportAssistance({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passport Assistance</Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput placeholder="Search passport..." style={styles.searchInput} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <VisaCard
          country="APPLY FOR PASSPORT"
          description="Applying for a passport is the first step to traveling abroad, serving as your official travel document and proof of identity."
          image="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
          price="₱2,000"
          onPress={() => navigation.navigate("PassportDetails", { type: "apply", price: 2000 })}
        />

        <VisaCard
          country="RENEW PASSPORT"
          description="Renewing your passport ensures that your travel document remains valid for international trips without interruptions."
          image="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
          price="₱2,000"
          onPress={() => navigation.navigate("PassportDetails", { type: "renew", price: 2000 })}
        />

      </ScrollView>
    </View>
  );
}
