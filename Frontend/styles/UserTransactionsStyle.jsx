import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";


const UserTransactionsStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 25,
        paddingBottom: 20
    },
    sideBarButton: {
        backgroundColor: '#E0E0E0',
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sideBarImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain'
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    profileIcon: {
        width: 45,
        height: 45,
        borderRadius: 22.5
    },
    bellButton: {
        position: 'absolute',
        top: -5,
        left: -10,
        zIndex: 1
    },
    bellIcon: {
        width: 25,
        height: 25
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 16,
        paddingTop: 16
    },
    usertransactionheading: {
        fontSize: 35,
        fontWeight: 600,
        fontFamily: "Montserrat_700Bold",
        color: "#305797",
        marginBottom: 20,
        height: 40
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
        alignItems: "center"
    },
    tableHeaderCell: {
        flex: 1,
        fontWeight: '700',
        color: "#fff",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "center"
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
    packageCell: {
        flex: 2,
        textAlign: "left",
        paddingLeft: 5
    },
    dateCell: {
        flex: 2,
        textAlign: "left",
        paddingLeft: 5
    },
    statusCell: {
        flex: 1.2,
        textAlign: "center",
    },
    paxCell: {
        flex: 1.2,
        textAlign: "center",
    },
    actionCell: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "center"
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
    },
    paginationButton: {
        backgroundColor: "#305797",
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 5
    },
    paginationText: {
        color: '#fff',
        fontWeight: '600'
    },
    dateFilter: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#6d6d6d",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        justifyContent: "center"
    },
    dateFilterText: {
        fontFamily: "Montserrat_400Regular",
        color: "#00000",
        fontSize: 14,
    },

})

export default UserTransactionsStyle