import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Packages from './screens/Packages';
import PackageDetails from './screens/PackageDetails';
import WishlistScreen from './screens/WishlistScreen';
import ResetPassword from './screens/ResetPassword';
import NewPassword from './screens/NewPassword';
import Profile from './screens/Profile';
import UserBookings from './screens/UserBookings';
import UserTransactions from './screens/UserTransactions';
import UserInvoice from './screens/UserInvoice';
import TransactionReceipt from './screens/TransactionReceipt';
import PaymentMethod from './screens/PaymentMethod';
import VisaAssistance from './screens/VisaAssistance';
import VisaDetails from './screens/VisaDetails';
import PassportAssistance from './screens/PassportAssistance';
import PassportDetails from './screens/PassportDetails';
import AdminDashboard from './screens/admin/AdminDashboard';
import BookingManagement from './screens/admin/BookingManagement';
import PackageManagement from './screens/admin/PackageManagement';
import PassportAndVisaApplications from './screens/admin/PassportAndVisaApplications';
import ReviewManagement from './screens/admin/ReviewManagement';
import TransactionManagement from './screens/admin/TransactionManagement';
import UserManagement from './screens/admin/UserManagement';
import CancellationRequests from './screens/admin/CancellationRequests';
import AddPackage from './screens/admin/AddPackage';
import EditPackage from './screens/admin/EditPackage';
import VisaProgress from './screens/VisaProgress';
import PassportProgress from './screens/PassportProgress';
import AdminBookingInvoice from './screens/admin/AdminBookingInvoice';
import Auditing from './screens/admin/Auditing';
import Logging from './screens/admin/Logging';

import PassportApplications from './screens/admin/PassportApplications';
import PassportDocuments from './screens/admin/PassportDocuments';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

<<<<<<< HEAD
      <Stack.Navigator initialRouteName="passportapplications">
=======
      <Stack.Navigator initialRouteName="admindashboard">
>>>>>>> 84ca28c2a7a50e55006b2d49f469b27b0b93f32a
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="resetpassword" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="newpassword" component={NewPassword} options={{ headerShown: false }} />
        <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="userbookings" component={UserBookings} options={{ headerShown: false }} />
        <Stack.Screen name="usertransactions" component={UserTransactions} options={{ headerShown: false }} />
        <Stack.Screen name="bookinginvoice" component={UserInvoice} options={{ headerShown: false }} />
        <Stack.Screen name="transactionreceipt" component={TransactionReceipt} options={{ headerShown: false }} />
        <Stack.Screen name="paymentmethod" component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="wishlist" component={WishlistScreen} options={{ headerShown: false }} />
        <Stack.Screen name="packages" component={Packages} options={{ headerShown: false }} />
        <Stack.Screen name="package-details" component={PackageDetails} options={{ headerShown: false }} />
        <Stack.Screen name="VisaAssistance" component={VisaAssistance} options={{ headerShown: false }} />
        <Stack.Screen name="VisaDetails" component={VisaDetails} options={{ headerShown: false }} />
        <Stack.Screen name="PassportAssistance" component={PassportAssistance} options={{ headerShown: false }} />
        <Stack.Screen name="PassportDetails" component={PassportDetails} options={{ headerShown: false }} />
        <Stack.Screen name="admindashboard" component={AdminDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="usermanagement" component={UserManagement} options={{ headerShown: false }} />
        <Stack.Screen name="bookingmanagement" component={BookingManagement} options={{ headerShown: false }} />
        <Stack.Screen name="transactionmanagement" component={TransactionManagement} options={{ headerShown: false }} />
        <Stack.Screen name="packagemanagement" component={PackageManagement} options={{ headerShown: false }} />
        <Stack.Screen name="cancelmanagement" component={CancellationRequests} options={{ headerShown: false }} />
        <Stack.Screen name="ratingmanagement" component={ReviewManagement} options={{ headerShown: false }} />
        <Stack.Screen name="passvisamanagement" component={PassportAndVisaApplications} options={{ headerShown: false }} />
        <Stack.Screen name="addpackage" component={AddPackage} options={{ headerShown: false }} />
        <Stack.Screen name="editpackage" component={EditPackage} options={{ headerShown: false }} />
        <Stack.Screen name="visaprogress" component={VisaProgress} options={{ headerShown: false }} />
        <Stack.Screen name="passportprogress" component={PassportProgress} options={{ headerShown: false }} />
        <Stack.Screen name="adminbookinginvoice" component={AdminBookingInvoice} options={{ headerShown: false }} />
        <Stack.Screen name="auditing" component={Auditing} options={{ headerShown: false }} />
        <Stack.Screen name="logging" component={Logging} options={{ headerShown: false }} />

<<<<<<< HEAD
        <Stack.Screen name="passportapplications" component={PassportApplications} options={{ headerShown: false }} />
        <Stack.Screen name="passportdocuments" component={PassportDocuments} options={{ headerShown: false }} />
  
=======
>>>>>>> 84ca28c2a7a50e55006b2d49f469b27b0b93f32a
      </Stack.Navigator>

    </NavigationContainer>
  );
}

