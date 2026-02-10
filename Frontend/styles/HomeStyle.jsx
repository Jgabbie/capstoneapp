import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
    },
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
        alignItems: 'center',
    },
    sideBarImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    SearchBar: {
        borderWidth: 1,
        backgroundColor: '#fff',
        fontFamily: "Montserrat_400Regular",
        borderColor: "#6d6d6d",
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    profileIcon: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    bellButton: {
        position: 'absolute',
        top: -5,
        left: -10,
        zIndex: 1,
    },
    bellIcon: {
        width: 25,
        height: 25,
    },
    // Search box style
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        marginHorizontal: 30,
        paddingHorizontal: 15,
        height: 50,
        borderRadius: 10,
    },
    searchIcon: {
        width: 23,
        height: 23,
        marginRight: 13,
    },
    searchInputText: {
        fontFamily: 'Roboto_400Regular',
        color: '#000000',
        fontSize: 22,
    },
    // Popular packages section
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 25,
        marginBottom: 15,
    },
    sectionTitle: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 22,
        fontWeight: '600',
        color: '#305797',
    },
    secondsectionTitle: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 22,
        marginLeft: 30,
        marginBottom: 10,
        fontWeight: '600',
        color: '#305797',
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 8,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        gap: 5,
    },
    buttonIcon: {
        width: 15,
        height: 15,
    },
    buttonText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        color: '#000',
    },
    // Travel card style
    card: {
        marginLeft: 30,
        width: 150,
    },
    cardImage: {
        width: 150,
        height: 100,
        borderRadius: 10,
        marginBottom: 5,
    },
    cardTitle: {
        fontFamily: 'Montserrat_500Medium',
        color: '#305797',
        fontSize: 14,
        fontWeight: '500',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 2,
    },
    infoIcon: {
        width: 12,
        height: 12,
    },
    infoText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 11,
        color: '#555',
    },
    priceText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
    },
    // New packages banner style
    bannerCard: {
        marginLeft: 30,
        marginRight: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginBottom: 30,
    },
    bannerImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    bannerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    bannerTitle: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#305797',
    },
    bannerSub: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#555',
    },
    viewAllBtn: {
        backgroundColor: '#305797',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        gap: 5,
    },
    viewAllText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    },
    arrowIcon: {
        width: 12,
        height: 12,
        tintColor: '#fff',
    }
})

export default HomeStyle;