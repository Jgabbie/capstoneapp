import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import UserInvoiceStyle from '../../styles/UserInvoiceStyle'

export default function AdminBookingInvoice(props) {
    const cs = useNavigation()
    const { booking } = props.route.params
    return (
        <ScrollView style={UserInvoiceStyle.container}>
            <Text style={UserInvoiceStyle.title}>Booking Invoice</Text>
            <View style={UserInvoiceStyle.card}>

                <View style={UserInvoiceStyle.header}>
                    <Image
                        source={require("../../assets/images/Logo.png")}
                        style={UserInvoiceStyle.logo}
                    />
                    <Text style={UserInvoiceStyle.companyName}>M&RC Travel and Tours</Text>
                </View>

                <View style={UserInvoiceStyle.invoiceMeta}>
                    <Text style={UserInvoiceStyle.invoiceNumber}>INVOICE #7322</Text>
                    <Text style={UserInvoiceStyle.invoiceMetaText}>
                        Date Issued: {' '}
                        <Text style={UserInvoiceStyle.invoiceMetaValue}>
                            January 3, 2026
                        </Text>
                    </Text>

                    <Text style={UserInvoiceStyle.invoiceMetaText}>
                        Issued By: {' '}
                        <Text style={UserInvoiceStyle.invoiceMetaValue}>
                            Juan Gabriel Lanuza
                        </Text>
                    </Text>
                </View>

                <Text style={UserInvoiceStyle.label}>Package: {booking.package}</Text>
                <Text style={UserInvoiceStyle.value}></Text>

                <Text style={UserInvoiceStyle.label}>Booking Date: {booking.date}</Text>
                <Text style={UserInvoiceStyle.value}></Text>

                <Text style={UserInvoiceStyle.label}>Number of Pax: {booking.pax}</Text>
                <Text style={UserInvoiceStyle.value}></Text>

                <View style={UserInvoiceStyle.installmentSection}>
                    <Text style={UserInvoiceStyle.installmentTitle}>Installment Plan</Text>
                    <View style={UserInvoiceStyle.installmentHeader}>
                        <Text style={[UserInvoiceStyle.installmentCell, UserInvoiceStyle.headerText]}>Payment</Text>
                        <Text style={[UserInvoiceStyle.installmentCell, UserInvoiceStyle.headerText]}>Due Date</Text>
                        <Text style={[UserInvoiceStyle.installmentCell, UserInvoiceStyle.headerText]}>Amount</Text>
                    </View>

                    <View style={UserInvoiceStyle.installmentRow}>
                        <Text style={UserInvoiceStyle.installmentCell}>Down Payment</Text>
                        <Text style={UserInvoiceStyle.installmentCell}>Upon Booking</Text>
                        <Text style={UserInvoiceStyle.installmentAmount}>₱8,000</Text>
                    </View>

                    <View style={UserInvoiceStyle.installmentRow}>
                        <Text style={UserInvoiceStyle.installmentCell}>1st Quarter</Text>
                        <Text style={UserInvoiceStyle.installmentCell}>March 04</Text>
                        <Text style={UserInvoiceStyle.installmentAmount}>₱6,000</Text>
                    </View>

                    <View style={UserInvoiceStyle.installmentRow}>
                        <Text style={UserInvoiceStyle.installmentCell}>2nd Quarter</Text>
                        <Text style={UserInvoiceStyle.installmentCell}>June 05</Text>
                        <Text style={UserInvoiceStyle.installmentAmount}>₱6,000</Text>
                    </View>

                    <View style={UserInvoiceStyle.installmentRow}>
                        <Text style={UserInvoiceStyle.installmentCell}>3rd Quarter</Text>
                        <Text style={UserInvoiceStyle.installmentCell}>September 06</Text>
                        <Text style={UserInvoiceStyle.installmentAmount}>₱6,000</Text>
                    </View>

                    <View style={UserInvoiceStyle.installmentRow}>
                        <Text style={UserInvoiceStyle.installmentCell}>4th Quarter</Text>
                        <Text style={UserInvoiceStyle.installmentCell}>December 07</Text>
                        <Text style={UserInvoiceStyle.installmentAmount}>₱4,000</Text>
                    </View>
                </View>



                <View style={UserInvoiceStyle.footer}>
                    <Text style={UserInvoiceStyle.footerText}> 123 Main Street, Manila, Philippines</Text>
                    <Text style={UserInvoiceStyle.footerText}> +63 912 345 6789</Text>
                    <Text style={UserInvoiceStyle.footerText}> m&rc@travels.com</Text>
                </View>
            </View>
            <TouchableOpacity
                style={UserInvoiceStyle.button}
                onPress={() => {
                    cs.navigate('paymentmethod')
                }}>
                <Text style={UserInvoiceStyle.buttonText}>Send</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={UserInvoiceStyle.button}
                onPress={() => {
                    cs.navigate('userbookings')
                }}>
                <Text style={UserInvoiceStyle.buttonText}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}