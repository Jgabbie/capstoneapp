import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";


const UserTransactionsStyle = StyleSheet.create({

    usertransactionheading: {
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
        fontSize: 10
    },
    viewButton: {
        backgroundColor: "#305797",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    viewButtonText: {
        color: "#fff",
        fontWeight: '500'
    }

})

export default UserTransactionsStyle