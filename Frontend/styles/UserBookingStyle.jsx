import { StyleSheet } from "react-native";

const UserBookingStyle = StyleSheet.create({

    userbookingheading: {
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
        borderColor: "#6d6d6d",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15
    },
    filtersContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    picker: {
        flex: 1,
        height: 40,
        marginHorizontal: 5
    },
    table: {
        marginTop: 10
    },
    tableHeader: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#6d6d6d",
        paddingBottom: 5,
        marginBottom: 5
    },
    tableHeaderCell: {
        flex: 1,
        fontWeight: '700',
        color: "#305797"
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
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalBox: {
        width: 300,
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

export default UserBookingStyle