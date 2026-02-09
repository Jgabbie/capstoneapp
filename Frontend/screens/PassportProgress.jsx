import React from "react";
import { View, Text } from "react-native";
import ProgressTracker from "../components/ProgressTracker";
import styles from "../styles/ProgressTrackerStyles";
export default function PassportProgress() {
  const passportSteps = [
    {
      title: "Documents Submitted",
      description: "Your documents are being verified",
    },
    {
      title: "Documents Approved",
      description: "You may now deliver the documents",
    },
    {
      title: "Passport Processing",
      description: "Your passport is being processed",
    },
    {
      title: "Passport Rejected",
      description: "Your documents are being delivered back",
    },
    {
      title: "Passport Completed",
      description: "Passport released successfully",
    },
  ];

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Passport Assistance</Text>

      <ProgressTracker steps={passportSteps} currentStep={1} />
    </View>
  );
}
