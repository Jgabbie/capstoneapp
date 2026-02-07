import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25, // Pushes content down from the status bar
    },
    headerContainer: {
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space out left, middle, and right components
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    sideBarButton: {
        backgroundColor: '#E0E0E0', 
        width: 45, // Match the profile icon size
        height: 45,
        borderRadius: 22.5, // Perfect circle
        justifyContent: 'center', // Center the image inside vertically
        alignItems: 'center', // Center the image inside horizontally
    },
    // The actual image inside the button
    sideBarImage: {
        width: 45, // Adjust this to make the icon look bigger or smaller inside the circle
        height: 45,
        resizeMode: 'contain', // Prevents the image from being cut off or distorted
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative', // Allows absolute positioning for the bell
    },
    profileIcon: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    bellButton: {
        position: 'absolute', // Position the bell relative to the profile icon
        top: -5,
        left: -10,
        zIndex: 1, // Ensure bell stays on top
    },
    bellIcon: {
        width: 25,
        height: 25,
    },
})

export default HomeStyle