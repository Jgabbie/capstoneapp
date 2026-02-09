import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import SidebarStyle from '../styles/SidebarStyle';
import { useNavigation } from '@react-navigation/native';

const Sidebar = ({ visible, onClose }) => {

    const navigation = useNavigation();
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);

    const MenuItem = ({ icon, title, onPress }) => (
        <TouchableOpacity style={SidebarStyle.navItem} onPress={onPress}>
            <Image source={icon} style={SidebarStyle.navIcon} />
            <Text style={SidebarStyle.navText}>{title}</Text>
        </TouchableOpacity>
    );

    const handleNavigation = (screenName) => {
        onClose();
        navigation.navigate(screenName);
    };

    const openLogoutConfirm = () => {
        setLogoutModalVisible(true);
    };

    const confirmLogout = () => {
        setLogoutModalVisible(false);
        onClose();
        navigation.navigate("login");
    };

    return (
        <Modal transparent={true} visible={visible} animationType="none">
            
            <TouchableOpacity 
                style={SidebarStyle.overlay} 
                activeOpacity={1} 
                onPress={onClose} 
            >
                <TouchableWithoutFeedback>
                    <View style={SidebarStyle.sidebarContainer}>
                        
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

                        <View style={SidebarStyle.divider} />

                        <MenuItem 
                            title="Home Page" 
                            icon={require('../materials/home_icon.png')} 
                            onPress={() => handleNavigation("home")} 
                        />
                        <MenuItem 
                            title="User Profile" 
                            icon={require('../materials/user_icon.png')} 
                            onPress={() => handleNavigation("profile")} 
                        />
                        <MenuItem 
                            title="Bookings" 
                            icon={require('../materials/booking_icon.png')} 
                            onPress={() => handleNavigation("userbookings")}
                        />
                        <MenuItem
                            title="Destinations"
                            icon={require('../materials/destination_icon.png')}
                            onPress={() => handleNavigation("packages")}
                        />
                        <MenuItem
                            title="Featured"
                            icon={require('../materials/featured_icon.png')}
                            onPress={() => handleNavigation("wishlist")}
                        />
                        <MenuItem
                            title="Transactions"
                            icon={require('../materials/transactions_icon.png')}
                            onPress={() => handleNavigation("usertransactions")}
                        />
                        <MenuItem
                            title="Visa Assistance"
                            icon={require('../materials/visa_icon.png')}
                            onPress={() => handleNavigation("VisaAssistance")}
                        />
                        <MenuItem
                            title="Passport Assistance"
                            icon={require('../materials/passport_icon.png')}
                            onPress={() => handleNavigation("PassportAssistance")}
                        />
                        
                        <View style={SidebarStyle.divider} />

                        <MenuItem 
                            title="Logout" 
                            icon={require('../materials/logout_icon.png')} 
                            onPress={openLogoutConfirm}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={logoutModalVisible}
                animationType="none"
            >
                <View style={SidebarStyle.modalOverlay}>
                    <View style={SidebarStyle.modalBox}>
                        
                        <TouchableOpacity 
                            style={SidebarStyle.closeButton} 
                            onPress={() => setLogoutModalVisible(false)}
                        >
                            <Image source={require('../materials/x_icon.png')} style={SidebarStyle.xIcon} />
                        </TouchableOpacity>

                        <Text style={SidebarStyle.modalTitle}>CONFIRM LOGOUT</Text>
                        
                        <Image source={require('../materials/logout_iconbig.png')} style={SidebarStyle.logoutIconBig} />

                        <Text style={SidebarStyle.modalText}>Are you sure you want to Logout?</Text>

                        <View style={SidebarStyle.buttonRow}>
                            <TouchableOpacity 
                                style={SidebarStyle.cancelBtn} 
                                onPress={() => setLogoutModalVisible(false)}
                            >
                                <Text style={SidebarStyle.buttonText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={SidebarStyle.logoutBtn} 
                                onPress={confirmLogout}
                            >
                                <Text style={SidebarStyle.buttonText}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </Modal>
    );
};

export default Sidebar;