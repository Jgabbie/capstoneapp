import { StyleSheet } from "react-native";


const TransactionReceiptStyle = StyleSheet.create({

    container: {
        padding: 20,
        backgroundColor: "#fff",
        flex: 1
    },
    header: {
        alignItems: "center",
        marginBottom: 15
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    companyName: {
        fontSize: 22,
        fontWeight: '700',
        color: "#305797",
        marginTop: 5
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: "center",
        color: "#305797"
    },
    card: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 20
    },
    label: {
        fontSize: 14,
        color: "#6d6d6d",
        marginTop: 10
    },
    value: {
        fontSize: 16,
        fontWeight: "500"
    },
    amount: {
        fontSize: 22,
        fontWeight: "700",
        color: "#305797",
        marginTop: 10
    },
    button: {
        marginTop: 10,
        backgroundColor: "#305797",
        padding: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    },
    footer: {
        marginTop: 30,
        borderTopWidth: 1,
        borderColor: "#ddd",
        paddingTop: 10,
        alignItems: "center"
    },
    footerText: {
        fontSize: 13,
        color: "#6d6d6d"
    },
    installmentSection: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 15
    },
    installmentTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
        color: "#305797",
        textAlign: "center"
    },
    installmentHeader: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingBottom: 5,
        marginBottom: 5,
    },
    installmentRow: {
        flexDirection: "row",
        paddingVertical: 6,
        borderBottomWidth: 0.5,
        borderColor: "#eee"
    },
    installmentCell: {
        flex: 2,
        fontSize: 14
    },
    installmentAmount: {
        flex: 1,
        fontSize: 14,
        fontWeight: '600',
        textAlign: "right"
    },
    headerText: {
        fontWeight: "700"
    },
    receiptMeta: {
        marginTop: 10,
        marginBottom: 20,
        alignItems: "center"
    },
    receiptNumber: {
        fontSize: 20,
        fontWeight: '700',
        color: '#305797',
        marginBottom: 5
    },
    receiptMetaText: {
        fontSize: 14,
        color: "#444"
    },
    receiptMetaValue: {
        fontWeight: '600'
    }
})

export default TransactionReceiptStyle