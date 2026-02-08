import { StyleSheet } from "react-native";


const PaymentMethodStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 18,
        fontFamily: "Montserrat_700Bold",
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 14,
        fontFamily: "Montserrat_600SemiBold",
        marginTop: 20,
        marginBottom: 10,
        color: "#305797"
    },
    radioRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#305797",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#305797"
    },
    radioLabel: {
        fontSize: 14,
        fontFamily: "Roboto_400Regular"
    },
    button: {
        marginTop: 30,
        backgroundColor: "#305797",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontFamily: "Roboto_500Medium"
    },
    cardRow: {
        flexDirection: "row",
        gap: 12,
    },
    card: {
        flex: 1,
        height: 120,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 2
    },
    cardSelected: {
        borderColor: "#305797",
        borderWidth: 2,
        backgroundColor: "#F0F6FF"
    },
    cardLogo: {
        width: 140,
        height: 100,
        resizeMode: "contain"
    },
    summaryCard: {
        marginTop: 30,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "F5F8FF",
        borderWidth: 1,
        borderColor: "#305797"
    },
    summaryTitle: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 14,
        color: "#305797",
        marginBottom: 6
    },
    summaryAmount: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 22,
        color: "#305797",
        marginBottom: 4
    },
    summarySubtext: {
        fontFamily: "Roboto_400Regular",
        fontSize: 12,
        color: "#555"
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8
    },
    label: {
        fontFamily: "Roboto_400Regular",
        fontSize: 13,
        color: "#3b3b3b",
    },
    value: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 13,
        color: "#222"
    },
    divider: {
        height: 1,
        backgroundColor: "DDE3F0",
        marginVertical: 12
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalBox: {
        width: 360,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        alignItems: "center"
    },
    modalTitle: {
        fontSize: 22,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 10
    },
    modalText: {
        fontSize: 16,
        fontFamily: "Roboto_400Regular",
        textAlign: "center",
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: "#305797",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    modalCancelButton: {
        backgroundColor: "#9E2847",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto_500Medium"
    }
})

export default PaymentMethodStyle