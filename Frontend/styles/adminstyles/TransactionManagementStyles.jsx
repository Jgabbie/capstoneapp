import { StyleSheet } from "react-native";


const TransactionManagementStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 16,
        paddingTop: 16
    },
    header: {
        fontSize: 22,
        color: "#305797",
        fontWeight: '700',
        marginBottom: 16,
    },
    statsContainer: {
        marginBottom: 20,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#fff',
        width: '48%',
        padding: 16,
        borderRadius: 10,
        elevation: 3
    },
    cardValue: {
        fontSize: 20,
        fontWeight: '700',

    },
    cardLabel: {
        marginTop: 4,
        color: '#777'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#305797",
        marginBottom: 12
    }, userbookingheading: {
        fontSize: 35,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 20,
        height: 40
    },
    container: {
        flex: 1,
        padding: 20
    },
    SearchBar: {
        borderWidth: 1,
        backgroundColor: '#fff',
        fontFamily: "Montserrat_400Regular",
        borderColor: "#6d6d6d",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15
    },
    filtersContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        gap: 10
    },
    picker: {
        flex: 1,
        height: 40,
        fontFamily: "Montserrat_400Regular",
        borderRadius: 10
    },
    table: {
        marginTop: 10
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: "#305797",
        borderBottomWidth: 1,
        borderBottomColor: "#6d6d6d",
        paddingBottom: 5,
        paddingVertical: 6,
        paddingHorizontal: 5,
        alignItems: "center",
    },
    tableHeaderCell: {
        flex: 1,
        fontWeight: '700',
        color: "#fff",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "center",
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 10,
        alignItems: "center"
    },
    tableCell: {
        flex: 1,
        fontSize: 10,
        textAlign: "center",
    },

    usernameCell: {
        flex: 2,
        textAlign: "left",
        paddingLeft: 5,
    },
    emailCell: {
        flex: 2,
        textAlign: "left",
        paddingLeft: 5,
    },
    statusCell: {
        flex: 1.2,
        textAlign: "center"
    },
    roleCell: {
        flex: 1.2,
        textAlign: "center"
    },
    actionCell: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "center"
    },
    viewButton: {
        backgroundColor: "#305797",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
        margin: 3
    },
    cancelButton: {
        backgroundColor: "#9E2847",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    viewButtonText: {
        color: "#fff",
        fontWeight: '500',
        fontSize: 8
    },
    paginationButton: {
        backgroundColor: '#305797',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    paginationText: {
        color: '#fff',
        fontWeight: '600',
    },
})

export default TransactionManagementStyles