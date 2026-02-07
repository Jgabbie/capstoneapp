import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import SidebarStyle from '../styles/SidebarStyle';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const Sidebar = ({ visible, onClose }) => {
    // Initialize navigation to allow the logout button to work
    const navigation = useNavigation();

    // Helper function to create menu buttons easily
    const MenuItem = ({ icon, title, onPress }) => (
        <TouchableOpacity style={SidebarStyle.navItem} onPress={onPress}>
            <Image source={icon} style={SidebarStyle.navIcon} />
            <Text style={SidebarStyle.navText}>{title}</Text>
        </TouchableOpacity>
    );

    // This function closes the sidebar first, then jumps to the login screen
    const handleLogout = () => {
        onClose(); // Hide the sidebar
        navigation.navigate("login"); // Navigate to Login.jsx
    };

    return (
        <Modal transparent={true} visible={visible} animationType="none">
            {/* The dark background overlay - clicking this closes the sidebar */}
            <TouchableOpacity 
                style={SidebarStyle.overlay} 
                activeOpacity={1} 
                onPress={onClose} 
            >
                {/* This stops clicks on the blue area from closing the menu */}
                <TouchableWithoutFeedback>
                    <View style={SidebarStyle.sidebarContainer}>
                        
                        {/* Profile Section: Image and Name are side-by-side */}
                        <View style={SidebarStyle.profileSection}>
                            <Image 
                                source={require('../materials/profile_icon60.png')} 
                                style={SidebarStyle.profileImg} 
                            />
                            <View style={SidebarStyle.nameContainer}>
                                <Text style={SidebarStyle.userName}>Juan Gabriel A. Lanuza</Text>
                                <Text style={SidebarStyle.userHandle}>GabH3rman067</Text>
                            </View>
                        </View>

                        {/* Top Divider */}
                        <View style={SidebarStyle.divider} />

                        {/* Navigation List */}
                        {/* Home Page will close the sidebar when clicked */}
                        <MenuItem 
                            title="Home Page" 
                            icon={require('../materials/home_icon.png')} 
                            onPress={onClose} 
                        />
                        
                        <MenuItem title="User Profile" icon={require('../materials/user_icon.png')} />
                        <MenuItem title="Bookings" icon={require('../materials/booking_icon.png')} />
                        <MenuItem title="Destinations" icon={require('../materials/destination_icon.png')} />
                        <MenuItem title="Featured" icon={require('../materials/featured_icon.png')} />
                        <MenuItem title="Transactions" icon={require('../materials/transactions_icon.png')} />
                        <MenuItem title="Visa Assistance" icon={require('../materials/visa_icon.png')} />
                        <MenuItem title="Passport Assistance" icon={require('../materials/passport_icon.png')} />

                        {/* Bottom Divider */}
                        <View style={SidebarStyle.divider} />

                        {/* Logout Button: Now connected to handleLogout */}
                        <MenuItem 
                            title="Logout" 
                            icon={require('../materials/logout_icon.png')} 
                            onPress={handleLogout}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
};

export default Sidebar;